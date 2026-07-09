// THE WARRIOR'S CODEX — Workout Data
const WORKOUTS = {
    monday: {
        name: "The Forge",
        theme: "Kettlebell Strength — Pull & Hinge",
        quote: "The back is the shield wall. The grip is the sword hand. Build both until they cannot fail.",
        duration: "75 min",
        warmup: [
            { exercise: "Jump rope", duration: "2 min" },
            { exercise: "World's greatest stretch", duration: "5/side" },
            { exercise: "Inchworm to push-up", duration: "5 reps" },
            { exercise: "Cossack squat (bodyweight)", duration: "5/side" },
            { exercise: "Kettlebell halo (16kg)", duration: "8/direction" },
            { exercise: "KB around-the-body pass (16kg)", duration: "10/direction" },
            { exercise: "Single-leg RDL (bodyweight)", duration: "5/side" }
        ],
        blocks: [
            {
                title: "Block A: Heavy Hinge",
                time: "20 min",
                exercises: [
                    { name: "Trap bar deadlift", sets: "5 x 5", weight: "Work to heavy 5 (aim 140-160kg)", rest: "2-3 min", notes: "One of only 2 barbell exercises in the programme. Earns its place through irreplaceable loading.", video: "trap_bar_deadlift" },
                    { name: "Single-arm kettlebell swing", sets: "4 x 10/side", weight: "28-32kg", rest: "60 sec", video: "single_arm_kb_swing" }
                ]
            },
            {
                title: "Block B: Pulling Strength",
                time: "20 min",
                exercises: [
                    { name: "Weighted pull-ups", sets: "5 x 5", weight: "+10-20kg via belt", rest: "2 min", video: "weighted_pullups" },
                    { name: "Kettlebell gorilla row (double)", sets: "4 x 8", weight: "2 x 24kg", rest: "90 sec", video: "kb_gorilla_row" },
                    { name: "Ring face pulls", sets: "3 x 15", weight: "Bodyweight", rest: "60 sec", video: "ring_face_pulls" }
                ]
            },
            {
                title: "Block C: The Spartan Chain",
                time: "15 min",
                subtitle: "Complete all reps one side, then switch. 4 rounds/side. Don't put the bell down.",
                flow: {
                    name: "The Spartan Chain",
                    weight: "24kg",
                    rounds: "4 per side (8 total)",
                    rest: "90 sec between full rounds",
                    steps: [
                        { movement: "Single-arm dead clean", reps: "5" },
                        { movement: "Snatch", reps: "5" },
                        { movement: "Overhead reverse lunge", reps: "5" },
                        { movement: "Single-arm row (in hinge)", reps: "5" },
                        { movement: "Single-arm swing", reps: "10" }
                    ]
                }
            },
            {
                title: "Block D: Grip and Carry",
                time: "10 min",
                exercises: [
                    { name: "Heavy farmer carry", sets: "3 x 40m", weight: "2 x 32kg KB", rest: "60 sec", video: "farmer_carry" },
                    { name: "Dead hang from pull-up bar", sets: "3 x max time", weight: "Bodyweight", rest: "60 sec", video: "dead_hang" },
                    { name: "Towel hang", sets: "2 x max time", weight: "Bodyweight", rest: "45 sec", notes: "Drape towel over bar, grip towel", video: "towel_hang" }
                ]
            }
        ]
    },
    tuesday: {
        name: "The Gymnast-Warrior",
        theme: "Bodyweight Mastery & Movement Flow",
        quote: "A warrior who cannot control his own body has no business picking up a weapon.",
        duration: "60 min",
        warmup: [
            { exercise: "Bear crawl (forward/back)", duration: "20m each" },
            { exercise: "Lateral ape walk", duration: "10m each" },
            { exercise: "Scorpion stretch (prone)", duration: "5/side" },
            { exercise: "Deep squat sit (prying)", duration: "60 sec" },
            { exercise: "Scapular pull-ups", duration: "10 reps" },
            { exercise: "Skin the cat", duration: "5 reps" },
            { exercise: "Wrist circles & push-ups", duration: "20 each" }
        ],
        blocks: [
            {
                title: "Block A: Straight-Arm Strength & Levers",
                time: "15 min",
                exercises: [
                    { name: "Front lever progression", sets: "5 x 8-12 sec hold", weight: "Tuck → Advanced tuck → Single-leg", rest: "90 sec", notes: "Move to next level when you hold 15 sec cleanly", video: "front_lever" },
                    { name: "Back lever progression", sets: "4 x 8-12 sec hold", weight: "Same progression levels", rest: "90 sec", video: "back_lever" },
                    { name: "Ring support hold (RTO)", sets: "3 x 20 sec", weight: "Bodyweight", rest: "60 sec", video: "ring_support_rto" }
                ]
            },
            {
                title: "Block B: Upper Push Mastery",
                time: "15 min",
                exercises: [
                    { name: "Ring dips (weighted if easy)", sets: "4 x 8-10", weight: "Bodyweight +", rest: "90 sec", video: "ring_dips" },
                    { name: "Handstand push-up (wall-assisted)", sets: "4 x 5-8", weight: "Bodyweight", rest: "2 min", video: "wall_hspu" },
                    { name: "Archer push-ups", sets: "3 x 6/side", weight: "Bodyweight", rest: "60 sec", video: "archer_pushups" },
                    { name: "Pseudo-planche push-ups", sets: "3 x 8", weight: "Bodyweight", rest: "60 sec", notes: "Hands turned out, lean forward", video: "pseudo_planche_pushups" }
                ]
            },
            {
                title: "Block C: Unilateral Lower Body",
                time: "15 min",
                exercises: [
                    { name: "Pistol squat (weighted)", sets: "4 x 5/side", weight: "Hold 16kg at chest", rest: "90 sec", video: "pistol_squat" },
                    { name: "Shrimp squat progression", sets: "3 x 6/side", weight: "Bodyweight", rest: "90 sec", video: "shrimp_squat" },
                    { name: "Nordic hamstring curl", sets: "4 x 5", weight: "Bodyweight", rest: "90 sec", notes: "Eccentric focus, slow 5-sec lower", video: "nordic_curl" },
                    { name: "Single-leg calf raise (on step)", sets: "3 x 15/side", weight: "Bodyweight", rest: "45 sec", video: "single_leg_calf_raise" }
                ]
            },
            {
                title: "Block D: Movement Flow",
                time: "15 min",
                subtitle: "12 minutes continuous ground-based movement. No pause. Move like water.",
                flow: {
                    name: "Movement Flow",
                    weight: "Bodyweight",
                    rounds: "12 min continuous",
                    rest: "None — continuous movement",
                    steps: [
                        { movement: "Lizard crawl", reps: "flow" },
                        { movement: "Bear crawl (all directions)", reps: "flow" },
                        { movement: "Crab walk", reps: "flow" },
                        { movement: "Sit-through", reps: "flow" },
                        { movement: "Scorpion kick", reps: "flow" },
                        { movement: "Forward roll to squat to jump", reps: "flow" },
                        { movement: "Ape walk to deep squat", reps: "flow" },
                        { movement: "Frogger (deep squat hops)", reps: "flow" },
                        { movement: "Downward dog to cobra", reps: "flow" }
                    ]
                }
            }
        ]
    },
    wednesday: {
        name: "The Arena",
        theme: "Warrior Conditioning & Sport",
        quote: "In the arena, there is no time to rest, no machine to sit on. There is only you and the demand.",
        duration: "90 min",
        warmup: [
            { exercise: "Light jog or skip", duration: "3 min" },
            { exercise: "High knees", duration: "30 sec" },
            { exercise: "Butt kicks", duration: "30 sec" },
            { exercise: "Lateral shuffles", duration: "30 sec each" },
            { exercise: "Carioca (grapevine)", duration: "30 sec each" },
            { exercise: "Leg swings (front/back + side/side)", duration: "10 each" },
            { exercise: "Broad jumps", duration: "5 reps" }
        ],
        blocks: [
            {
                title: "Block A: Plyometric Power",
                time: "15 min",
                exercises: [
                    { name: "Box jumps (step down)", sets: "4 x 5", weight: "Highest safe height", rest: "90 sec", video: "box_jumps" },
                    { name: "Broad jump to vertical jump", sets: "4 x 3", weight: "Bodyweight", rest: "90 sec", video: "broad_jump" },
                    { name: "Clapping push-ups", sets: "3 x 8", weight: "Bodyweight", rest: "60 sec", video: "clapping_pushups" },
                    { name: "Lateral bounds", sets: "3 x 6/side", weight: "Bodyweight", rest: "60 sec", notes: "Stick the landing", video: "lateral_bounds" },
                    { name: "Depth drop to sprint", sets: "4 x 3", weight: "Bodyweight", rest: "2 min", notes: "Step off box, land, explode 10m", video: "depth_drop_sprint" }
                ]
            },
            {
                title: "Block B: Centurion's Gauntlet",
                time: "20 min",
                subtitle: "5 rounds. 2 min rest between rounds. Move continuously within each round.",
                exercises: [
                    { name: "Double KB clean and press", sets: "5 reps", weight: "2 x 20-24kg", rest: "—", video: "double_kb_clean_press" },
                    { name: "KB snatch (alternating)", sets: "10 total", weight: "24kg", rest: "—", video: "kb_snatch" },
                    { name: "Goblet squat", sets: "10 reps", weight: "24-28kg", rest: "—", video: "goblet_squat" },
                    { name: "Two-hand KB swing", sets: "15 reps", weight: "32kg", rest: "—", video: "kb_swing_two_hand" },
                    { name: "Burpee", sets: "10 reps", weight: "Bodyweight", rest: "2 min after round", video: "burpee" }
                ]
            },
            {
                title: "Block C: Sport — Tennis or Football",
                time: "30-40 min",
                subtitle: "The body must be tested in unpredictable, reactive environments.",
                exercises: [
                    { name: "Tennis match play / hitting", sets: "30-40 min", weight: "—", rest: "—", notes: "Lateral movement, rotational power, anaerobic bursts" },
                    { name: "OR: Football 5-a-side / technical work", sets: "30-40 min", weight: "—", rest: "—", notes: "Dribbling, shooting, small-sided games. Alternate weekly." }
                ]
            }
        ]
    },
    thursday: {
        name: "The Sculptor",
        theme: "Kettlebell Strength — Press & Squat",
        quote: "The press builds the crown of the shoulders. The squat builds the pillars of the legs.",
        duration: "75 min",
        warmup: [
            { exercise: "Jump rope (double unders if possible)", duration: "2 min" },
            { exercise: "KB arm bar (16kg)", duration: "5/side, 5 sec hold" },
            { exercise: "KB windmill (light, 16kg)", duration: "5/side" },
            { exercise: "Overhead squat (light KB)", duration: "8 reps" },
            { exercise: "Band pull-aparts", duration: "15 reps" },
            { exercise: "Hip circles (standing)", duration: "10 each direction" }
        ],
        blocks: [
            {
                title: "Block A: Pressing Strength",
                time: "20 min",
                exercises: [
                    { name: "Single-arm KB strict press", sets: "5 x 5/side", weight: "24-28kg (toward 32kg)", rest: "90 sec", video: "kb_strict_press" },
                    { name: "KB bottom-up press", sets: "3 x 5/side", weight: "20-24kg", rest: "90 sec", video: "kb_bottoms_up_press" },
                    { name: "Incline dumbbell press", sets: "3 x 10", weight: "30-35kg DBs", rest: "90 sec", notes: "2nd and final DB exercise. Targets clavicular pec head.", video: "incline_db_press" }
                ]
            },
            {
                title: "Block B: Squat Strength",
                time: "20 min",
                exercises: [
                    { name: "Double KB front squat", sets: "5 x 6", weight: "2 x 24kg → 2 x 32kg", rest: "2 min", video: "double_kb_front_squat" },
                    { name: "Cossack squat (weighted)", sets: "3 x 8/side", weight: "16-20kg goblet", rest: "90 sec", video: "cossack_squat" },
                    { name: "KB swing to squat", sets: "3 x 8", weight: "24kg", rest: "90 sec", notes: "Swing, park at top, squat", video: "kb_swing_to_squat" }
                ]
            },
            {
                title: "Block C: Turkish Get-Up Practice",
                time: "15 min",
                subtitle: "Each rep should take 45-60 seconds. Every position is a position of strength.",
                exercises: [
                    { name: "Turkish get-up (full)", sets: "5 x 1/side", weight: "24-28kg → 32kg", rest: "60-90 sec between sides", notes: "The single most complete exercise in existence.", video: "turkish_getup" }
                ]
            },
            {
                title: "Block D: The Gladiator's Sequence",
                time: "10 min",
                subtitle: "One bell. Don't set it down. 3 rounds per side.",
                flow: {
                    name: "The Gladiator's Sequence",
                    weight: "20-24kg",
                    rounds: "3 per side",
                    rest: "60 sec between rounds",
                    steps: [
                        { movement: "Dead clean", reps: "1" },
                        { movement: "Squat", reps: "1" },
                        { movement: "Press", reps: "1" },
                        { movement: "Windmill (lower slowly)", reps: "1" },
                        { movement: "Snatch (from bottom)", reps: "1" },
                        { movement: "Overhead lunge (forward)", reps: "3" },
                        { movement: "Lower to rack, thruster", reps: "3" },
                        { movement: "Swing", reps: "5" }
                    ]
                }
            }
        ]
    },
    friday: {
        name: "The Unconventional Warrior",
        theme: "Combat Conditioning & Ancient Tools",
        quote: "The legionary trained with stones, logs, ropes, and the weight of his own armour. Train as he did.",
        duration: "60 min",
        warmup: [
            { exercise: "Jump rope (varied: single leg, criss-cross)", duration: "3 min" },
            { exercise: "Bear crawl", duration: "20m forward + back" },
            { exercise: "Crab walk", duration: "20m" },
            { exercise: "Duck walk (deep squat walk)", duration: "20m" },
            { exercise: "Hip circles (quadruped)", duration: "10 each/side" },
            { exercise: "Thoracic windmill on ground", duration: "5/side" }
        ],
        blocks: [
            {
                title: "Block A: Steel Mace Work",
                time: "15 min",
                subtitle: "The mace (gada) — used by Persian, Indian, and Hindu warriors for thousands of years.",
                exercises: [
                    { name: "Mace 360", sets: "4 x 10 each direction", weight: "7-10kg", rest: "60 sec", video: "mace_360" },
                    { name: "Mace 10-to-2", sets: "3 x 10/side", weight: "7-10kg", rest: "60 sec", video: "mace_10_to_2" },
                    { name: "Mace squat (overhead)", sets: "3 x 8", weight: "7-10kg", rest: "60 sec", video: "mace_squat" },
                    { name: "Mace gravedigger", sets: "3 x 8/side", weight: "7-10kg", rest: "60 sec", video: "mace_gravedigger" },
                    { name: "Mace barbarian squat", sets: "3 x 6", weight: "7kg", rest: "60 sec", notes: "360 into squat at bottom", video: "mace_barbarian_squat" }
                ]
            },
            {
                title: "Block B: Sandbag and Sled",
                time: "15 min",
                exercises: [
                    { name: "Sandbag clean and press", sets: "4 x 6", weight: "30-40kg", rest: "90 sec", video: "sandbag_clean_press" },
                    { name: "Sandbag bear hug carry", sets: "3 x 40m", weight: "30-40kg", rest: "60 sec", video: "sandbag_bear_hug_carry" },
                    { name: "Sandbag shouldering", sets: "3 x 5/side", weight: "30-40kg", rest: "90 sec", video: "sandbag_shouldering" },
                    { name: "Sled push (heavy, low handles)", sets: "4 x 30m", weight: "80-120kg total", rest: "90 sec", video: "sled_push" },
                    { name: "Sled pull (rope drag)", sets: "3 x 20m", weight: "Moderate", rest: "60 sec", video: "sled_pull" }
                ]
            },
            {
                title: "Block C: Battle Rope & Rope Climb",
                time: "10 min",
                exercises: [
                    { name: "Battle rope alternating waves", sets: "3 x 30 sec", weight: "—", rest: "30 sec", video: "battle_rope_waves" },
                    { name: "Battle rope slams (overhead)", sets: "3 x 30 sec", weight: "—", rest: "30 sec", video: "battle_rope_slams" },
                    { name: "Battle rope lateral waves", sets: "3 x 30 sec", weight: "—", rest: "30 sec", video: "battle_rope_lateral" },
                    { name: "Rope climb (legless if possible)", sets: "4 x 1 ascent", weight: "Bodyweight", rest: "90 sec", notes: "No rope? Sub: towel pull-ups 4 x max", video: "rope_climb" }
                ]
            },
            {
                title: "Block D: The Gauntlet — For Time",
                time: "10 min",
                subtitle: "One round. Record your time. Beat it next week. Target: sub 8 min. Sub 7 is elite.",
                exercises: [
                    { name: "200m sprint", sets: "1", weight: "—", rest: "—" },
                    { name: "Burpees", sets: "20", weight: "—", rest: "—" },
                    { name: "KB swings (32kg)", sets: "30", weight: "32kg", rest: "—" },
                    { name: "Bear crawl", sets: "40m", weight: "—", rest: "—" },
                    { name: "Sandbag carry", sets: "40m", weight: "—", rest: "—" },
                    { name: "Pull-ups", sets: "15", weight: "—", rest: "—" },
                    { name: "KB snatch (alternating)", sets: "20 total", weight: "24kg", rest: "—" },
                    { name: "200m sprint", sets: "1", weight: "—", rest: "—" }
                ]
            }
        ]
    },
    saturday: {
        name: "Outdoor Warrior",
        theme: "Beach / Park Session",
        quote: "Train where the Romans trained — outside, under the sun, on uneven ground, with the sea at your back.",
        duration: "90 min",
        warmup: [
            { exercise: "Soft sand jog (barefoot)", duration: "10 min easy" }
        ],
        blocks: [
            {
                title: "Phase 1: Beach Run & Sprints",
                time: "20 min",
                subtitle: "Location (LA): Santa Monica or Venice Beach for soft sand, or the Santa Monica Stairs (4th & Adelaide) for a stair-sprint-only version if skipping the beach drive.",
                exercises: [
                    { name: "Sand sprint intervals (all-out)", sets: "6 x 50m", weight: "—", rest: "Walk back recovery" },
                    { name: "Stair sprints", sets: "4 x up", weight: "—", rest: "Walk down", notes: "Santa Monica Stairs, or hill sprints at Runyon Canyon/Griffith Park if closer" }
                ]
            },
            {
                title: "Phase 2: Outdoor Calisthenics",
                time: "25 min",
                subtitle: "Location (LA): Muscle Beach Venice — the original outdoor calisthenics gym, pull-up bars and rings on site.",
                exercises: [
                    { name: "Muscle-up", sets: "5 x 3-5", weight: "Bodyweight", rest: "2 min", video: "muscle_up" },
                    { name: "Dips (parallel bars)", sets: "4 x 12-15", weight: "Bodyweight", rest: "60 sec", video: "parallel_bar_dips" },
                    { name: "Hanging windshield wipers", sets: "3 x 8/side", weight: "Bodyweight", rest: "60 sec", video: "hanging_windshield_wipers" },
                    { name: "L-sit hold (parallel bars)", sets: "4 x 15-20 sec", weight: "Bodyweight", rest: "60 sec", video: "l_sit" },
                    { name: "Inverted row (feet elevated)", sets: "3 x 12", weight: "Bodyweight", rest: "60 sec", video: "inverted_row" },
                    { name: "Box jump (bench or ledge)", sets: "3 x 8", weight: "Bodyweight", rest: "60 sec" }
                ]
            },
            {
                title: "Phase 3: Kettlebell Beach Complex — EMOM 15 min",
                time: "20 min",
                subtitle: "Bring one KB (24kg). Every minute on the minute. Complete the sequence, rest the remainder.",
                exercises: [
                    { name: "KB clean", sets: "3/side per min", weight: "24kg", rest: "EMOM", video: "kb_clean" },
                    { name: "KB press", sets: "3/side per min", weight: "24kg", rest: "EMOM", video: "kb_strict_press" },
                    { name: "KB front squat", sets: "3/side per min", weight: "24kg", rest: "EMOM", video: "double_kb_front_squat" },
                    { name: "KB snatch", sets: "3/side per min", weight: "24kg", rest: "EMOM", video: "kb_snatch" }
                ]
            },
            {
                title: "Phase 4: Swim",
                time: "15-20 min",
                subtitle: "Santa Monica or Venice ocean swim, or a lap pool if one's more convenient that day.",
                exercises: [
                    { name: "Freestyle swim", sets: "400-800m", weight: "—", rest: "Moderate pace", notes: "Decompresses spine, builds lats and serratus. The Romans trained in water." }
                ]
            }
        ]
    },
    sunday: {
        name: "Rest — Sabbath of the Warrior",
        theme: "Active Recovery",
        quote: "Even Mars, the god of war, rested. But he rested actively, preparing for battles ahead.",
        duration: "30-45 min",
        warmup: [],
        blocks: [
            {
                title: "Choose Your Recovery",
                time: "30-45 min",
                subtitle: "Full rest from resistance training. The discipline of rest is part of the discipline.",
                exercises: [
                    { name: "Walk/hike (Runyon Canyon, Griffith Park, or Santa Monica/Venice boardwalk)", sets: "45-60 min", weight: "—", rest: "—" },
                    { name: "OR: Easy swim (ocean or pool)", sets: "20-30 min", weight: "—", rest: "—" },
                    { name: "OR: Mobility flow", sets: "30 min", weight: "—", rest: "—" },
                    { name: "OR: Cold ocean swim + hot shower (contrast)", sets: "3-10 min cold", weight: "—", rest: "—" }
                ]
            },
            {
                title: "Mobility Flow (If Chosen)",
                time: "30 min",
                exercises: [
                    { name: "Deep squat sit", sets: "2 min", weight: "—", rest: "—" },
                    { name: "90/90 hip switches", sets: "2 min", weight: "—", rest: "—" },
                    { name: "Pigeon stretch", sets: "90 sec/side", weight: "—", rest: "—" },
                    { name: "Couch stretch", sets: "90 sec/side", weight: "—", rest: "—" },
                    { name: "Thread the needle (thoracic)", sets: "60 sec/side", weight: "—", rest: "—" },
                    { name: "Bretzel", sets: "60 sec/side", weight: "—", rest: "—" },
                    { name: "Shoulder pass-throughs (band)", sets: "20 reps", weight: "—", rest: "—" },
                    { name: "Passive bar hang", sets: "2 min total", weight: "—", rest: "—" },
                    { name: "Cat-cow", sets: "20 reps", weight: "—", rest: "—" },
                    { name: "Pancake stretch", sets: "2 min", weight: "—", rest: "—" }
                ]
            }
        ]
    }
};

// Exercise video links — targeted YouTube search URLs from quality channels
// These will be replaced with Alessandro's own filmed demonstrations over time
const EXERCISE_VIDEOS = {
    // KETTLEBELL
    "kb_swing_two_hand": "https://www.youtube.com/results?search_query=kettlebell+two+hand+swing+proper+form+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Dan+John%22",
    "single_arm_kb_swing": "https://www.youtube.com/results?search_query=single+arm+kettlebell+swing+technique+StrongFirst+OR+%22Mark+Wildman%22",
    "kb_clean": "https://www.youtube.com/results?search_query=kettlebell+clean+single+arm+technique+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Kettlebell+Kings%22",
    "double_kb_clean_press": "https://www.youtube.com/results?search_query=double+kettlebell+clean+and+press+technique+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Dan+John%22",
    "kb_snatch": "https://www.youtube.com/results?search_query=kettlebell+snatch+proper+form+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Pavel%22",
    "kb_strict_press": "https://www.youtube.com/results?search_query=kettlebell+strict+press+single+arm+form+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Dan+John%22",
    "kb_bottoms_up_press": "https://www.youtube.com/results?search_query=kettlebell+bottom+up+press+technique+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Eric+Leija%22",
    "goblet_squat": "https://www.youtube.com/results?search_query=kettlebell+goblet+squat+proper+form+%22Dan+John%22+OR+StrongFirst+OR+%22Mark+Wildman%22",
    "double_kb_front_squat": "https://www.youtube.com/results?search_query=double+kettlebell+front+squat+technique+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Dan+John%22",
    "turkish_getup": "https://www.youtube.com/results?search_query=turkish+get+up+full+technique+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Kettlebell+Kings%22",
    "kb_windmill": "https://www.youtube.com/results?search_query=kettlebell+windmill+proper+form+StrongFirst+OR+%22Mark+Wildman%22+OR+%22Dan+John%22",
    "kb_gorilla_row": "https://www.youtube.com/results?search_query=kettlebell+gorilla+row+double+technique+%22Eric+Leija%22+OR+%22Mark+Wildman%22+OR+StrongFirst",
    "kb_swing_to_squat": "https://www.youtube.com/results?search_query=kettlebell+swing+to+squat+technique+%22Eric+Leija%22+OR+StrongFirst+OR+%22Mark+Wildman%22",
    "cossack_squat": "https://www.youtube.com/results?search_query=cossack+squat+weighted+kettlebell+technique+%22Eric+Leija%22+OR+%22Mark+Wildman%22+OR+StrongFirst",
    "farmer_carry": "https://www.youtube.com/results?search_query=farmer+carry+double+kettlebell+technique+%22Dan+John%22+OR+StrongFirst+OR+%22Mark+Wildman%22",
    // BODYWEIGHT
    "weighted_pullups": "https://www.youtube.com/results?search_query=weighted+pull+ups+technique+FitnessFAQs+OR+%22Jeff+Nippard%22+OR+%22Chris+Heria%22",
    "ring_face_pulls": "https://www.youtube.com/results?search_query=ring+face+pulls+technique+FitnessFAQs+OR+Calisthenicmovement",
    "front_lever": "https://www.youtube.com/results?search_query=front+lever+progression+tutorial+FitnessFAQs+OR+Calisthenicmovement+OR+%22Tom+Merrick%22",
    "back_lever": "https://www.youtube.com/results?search_query=back+lever+progression+tutorial+FitnessFAQs+OR+Calisthenicmovement+OR+%22Tom+Merrick%22",
    "ring_support_rto": "https://www.youtube.com/results?search_query=rings+turned+out+support+hold+RTO+FitnessFAQs+OR+Calisthenicmovement",
    "ring_dips": "https://www.youtube.com/results?search_query=ring+dips+proper+form+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "wall_hspu": "https://www.youtube.com/results?search_query=wall+handstand+push+up+technique+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "archer_pushups": "https://www.youtube.com/results?search_query=archer+push+ups+proper+form+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "pseudo_planche_pushups": "https://www.youtube.com/results?search_query=pseudo+planche+push+ups+technique+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "pistol_squat": "https://www.youtube.com/results?search_query=pistol+squat+tutorial+progression+FitnessFAQs+OR+Calisthenicmovement+OR+%22Tom+Merrick%22",
    "shrimp_squat": "https://www.youtube.com/results?search_query=shrimp+squat+tutorial+progression+FitnessFAQs+OR+Calisthenicmovement+OR+%22Tom+Merrick%22",
    "nordic_curl": "https://www.youtube.com/results?search_query=nordic+hamstring+curl+proper+form+%22Jeff+Nippard%22+OR+%22Squat+University%22+OR+FitnessFAQs",
    "single_leg_calf_raise": "https://www.youtube.com/results?search_query=single+leg+calf+raise+proper+form+%22Jeff+Nippard%22+OR+%22Athlean-X%22",
    "muscle_up": "https://www.youtube.com/results?search_query=muscle+up+tutorial+progression+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "parallel_bar_dips": "https://www.youtube.com/results?search_query=parallel+bar+dips+proper+form+FitnessFAQs+OR+%22Jeff+Nippard%22+OR+%22Chris+Heria%22",
    "hanging_windshield_wipers": "https://www.youtube.com/results?search_query=hanging+windshield+wipers+technique+FitnessFAQs+OR+Calisthenicmovement+OR+%22Chris+Heria%22",
    "l_sit": "https://www.youtube.com/results?search_query=L+sit+hold+parallettes+tutorial+FitnessFAQs+OR+Calisthenicmovement+OR+%22Tom+Merrick%22",
    "inverted_row": "https://www.youtube.com/results?search_query=inverted+row+proper+form+FitnessFAQs+OR+%22Jeff+Nippard%22+OR+%22Athlean-X%22",
    // MACE
    "mace_360": "https://www.youtube.com/results?search_query=steel+mace+360+swing+technique+Onnit+OR+%22Steel+Mace+Warrior%22+OR+%22Mr+Maceman%22",
    "mace_10_to_2": "https://www.youtube.com/results?search_query=steel+mace+10+to+2+technique+Onnit+OR+%22Steel+Mace+Warrior%22+OR+%22Mr+Maceman%22",
    "mace_squat": "https://www.youtube.com/results?search_query=steel+mace+overhead+squat+technique+Onnit+OR+%22Steel+Mace+Warrior%22+OR+%22Mr+Maceman%22",
    "mace_gravedigger": "https://www.youtube.com/results?search_query=steel+mace+gravedigger+technique+Onnit+OR+%22Steel+Mace+Warrior%22+OR+%22Mr+Maceman%22",
    "mace_barbarian_squat": "https://www.youtube.com/results?search_query=steel+mace+barbarian+squat+technique+Onnit+OR+%22Steel+Mace+Warrior%22+OR+%22Mr+Maceman%22",
    // OTHER
    "trap_bar_deadlift": "https://www.youtube.com/results?search_query=trap+bar+deadlift+proper+form+%22Jeff+Nippard%22+OR+%22Squat+University%22+OR+%22Athlean-X%22",
    "incline_db_press": "https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form+%22Jeff+Nippard%22+OR+%22Athlean-X%22",
    "box_jumps": "https://www.youtube.com/results?search_query=box+jump+proper+form+technique+%22Squat+University%22+OR+%22Athlean-X%22+OR+%22Jeff+Nippard%22",
    "broad_jump": "https://www.youtube.com/results?search_query=standing+broad+jump+technique+proper+form+%22Squat+University%22+OR+%22Athlean-X%22",
    "clapping_pushups": "https://www.youtube.com/results?search_query=clapping+push+ups+proper+form+%22Chris+Heria%22+OR+FitnessFAQs+OR+%22Athlean-X%22",
    "lateral_bounds": "https://www.youtube.com/results?search_query=lateral+bounds+plyometric+technique+proper+form",
    "depth_drop_sprint": "https://www.youtube.com/results?search_query=depth+drop+to+sprint+plyometric+technique",
    "battle_rope_waves": "https://www.youtube.com/results?search_query=battle+rope+alternating+waves+technique+Onnit+OR+%22Athlean-X%22",
    "battle_rope_slams": "https://www.youtube.com/results?search_query=battle+rope+slams+technique+proper+form+Onnit+OR+%22Athlean-X%22",
    "battle_rope_lateral": "https://www.youtube.com/results?search_query=battle+rope+lateral+waves+technique+Onnit",
    "sled_push": "https://www.youtube.com/results?search_query=sled+push+proper+form+technique+%22Athlean-X%22+OR+%22Jeff+Nippard%22",
    "sled_pull": "https://www.youtube.com/results?search_query=sled+pull+rope+drag+technique+proper+form+%22Athlean-X%22",
    "sandbag_clean_press": "https://www.youtube.com/results?search_query=sandbag+clean+and+press+technique+Onnit+OR+%22Eric+Leija%22",
    "sandbag_bear_hug_carry": "https://www.youtube.com/results?search_query=sandbag+bear+hug+carry+technique+Onnit+OR+%22Eric+Leija%22+OR+%22Dan+John%22",
    "sandbag_shouldering": "https://www.youtube.com/results?search_query=sandbag+shouldering+technique+Onnit+OR+%22Eric+Leija%22",
    "rope_climb": "https://www.youtube.com/results?search_query=rope+climb+technique+tutorial+%22Chris+Heria%22+OR+%22Athlean-X%22",
    "dead_hang": "https://www.youtube.com/results?search_query=dead+hang+proper+form+technique+benefits",
    "towel_hang": "https://www.youtube.com/results?search_query=towel+hang+grip+training+technique",
    "burpee": "https://www.youtube.com/results?search_query=burpee+proper+form+technique+%22Athlean-X%22"
};

// Get video URL — checks custom videos first, then falls back to search
function getVideoUrl(exerciseKey) {
    if (EXERCISE_VIDEOS[exerciseKey]) return EXERCISE_VIDEOS[exerciseKey];
    const searchTerm = exerciseKey.replace(/_/g, '+') + '+proper+form';
    return `https://www.youtube.com/results?search_query=${searchTerm}`;
}

// Benchmarks
const BENCHMARKS = [
    { name: "KB snatch test (24kg)", target: "100 reps in 5 min", current: "" },
    { name: "Max strict pull-ups", target: "20+", current: "" },
    { name: "Max muscle-ups", target: "5+ strict", current: "" },
    { name: "Turkish get-up max", target: "32kg+ each side", current: "" },
    { name: "Front lever hold", target: "10 sec full", current: "" },
    { name: "L-sit hold", target: "20 sec", current: "" },
    { name: "Weighted pull-up", target: "BW + 32kg x 5", current: "" },
    { name: "Handstand push-up", target: "8 freestanding", current: "" },
    { name: "Trap bar deadlift", target: "2x BW (160kg) x 5", current: "" },
    { name: "Double KB front squat", target: "2 x 32kg x 8", current: "" },
    { name: "The Gauntlet (Friday finisher)", target: "Sub 7:00", current: "" },
    { name: "2km run", target: "Sub 7:30", current: "" },
    { name: "Dead hang", target: "90 sec+", current: "" }
];
