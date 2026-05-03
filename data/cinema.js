// CINEMA — Film Data

const ITALIAN_FILMS = [
    { title: "La Dolce Vita", director: "Federico Fellini", year: 1960, desc: "A journalist navigates Rome's decadent high society. Fellini's masterpiece on beauty, emptiness, and the search for meaning.", letterboxd: "la-dolce-vita" },
    { title: "Cinema Paradiso", director: "Giuseppe Tornatore", year: 1988, desc: "A filmmaker returns to his Sicilian village and remembers the cinema that shaped his life. Pure love letter to film.", letterboxd: "cinema-paradiso" },
    { title: "The Bicycle Thieves", director: "Vittorio De Sica", year: 1948, desc: "A father and son search Rome for a stolen bicycle. Italian neorealism at its most heartbreaking and human.", letterboxd: "bicycle-thieves" },
    { title: "8½", director: "Federico Fellini", year: 1963, desc: "A director struggling with creative block retreats into fantasy. The definitive film about filmmaking itself.", letterboxd: "8-half" },
    { title: "The Great Beauty", director: "Paolo Sorrentino", year: 2013, desc: "A jaded journalist rediscovers Rome's beauty at 65. Modern Fellini — stunning, melancholic, gorgeous.", letterboxd: "the-great-beauty" },
    { title: "Life is Beautiful", director: "Roberto Benigni", year: 1997, desc: "A father uses humour and imagination to shield his son in a concentration camp. Comedy and tragedy woven perfectly.", letterboxd: "life-is-beautiful-1997" },
    { title: "The Conformist", director: "Bernardo Bertolucci", year: 1970, desc: "A man tries to conform to Fascist Italy by suppressing his true self. Visually one of the most beautiful films ever made.", letterboxd: "the-conformist" },
    { title: "Gomorra", director: "Matteo Garrone", year: 2008, desc: "Five intertwined stories of the Camorra crime syndicate in Naples. Raw, unflinching, essential modern Italian cinema.", letterboxd: "gomorrah" },
    { title: "Il Postino", director: "Michael Radford", year: 1994, desc: "A simple postman befriends exiled poet Pablo Neruda on a small Italian island. Poetry, love, and quiet revolution.", letterboxd: "il-postino" },
    { title: "Suspiria", director: "Dario Argento", year: 1977, desc: "A young dancer enters a sinister ballet academy. Italian horror (giallo) at its most visually insane and beautiful.", letterboxd: "suspiria" },
    { title: "A Fistful of Dollars", director: "Sergio Leone", year: 1964, desc: "The film that invented the Spaghetti Western. Leone and Morricone created an entirely new cinematic language.", letterboxd: "a-fistful-of-dollars" },
    { title: "The Leopard", director: "Luchino Visconti", year: 1963, desc: "A Sicilian prince navigates the fall of the aristocracy during Italian unification. Epic, elegant, deeply political.", letterboxd: "the-leopard" },
    { title: "Dogman", director: "Matteo Garrone", year: 2018, desc: "A gentle dog groomer is drawn into the orbit of a local thug. Character study of power, dignity, and desperation.", letterboxd: "dogman-2018" },
    { title: "Divorce Italian Style", director: "Pietro Germi", year: 1961, desc: "A Sicilian baron plots to murder his wife to marry his younger cousin. Dark comedy that skewers Italian machismo.", letterboxd: "divorce-italian-style" },
    { title: "Lazzaro Felice (Happy as Lazzaro)", director: "Alice Rohrwacher", year: 2018, desc: "A saintly young peasant exists outside of time in rural Italy. Magical realism that feels ancient and urgent.", letterboxd: "happy-as-lazzaro" },
    { title: "Amarcord", director: "Federico Fellini", year: 1973, desc: "Fellini's semi-autobiographical memories of growing up in a coastal town under Fascism. Warm, absurd, unforgettable.", letterboxd: "amarcord" },
    { title: "Once Upon a Time in the West", director: "Sergio Leone", year: 1968, desc: "Leone's operatic Western masterpiece. Every frame is a painting. Morricone's score is transcendent.", letterboxd: "once-upon-a-time-in-the-west" },
    { title: "Mamma Roma", director: "Pier Paolo Pasolini", year: 1962, desc: "A former prostitute tries to build a respectable life for her son in Rome's outskirts. Pasolini's raw, poetic vision.", letterboxd: "mamma-roma" },
    { title: "The Hand of God", director: "Paolo Sorrentino", year: 2021, desc: "Sorrentino's autobiographical coming-of-age in 1980s Naples. Maradona, family, loss, and the birth of an artist.", letterboxd: "the-hand-of-god-2021" },
    { title: "Investigation of a Citizen Above Suspicion", director: "Elio Petri", year: 1970, desc: "A police inspector murders his mistress and dares the system to catch him. Razor-sharp political satire.", letterboxd: "investigation-of-a-citizen-above-suspicion" },
    { title: "Mediterraneo", director: "Gabriele Salvatores", year: 1991, desc: "Italian soldiers stranded on a Greek island during WWII discover peace. Gentle, sun-drenched anti-war comedy.", letterboxd: "mediterraneo" },
    { title: "Il Divo", director: "Paolo Sorrentino", year: 2008, desc: "Portrait of Italy's most controversial prime minister Giulio Andreotti. Sorrentino at his most stylistically daring.", letterboxd: "il-divo" },
    { title: "Rome, Open City", director: "Roberto Rossellini", year: 1945, desc: "Shot in the rubble of WWII Rome. The film that launched Italian neorealism. Raw, urgent, historically essential.", letterboxd: "rome-open-city" },
    { title: "Nostalghia", director: "Andrei Tarkovsky", year: 1983, desc: "A Russian poet in Italy searches for meaning. Not Italian-directed but deeply about Italy, longing, and beauty.", letterboxd: "nostalgia-1983" },
    { title: "The Best of Youth", director: "Marco Tullio Giordana", year: 2003, desc: "Two brothers across 40 years of Italian history (1966-2003). 6 hours long. The greatest Italian miniseries ever made.", letterboxd: "the-best-of-youth" },
    { title: "Stromboli", director: "Roberto Rossellini", year: 1950, desc: "A displaced woman marries a fisherman and moves to a volcanic island. Bergman + Rossellini + raw nature.", letterboxd: "stromboli" }
];

const DIRECTOR_STUDIES = {
    "Federico Fellini": {
        bio: "Italy's most celebrated director. Master of spectacle, dream logic, and the circus of human life.",
        essential: ["La Dolce Vita", "8½", "Amarcord", "Nights of Cabiria", "La Strada"]
    },
    "Paolo Sorrentino": {
        bio: "Modern Italy's visual poet. Baroque excess meets deep melancholy. The heir to Fellini.",
        essential: ["The Great Beauty", "The Hand of God", "Il Divo", "Youth", "The Consequences of Love"]
    },
    "Sergio Leone": {
        bio: "Invented the Spaghetti Western. Master of tension, silence, and the wide shot. Changed cinema forever.",
        essential: ["The Good, the Bad and the Ugly", "Once Upon a Time in the West", "Once Upon a Time in America", "A Fistful of Dollars", "For a Few Dollars More"]
    },
    "Vittorio De Sica": {
        bio: "Father of Italian neorealism. Found poetry in poverty and dignity in desperation.",
        essential: ["Bicycle Thieves", "Umberto D.", "Shoeshine", "Two Women", "Yesterday, Today and Tomorrow"]
    },
    "Pier Paolo Pasolini": {
        bio: "Poet, novelist, filmmaker, provocateur. The most dangerous artist in Italian history.",
        essential: ["The Gospel According to St. Matthew", "Mamma Roma", "Accattone", "Teorema", "Salò"]
    },
    "Bernardo Bertolucci": {
        bio: "Elegance and political fire. Made intimate epics that spanned decades and continents.",
        essential: ["The Conformist", "Last Tango in Paris", "The Last Emperor", "1900", "The Dreamers"]
    },
    "Matteo Garrone": {
        bio: "Modern Italian cinema's most unflinching eye. Finds beauty in the brutal, poetry in the profane.",
        essential: ["Gomorra", "Dogman", "Tale of Tales", "Reality", "Pinocchio"]
    },
    "Luchino Visconti": {
        bio: "Aristocrat who became a Marxist filmmaker. Opulent, political, deeply human.",
        essential: ["The Leopard", "Rocco and His Brothers", "Death in Venice", "Ossessione", "Senso"]
    }
};

// World Cinema — curated from global critics, festivals, and traditions beyond Hollywood
const WORLD_CINEMA = [
    { title: "Parasite", director: "Bong Joon-ho", year: 2019, country: "South Korea", why: "Palme d'Or + Best Picture. Genre-bending class warfare.", letterboxd: "parasite-2019" },
    { title: "In the Mood for Love", director: "Wong Kar-wai", year: 2000, country: "Hong Kong", why: "Restraint as performance. Every frame is a painting.", letterboxd: "in-the-mood-for-love" },
    { title: "Spirited Away", director: "Hayao Miyazaki", year: 2001, country: "Japan", why: "Animation as high art. Imagination without limits.", letterboxd: "spirited-away" },
    { title: "Amour", director: "Michael Haneke", year: 2012, country: "Austria/France", why: "Devastating intimacy. Two actors carrying an entire film in one apartment.", letterboxd: "amour" },
    { title: "City of God", director: "Fernando Meirelles", year: 2002, country: "Brazil", why: "Kinetic energy and non-professional actors creating raw authenticity.", letterboxd: "city-of-god" },
    { title: "The Lives of Others", director: "Florian Henckel von Donnersmarck", year: 2006, country: "Germany", why: "Surveillance state Berlin. A Stasi officer discovers humanity through art.", letterboxd: "the-lives-of-others" },
    { title: "Oldboy", director: "Park Chan-wook", year: 2003, country: "South Korea", why: "Revenge as opera. The corridor fight scene changed action cinema.", letterboxd: "oldboy" },
    { title: "Pan's Labyrinth", director: "Guillermo del Toro", year: 2006, country: "Spain/Mexico", why: "Dark fairy tale during Spanish Civil War. Fantasy as political resistance.", letterboxd: "pans-labyrinth" },
    { title: "Shoplifters", director: "Hirokazu Kore-eda", year: 2018, country: "Japan", why: "What makes a family? Quiet, devastating Japanese humanism.", letterboxd: "shoplifters" },
    { title: "A Separation", director: "Asghar Farhadi", year: 2011, country: "Iran", why: "Moral complexity where every character is right and wrong simultaneously.", letterboxd: "a-separation" },
    { title: "Ida", director: "Paweł Pawlikowski", year: 2013, country: "Poland", why: "Shot in 4:3 black and white. Stunning composition. Every frame is deliberate.", letterboxd: "ida-2013" },
    { title: "Yi Yi", director: "Edward Yang", year: 2000, country: "Taiwan", why: "A Taipei family across three generations. 3 hours of pure life.", letterboxd: "yi-yi" },
    { title: "Leviathan", director: "Andrey Zvyagintsev", year: 2014, country: "Russia", why: "Modern Russian tragedy. Power, corruption, and biblical resonance.", letterboxd: "leviathan-2014" },
    { title: "Timbuktu", director: "Abderrahmane Sissako", year: 2014, country: "Mauritania", why: "Life under jihadist occupation. African cinema at its most poetic and political.", letterboxd: "timbuktu-2014" },
    { title: "The Handmaiden", director: "Park Chan-wook", year: 2016, country: "South Korea", why: "Erotic thriller with the most satisfying plot twists in modern cinema.", letterboxd: "the-handmaiden" },
    { title: "Stalker", director: "Andrei Tarkovsky", year: 1979, country: "Russia", why: "Philosophical science fiction. The most visually arresting film ever made.", letterboxd: "stalker" },
    { title: "Portrait of a Lady on Fire", director: "Céline Sciamma", year: 2019, country: "France", why: "The gaze as love. How looking at someone becomes an act of creation.", letterboxd: "portrait-of-a-lady-on-fire" },
    { title: "Tsotsi", director: "Gavin Hood", year: 2005, country: "South Africa", why: "A young gangster finds redemption through an abandoned baby. Raw Johannesburg.", letterboxd: "tsotsi" },
    { title: "Rashomon", director: "Akira Kurosawa", year: 1950, country: "Japan", why: "Invented the unreliable narrator structure. Every film student starts here.", letterboxd: "rashomon" },
    { title: "The White Ribbon", director: "Michael Haneke", year: 2009, country: "Austria/Germany", why: "Pre-WWI German village. Evil as mundane. Austere, chilling, perfect.", letterboxd: "the-white-ribbon" }
];

// Streaming platforms — user can add their accounts
const STREAMING_PLATFORMS = [
    { name: "Netflix", url: "https://www.netflix.com/search?q=", icon: "N", color: "#E50914" },
    { name: "Stan", url: "https://www.stan.com.au/search?q=", icon: "S", color: "#0072E5" },
    { name: "Disney+", url: "https://www.disneyplus.com/search/", icon: "D+", color: "#113CCF" },
    { name: "Amazon Prime", url: "https://www.primevideo.com/search?phrase=", icon: "P", color: "#00A8E1" },
    { name: "Apple TV+", url: "https://tv.apple.com/search?term=", icon: "A", color: "#555" },
    { name: "MUBI", url: "https://mubi.com/search?query=", icon: "M", color: "#000" },
    { name: "SBS On Demand", url: "https://www.sbs.com.au/ondemand/search?q=", icon: "SBS", color: "#EB1C24" },
    { name: "Kanopy", url: "https://www.kanopy.com/search?query=", icon: "K", color: "#5C2D91" },
    { name: "Letterboxd", url: "https://letterboxd.com/film/", icon: "L", color: "#00E054" }
];

// Must-watch films for any actor
const MUST_WATCH = [
    { title: "Taxi Driver", director: "Martin Scorsese", year: 1976, why: "Character study masterclass. De Niro's preparation is legendary.", letterboxd: "taxi-driver" },
    { title: "There Will Be Blood", director: "Paul Thomas Anderson", year: 2007, why: "Daniel Day-Lewis delivering perhaps the greatest screen performance ever.", letterboxd: "there-will-be-blood" },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, why: "Italian-American identity on screen. Brando and Pacino redefining acting.", letterboxd: "the-godfather" },
    { title: "Moonlight", director: "Barry Jenkins", year: 2016, why: "Three actors playing one character across a lifetime. Study in restraint and vulnerability.", letterboxd: "moonlight-2016" },
    { title: "Raging Bull", director: "Martin Scorsese", year: 1980, why: "Physical transformation as character. De Niro gained 27kg for this role.", letterboxd: "raging-bull" },
    { title: "Do the Right Thing", director: "Spike Lee", year: 1989, why: "How to be political without being preachy. Every character has a point.", letterboxd: "do-the-right-thing" },
    { title: "Creed", director: "Ryan Coogler", year: 2015, why: "Michael B. Jordan reference point. How to carry a franchise with charisma and depth.", letterboxd: "creed" },
    { title: "In the Mood for Love", director: "Wong Kar-wai", year: 2000, why: "What's NOT said is more powerful than what is. Restraint as performance.", letterboxd: "in-the-mood-for-love" },
    { title: "Parasite", director: "Bong Joon-ho", year: 2019, why: "Genre-bending storytelling. How tone shifts keep an audience off-balance.", letterboxd: "parasite-2019" },
    { title: "Y Tu Mamá También", director: "Alfonso Cuarón", year: 2001, why: "Natural, improvisational-feeling performances within a structured narrative.", letterboxd: "y-tu-mama-tambien" }
];
