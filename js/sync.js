// THE WARRIOR'S CODEX — Supabase Sync Layer
// No login. Device ID based. Data persists to cloud automatically.

const SUPABASE_URL = 'https://mgfohefbptilbjowknxy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZm9oZWZicHRpbGJqb3drbnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MzEwMjgsImV4cCI6MjA5MTUwNzAyOH0.JSixSKd0Bjx4RUGYMh3VwnSb1Cn0iWZgP8JDBQzxZlo';

let supabase = null;
let deviceId = null;
let syncQueue = [];
let syncTimer = null;

// Initialize
function initSync() {
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
        console.log('Supabase not available, using localStorage only');
        return;
    }

    // Get or create device ID
    deviceId = localStorage.getItem('warrior_device_id');
    if (!deviceId) {
        deviceId = 'dev_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
        localStorage.setItem('warrior_device_id', deviceId);
    }

    // Pull cloud data on first load (cloud overwrites local if newer)
    pullFromCloud();
}

// Save to both localStorage and cloud
function saveData(key, value) {
    // Always save to localStorage immediately (fast, offline-capable)
    const jsonVal = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, jsonVal);

    // Queue cloud sync (debounced to avoid hammering the API)
    queueSync(key, value);
}

// Read from localStorage (instant, cloud sync happens in background)
function loadData(key, defaultValue) {
    const val = localStorage.getItem(key);
    if (val === null) return defaultValue;
    try {
        return JSON.parse(val);
    } catch {
        return val;
    }
}

// Queue a sync operation (debounced — waits 2 seconds of inactivity before pushing)
function queueSync(key, value) {
    if (!supabase || !deviceId) return;

    // Remove existing entry for this key
    syncQueue = syncQueue.filter(item => item.key !== key);
    syncQueue.push({ key, value });

    // Debounce
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(flushSyncQueue, 2000);
}

// Push all queued changes to Supabase
async function flushSyncQueue() {
    if (!supabase || !deviceId || syncQueue.length === 0) return;

    const batch = [...syncQueue];
    syncQueue = [];

    for (const item of batch) {
        try {
            const jsonValue = typeof item.value === 'string' ? JSON.parse(item.value) : item.value;
            await supabase.from('warrior_data').upsert({
                device_id: deviceId,
                data_key: item.key,
                data_value: jsonValue,
                updated_at: new Date().toISOString()
            }, { onConflict: 'device_id,data_key' });
        } catch (e) {
            console.log('Sync failed for', item.key, e.message);
            // Re-queue failed items
            syncQueue.push(item);
        }
    }
}

// Pull all data from cloud on load
async function pullFromCloud() {
    if (!supabase || !deviceId) return;

    try {
        const { data, error } = await supabase
            .from('warrior_data')
            .select('data_key, data_value, updated_at')
            .eq('device_id', deviceId);

        if (error) {
            console.log('Cloud pull failed:', error.message);
            return;
        }

        if (data && data.length > 0) {
            data.forEach(row => {
                // Only overwrite local if cloud is newer
                const localVal = localStorage.getItem(row.data_key);
                if (localVal === null || row.data_value !== null) {
                    localStorage.setItem(row.data_key, JSON.stringify(row.data_value));
                }
            });
            console.log(`Synced ${data.length} items from cloud`);
        }
    } catch (e) {
        console.log('Cloud pull error:', e.message);
    }
}

// Override localStorage.setItem to automatically sync warrior_ keys
const originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
    originalSetItem(key, value);
    // Auto-sync any warrior_ prefixed keys to cloud
    if (key.startsWith('warrior_') && supabase && deviceId) {
        try {
            const parsed = JSON.parse(value);
            queueSync(key, parsed);
        } catch {
            queueSync(key, value);
        }
    }
};

// Initialize sync on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSync);
} else {
    initSync();
}

// Flush queue before page unload
window.addEventListener('beforeunload', () => {
    if (syncQueue.length > 0) {
        flushSyncQueue();
    }
});
