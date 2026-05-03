// THE WARRIOR'S TABLE — Nutrition Data
// Each week focuses on a different Italian region

const MACRO_TARGETS = {
    training: { calories: 2300, protein: 190, carbs: 230, fats: 70 },
    sport: { calories: 2400, protein: 180, carbs: 250, fats: 70 },
    rest: { calories: 2000, protein: 180, carbs: 170, fats: 65 }
};

const ITALIAN_REGIONS = {
    lazio: {
        name: "Lazio (Rome)",
        description: "The heart of the empire. Simple, bold flavours — cacio e pepe, carbonara, saltimbocca.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 banana", "Espresso (black)"],
                macros: { protein: 1, carbs: 27, fats: 0, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "3-egg frittata with spinach, cherry tomatoes, fresh basil",
                    "2 slices pane di casa with thin ricotta",
                    "1 cup mixed berries"
                ],
                macros: { protein: 40, carbs: 50, fats: 18, calories: 530 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Grilled chicken breast (180g) with lemon and oregano",
                    "Farro salad with roasted capsicum, cucumber, red onion, capers",
                    "Lemon-olive oil dressing"
                ],
                macros: { protein: 48, carbs: 45, fats: 16, calories: 520 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Greek yoghurt (200g) with walnuts (15g) and honey drizzle"
                ],
                macros: { protein: 20, carbs: 18, fats: 14, calories: 280 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Cacio e pepe — wholemeal spaghetti (80g dry) with pecorino romano and black pepper",
                    "Grilled chicken thigh (150g) on the side",
                    "Puntarelle salad with anchovy dressing"
                ],
                macros: { protein: 52, carbs: 70, fats: 20, calories: 680 }
            }
        },
        shopping: {
            protein: [
                { item: "Chicken breast", qty: "1 kg" },
                { item: "Chicken thighs (skinless)", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Pecorino Romano", qty: "100g" },
                { item: "Fresh ricotta", qty: "250g" },
                { item: "Greek yoghurt", qty: "1 kg" }
            ],
            produce: [
                { item: "Spinach (baby)", qty: "200g" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Fresh basil", qty: "1 bunch" },
                { item: "Lemons", qty: "4" },
                { item: "Red capsicum", qty: "2" },
                { item: "Cucumber", qty: "2" },
                { item: "Red onion", qty: "2" },
                { item: "Mixed berries", qty: "500g" },
                { item: "Bananas", qty: "7" },
                { item: "Puntarelle or rocket", qty: "1 bunch" }
            ],
            pantry: [
                { item: "Wholemeal spaghetti", qty: "500g" },
                { item: "Farro", qty: "500g" },
                { item: "Pane di casa (bakery)", qty: "1 loaf" },
                { item: "Capers", qty: "1 jar" },
                { item: "Walnuts", qty: "200g" },
                { item: "Honey", qty: "1 jar" },
                { item: "Extra virgin olive oil", qty: "500ml" },
                { item: "Black pepper (whole)", qty: "grinder" },
                { item: "Anchovy fillets", qty: "1 tin" }
            ]
        }
    },
    campania: {
        name: "Campania (Naples)",
        description: "The birthplace of pizza and pasta. Seafood, tomatoes, mozzarella, basil — the sun on a plate.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Small handful (30g) rolled oats with water", "Espresso"],
                macros: { protein: 3, carbs: 20, fats: 2, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Shakshuka-style eggs: 3 eggs poached in San Marzano tomato sauce",
                    "Fresh basil, chilli flakes",
                    "1 thick slice ciabatta"
                ],
                macros: { protein: 35, carbs: 40, fats: 18, calories: 470 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Insalata di mare: prawns (150g) and calamari (100g)",
                    "Cannellini beans, rocket, cherry tomatoes",
                    "Lemon and olive oil dressing",
                    "1 slice ciabatta"
                ],
                macros: { protein: 48, carbs: 40, fats: 14, calories: 490 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Caprese: fresh mozzarella (60g), tomato, basil, olive oil drizzle",
                    "5 almonds"
                ],
                macros: { protein: 18, carbs: 8, fats: 16, calories: 250 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Grilled branzino (200g) or barramundi with lemon and capers",
                    "Sautéed friarielli (broccoli rabe) with garlic and chilli",
                    "Roasted sweet potato (120g)"
                ],
                macros: { protein: 50, carbs: 55, fats: 16, calories: 570 }
            }
        },
        shopping: {
            protein: [
                { item: "Prawns (raw, shell-on)", qty: "500g" },
                { item: "Calamari", qty: "300g" },
                { item: "Barramundi fillets", qty: "600g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Fresh mozzarella (fior di latte)", qty: "250g" },
                { item: "Cannellini beans (canned)", qty: "2 cans" }
            ],
            produce: [
                { item: "San Marzano tomatoes (canned)", qty: "2 cans" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Fresh basil", qty: "2 bunches" },
                { item: "Rocket", qty: "200g" },
                { item: "Broccolini or broccoli rabe", qty: "2 bunches" },
                { item: "Sweet potato", qty: "3" },
                { item: "Lemons", qty: "5" },
                { item: "Fresh chilli", qty: "3" },
                { item: "Garlic", qty: "1 bulb" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Ciabatta (bakery)", qty: "1 loaf" },
                { item: "Rolled oats", qty: "500g" },
                { item: "Capers", qty: "1 jar" },
                { item: "Almonds", qty: "200g" },
                { item: "Extra virgin olive oil", qty: "500ml" },
                { item: "Chilli flakes", qty: "1 jar" }
            ]
        }
    },
    sicilia: {
        name: "Sicilia (Sicily)",
        description: "The crossroads of the Mediterranean. Arab, Greek, and Norman influences. Bold, bright, aromatic.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 banana", "Espresso"],
                macros: { protein: 1, carbs: 27, fats: 0, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Protein oats: 60g oats, 1 scoop whey, almond milk",
                    "Topped with pistachios (15g), honey, orange zest",
                    "2 boiled eggs"
                ],
                macros: { protein: 45, carbs: 55, fats: 16, calories: 555 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Tuna (160g, in olive oil) with caponata (eggplant, capsicum, olives, capers, tomato)",
                    "Couscous (80g dry) — Sicilian tradition from Arab influence",
                    "Fresh mint garnish"
                ],
                macros: { protein: 42, carbs: 50, fats: 18, calories: 535 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "1 scoop whey protein shake with water",
                    "1 blood orange",
                    "10 pistachios"
                ],
                macros: { protein: 28, carbs: 20, fats: 8, calories: 270 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Grilled swordfish steak (200g) with salmoriglio (olive oil, lemon, oregano)",
                    "Roasted fennel with orange slices",
                    "Small portion pasta alla Norma (80g penne, eggplant, tomato, ricotta salata)"
                ],
                macros: { protein: 52, carbs: 65, fats: 18, calories: 640 }
            }
        },
        shopping: {
            protein: [
                { item: "Swordfish steak", qty: "600g" },
                { item: "Canned tuna (in olive oil)", qty: "3 cans" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Whey protein", qty: "check stock" },
                { item: "Ricotta salata", qty: "100g" }
            ],
            produce: [
                { item: "Eggplant", qty: "3" },
                { item: "Red capsicum", qty: "2" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Fennel bulb", qty: "2" },
                { item: "Blood oranges (or navel)", qty: "4" },
                { item: "Lemons", qty: "4" },
                { item: "Fresh mint", qty: "1 bunch" },
                { item: "Fresh oregano", qty: "1 bunch" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Penne rigate", qty: "500g" },
                { item: "Couscous", qty: "500g" },
                { item: "Rolled oats", qty: "500g" },
                { item: "Pistachios (shelled)", qty: "200g" },
                { item: "Olives (green, Sicilian)", qty: "1 jar" },
                { item: "Capers", qty: "1 jar" },
                { item: "Almond milk", qty: "1L" },
                { item: "Honey", qty: "1 jar" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    toscana: {
        name: "Toscana (Tuscany)",
        description: "Rustic simplicity. Beans, bread, olive oil, grilled meats. The original farm-to-table.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Rice cake with thin honey", "Espresso"],
                macros: { protein: 1, carbs: 22, fats: 1, calories: 100 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Fettunta (Tuscan garlic bread): sourdough rubbed with garlic, topped with olive oil",
                    "3 scrambled eggs with fresh herbs",
                    "Sliced tomato with salt and pepper"
                ],
                macros: { protein: 32, carbs: 35, fats: 22, calories: 470 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Ribollita (Tuscan bread and vegetable soup)",
                    "Cannellini beans, cavolo nero, carrot, celery, tomato",
                    "Topped with olive oil and parmesan shavings",
                    "1 slice Tuscan bread"
                ],
                macros: { protein: 28, carbs: 55, fats: 16, calories: 480 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Cottage cheese (200g) with walnuts (15g)",
                    "1 pear"
                ],
                macros: { protein: 28, carbs: 22, fats: 10, calories: 295 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Bistecca: grilled scotch fillet (200g) with rosemary and sea salt",
                    "Fagioli all'uccelletto (white beans braised in tomato and sage)",
                    "Steamed cavolo nero with lemon"
                ],
                macros: { protein: 55, carbs: 40, fats: 22, calories: 585 }
            }
        },
        shopping: {
            protein: [
                { item: "Scotch fillet steak", qty: "600g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Cottage cheese", qty: "500g" },
                { item: "Parmesan", qty: "100g" },
                { item: "Cannellini beans (dried or canned)", qty: "500g / 3 cans" }
            ],
            produce: [
                { item: "Cavolo nero (Tuscan kale)", qty: "2 bunches" },
                { item: "Carrots", qty: "4" },
                { item: "Celery", qty: "1 bunch" },
                { item: "Tomatoes (vine-ripened)", qty: "6" },
                { item: "Garlic", qty: "1 bulb" },
                { item: "Fresh rosemary", qty: "1 bunch" },
                { item: "Fresh sage", qty: "1 bunch" },
                { item: "Pears", qty: "4" },
                { item: "Lemons", qty: "3" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Sourdough bread (bakery)", qty: "1 loaf" },
                { item: "Rice cakes", qty: "1 pack" },
                { item: "Walnuts", qty: "200g" },
                { item: "Honey", qty: "check stock" },
                { item: "Extra virgin olive oil (Tuscan if possible)", qty: "500ml" },
                { item: "Sea salt flakes", qty: "check stock" }
            ]
        }
    },
    modena: {
        name: "Modena (Emilia-Romagna)",
        description: "The belly of Italy. Home of balsamic vinegar, Parmigiano-Reggiano, tortellini, and lambrusco. Rich, indulgent, yet balanced.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 banana", "Espresso"],
                macros: { protein: 1, carbs: 27, fats: 0, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Erbazzone (Emilian savoury pie): eggs, spinach, parmigiano — homemade or simplified as an omelette",
                    "3 eggs, 100g spinach, 20g parmigiano reggiano",
                    "1 slice crusty bread with balsamic drizzle"
                ],
                macros: { protein: 38, carbs: 35, fats: 22, calories: 495 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Tortellini in brodo: fresh tortellini (100g) in homemade chicken broth",
                    "Side of grilled chicken breast (150g) with mostarda (fruit mustard)",
                    "Green salad with balsamic vinegar of Modena"
                ],
                macros: { protein: 52, carbs: 55, fats: 14, calories: 560 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Parmigiano-Reggiano chunk (30g) with pear slices",
                    "5 walnuts"
                ],
                macros: { protein: 14, carbs: 18, fats: 14, calories: 260 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Cotoletta alla modenese: crumbed veal cutlet (180g) — pan-fried in olive oil, not deep-fried",
                    "Roasted zucchini and capsicum with balsamic glaze",
                    "Small portion of boiled new potatoes (120g) with rosemary"
                ],
                macros: { protein: 48, carbs: 50, fats: 20, calories: 580 }
            }
        },
        shopping: {
            protein: [
                { item: "Veal cutlets (thin)", qty: "500g" },
                { item: "Chicken breast", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Parmigiano-Reggiano (genuine DOP)", qty: "200g" },
                { item: "Fresh tortellini", qty: "400g" }
            ],
            produce: [
                { item: "Baby spinach", qty: "200g" },
                { item: "Zucchini", qty: "3" },
                { item: "Red capsicum", qty: "2" },
                { item: "Pears", qty: "4" },
                { item: "Mixed salad greens", qty: "200g" },
                { item: "New potatoes", qty: "500g" },
                { item: "Fresh rosemary", qty: "1 bunch" },
                { item: "Lemons", qty: "3" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Balsamic vinegar of Modena (DOP if possible)", qty: "250ml" },
                { item: "Chicken stock (quality)", qty: "1L" },
                { item: "Breadcrumbs (panko or Italian)", qty: "200g" },
                { item: "Walnuts", qty: "150g" },
                { item: "Crusty bread (bakery)", qty: "1 loaf" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    napoli_ponto: {
        name: "Napoli — Ponto Landolfo",
        description: "The soul of Campania's interior. Mountain village cooking — hearty, rustic, connected to the land. Wild herbs, slow-cooked meats, handmade pasta.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Small handful dried figs (3-4)", "Espresso"],
                macros: { protein: 1, carbs: 25, fats: 1, calories: 110 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Uova in purgatorio: 3 eggs poached in spicy tomato sauce with peperoncino",
                    "Grilled ciabatta with garlic rub",
                    "Fresh figs or seasonal fruit"
                ],
                macros: { protein: 32, carbs: 42, fats: 18, calories: 465 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Cavatelli with sausage and broccoli rabe",
                    "Cavatelli pasta (80g dry), Italian pork sausage (100g, crumbled), broccolini, garlic, chilli, olive oil",
                    "Side salad with oregano vinaigrette"
                ],
                macros: { protein: 38, carbs: 60, fats: 18, calories: 560 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Greek yoghurt (200g) with crushed hazelnuts and honey drizzle"
                ],
                macros: { protein: 20, carbs: 20, fats: 12, calories: 272 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Slow-braised lamb shoulder (180g) with mountain herbs (rosemary, thyme, bay leaf)",
                    "Lentil stew (100g dried lentils) with carrot, celery, tomato",
                    "Steamed greens (silverbeet) with lemon and olive oil"
                ],
                macros: { protein: 55, carbs: 48, fats: 18, calories: 580 }
            }
        },
        shopping: {
            protein: [
                { item: "Lamb shoulder (bone-in)", qty: "800g" },
                { item: "Italian pork sausage (fennel)", qty: "400g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Greek yoghurt", qty: "500g" }
            ],
            produce: [
                { item: "Broccolini or broccoli rabe", qty: "2 bunches" },
                { item: "Silverbeet or Swiss chard", qty: "1 bunch" },
                { item: "Carrots", qty: "4" },
                { item: "Celery", qty: "1 bunch" },
                { item: "Fresh figs (seasonal) or stone fruit", qty: "6" },
                { item: "Garlic", qty: "2 bulbs" },
                { item: "Fresh rosemary and thyme", qty: "1 bunch each" },
                { item: "Fresh chilli", qty: "3" },
                { item: "Lemons", qty: "4" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Cavatelli pasta (dried)", qty: "500g" },
                { item: "Brown lentils (dried)", qty: "500g" },
                { item: "Ciabatta (bakery)", qty: "1 loaf" },
                { item: "Bay leaves", qty: "1 pack" },
                { item: "Dried figs", qty: "200g" },
                { item: "Hazelnuts", qty: "150g" },
                { item: "Honey", qty: "check stock" },
                { item: "Dried oregano", qty: "check stock" },
                { item: "Extra virgin olive oil", qty: "500ml" },
                { item: "Peperoncino (chilli flakes)", qty: "check stock" }
            ]
        }
    },
    messina: {
        name: "Messina (Sicily)",
        description: "Where Sicily meets the sea. The strait's bounty — swordfish, sardines, citrus, capers, wild fennel. Greek and Arab echoes in every dish.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 blood orange", "Espresso"],
                macros: { protein: 1, carbs: 22, fats: 0, calories: 95 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Frittata di sarde: 3 eggs with tinned sardines (50g), wild fennel (or dill), pine nuts",
                    "Toasted sourdough with olive oil",
                    "Orange segments"
                ],
                macros: { protein: 40, carbs: 38, fats: 22, calories: 515 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Pasta con le sarde alla messinese: penne (80g dry) with sardines, wild fennel, pine nuts, raisins, saffron",
                    "Large rocket and orange salad with red onion"
                ],
                macros: { protein: 35, carbs: 65, fats: 16, calories: 550 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "1 scoop whey protein with water",
                    "Handful of pistachios (20g)"
                ],
                macros: { protein: 30, carbs: 8, fats: 10, calories: 245 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Pesce spada alla ghiotta (Messina-style swordfish): swordfish steak (200g) braised with tomato, capers, olives, celery, onion",
                    "Steamed green beans with lemon and mint",
                    "Small roasted potato (100g)"
                ],
                macros: { protein: 52, carbs: 45, fats: 16, calories: 540 }
            }
        },
        shopping: {
            protein: [
                { item: "Swordfish steak", qty: "600g" },
                { item: "Tinned sardines (in olive oil)", qty: "3 cans" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Whey protein", qty: "check stock" }
            ],
            produce: [
                { item: "Blood oranges (or navel)", qty: "6" },
                { item: "Rocket", qty: "200g" },
                { item: "Green beans", qty: "400g" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Celery", qty: "1 bunch" },
                { item: "Red onion", qty: "3" },
                { item: "Fresh dill or fennel fronds", qty: "1 bunch" },
                { item: "Fresh mint", qty: "1 bunch" },
                { item: "Lemons", qty: "5" },
                { item: "Potatoes", qty: "4 small" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Penne rigate", qty: "500g" },
                { item: "Sourdough bread (bakery)", qty: "1 loaf" },
                { item: "Capers (in salt or brine)", qty: "1 jar" },
                { item: "Green olives (Sicilian)", qty: "1 jar" },
                { item: "Pine nuts", qty: "100g" },
                { item: "Raisins (sultanas)", qty: "100g" },
                { item: "Saffron threads", qty: "1 packet" },
                { item: "Pistachios (shelled)", qty: "150g" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    reggio_calabria: {
        name: "Reggio Calabria",
        description: "The toe of the boot. Fiery, bold, ancient Greek roots. Peperoncino in everything, 'nduja, bergamot, swordfish, and the freshest vegetables from volcanic soil.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 banana", "Espresso with a drop of bergamot (if available)"],
                macros: { protein: 1, carbs: 27, fats: 0, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Eggs alla calabrese: 3 eggs scrambled with roasted capsicum, 'nduja (15g), fresh parsley",
                    "2 slices crusty Calabrian bread",
                    "Sliced tomato with salt and oregano"
                ],
                macros: { protein: 35, carbs: 40, fats: 22, calories: 505 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Fileja pasta (80g dry) with 'nduja, cherry tomatoes, and fresh ricotta",
                    "Grilled chicken breast (150g) on the side",
                    "Insalata calabrese: red onion, tomato, cucumber, oregano, olive oil"
                ],
                macros: { protein: 50, carbs: 58, fats: 16, calories: 585 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Fresh ricotta (80g) with honey and crushed almonds (15g)",
                    "1 apple"
                ],
                macros: { protein: 14, carbs: 28, fats: 10, calories: 260 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Pesce spada alla reggina: grilled swordfish (200g) with lemon, capers, and oregano",
                    "Ciambotta (Calabrian ratatouille): eggplant, capsicum, zucchini, potato, tomato stewed in olive oil",
                    "Steamed broccolini with chilli and garlic"
                ],
                macros: { protein: 50, carbs: 42, fats: 18, calories: 535 }
            }
        },
        shopping: {
            protein: [
                { item: "Swordfish steak", qty: "600g" },
                { item: "Chicken breast", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Fresh ricotta", qty: "250g" },
                { item: "'Nduja (Calabrian spicy spreadable salami)", qty: "100g" }
            ],
            produce: [
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Vine tomatoes", qty: "4" },
                { item: "Eggplant", qty: "2" },
                { item: "Red capsicum", qty: "2" },
                { item: "Zucchini", qty: "2" },
                { item: "Broccolini", qty: "2 bunches" },
                { item: "Cucumber", qty: "2" },
                { item: "Red onion", qty: "3" },
                { item: "Fresh parsley", qty: "1 bunch" },
                { item: "Garlic", qty: "1 bulb" },
                { item: "Fresh chilli", qty: "4" },
                { item: "Apples", qty: "4" },
                { item: "Lemons", qty: "4" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Fileja or fusilli pasta", qty: "500g" },
                { item: "Crusty bread (bakery)", qty: "1 loaf" },
                { item: "Capers", qty: "1 jar" },
                { item: "Almonds", qty: "150g" },
                { item: "Honey", qty: "check stock" },
                { item: "Dried oregano", qty: "check stock" },
                { item: "Peperoncino (Calabrian chilli flakes)", qty: "check stock" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    puglia: {
        name: "Puglia (Apulia)",
        description: "The heel. Italy's garden — burrata, orecchiette, olive groves for days, octopus, fava beans, and bread that's a meal in itself.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["2 taralli (Pugliese crackers) with a thin smear of almond butter", "Espresso"],
                macros: { protein: 3, carbs: 22, fats: 6, calories: 155 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Frise (Pugliese bruschetta): dried bread rounds soaked in water, topped with chopped tomato, olive oil, oregano, salt",
                    "3 boiled eggs on the side",
                    "Fresh peach or nectarine"
                ],
                macros: { protein: 30, carbs: 40, fats: 18, calories: 445 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Orecchiette con cime di rapa: orecchiette (80g dry) with broccoli rabe, garlic, chilli, anchovy, olive oil",
                    "Grilled calamari (150g) with lemon",
                    "Side of burrata (50g) with cherry tomatoes"
                ],
                macros: { protein: 48, carbs: 58, fats: 18, calories: 590 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Fava bean puree (60g dried fava) with a drizzle of olive oil",
                    "Carrot and celery sticks for dipping"
                ],
                macros: { protein: 12, carbs: 22, fats: 8, calories: 210 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Polpo alla pignata (Pugliese braised octopus): octopus (200g) slow-braised in tomato, onion, white wine, parsley",
                    "OR grilled prawns (200g) with lemon and olive oil",
                    "Roasted potatoes (120g) with rosemary and olive oil",
                    "Mixed green salad"
                ],
                macros: { protein: 48, carbs: 40, fats: 16, calories: 500 }
            }
        },
        shopping: {
            protein: [
                { item: "Octopus or large prawns", qty: "600g" },
                { item: "Calamari tubes", qty: "400g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Burrata", qty: "250g" },
                { item: "Anchovy fillets", qty: "1 tin" }
            ],
            produce: [
                { item: "Broccoli rabe (cime di rapa) or broccolini", qty: "2 bunches" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Vine tomatoes", qty: "4" },
                { item: "Carrots", qty: "4" },
                { item: "Celery", qty: "1 bunch" },
                { item: "Potatoes", qty: "500g" },
                { item: "Fresh parsley", qty: "1 bunch" },
                { item: "Garlic", qty: "2 bulbs" },
                { item: "Peaches or nectarines", qty: "4" },
                { item: "Lemons", qty: "5" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Orecchiette pasta", qty: "500g" },
                { item: "Dried fava beans (or canned)", qty: "300g" },
                { item: "Friselle (dried bread rounds) or rustic bread", qty: "1 pack" },
                { item: "Taralli (Pugliese crackers)", qty: "1 pack" },
                { item: "Almond butter", qty: "check stock" },
                { item: "White wine (for cooking)", qty: "1 bottle" },
                { item: "Dried oregano", qty: "check stock" },
                { item: "Extra virgin olive oil (Pugliese if possible)", qty: "500ml" }
            ]
        }
    },
    liguria: {
        name: "Liguria (Genoa)",
        description: "The Italian Riviera. Pesto, focaccia, farinata, seafood, and the freshest basil you'll ever taste. Light, herbaceous, sea-kissed.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Small piece focaccia di Recco (30g)", "Espresso"],
                macros: { protein: 3, carbs: 20, fats: 4, calories: 130 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Farinata (chickpea pancake): made with chickpea flour, olive oil, rosemary",
                    "Topped with 2 poached eggs",
                    "Side of cherry tomatoes and rocket"
                ],
                macros: { protein: 32, carbs: 38, fats: 18, calories: 450 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Trofie al pesto Genovese: trofie pasta (80g dry) with homemade basil pesto, green beans (50g), potato (50g)",
                    "Grilled chicken breast (150g) on the side",
                    "Mixed salad with lemon vinaigrette"
                ],
                macros: { protein: 48, carbs: 62, fats: 18, calories: 610 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Greek yoghurt (200g) with pine nuts (15g) and honey"
                ],
                macros: { protein: 20, carbs: 18, fats: 12, calories: 265 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Branzino al sale (or simply grilled): whole sea bass or fillet (200g) with lemon, olive oil, fresh herbs",
                    "Condiglione (Ligurian salad): tomato, cucumber, capsicum, olives, anchovy, basil, olive oil",
                    "Steamed artichoke (if in season) or steamed asparagus"
                ],
                macros: { protein: 48, carbs: 25, fats: 18, calories: 455 }
            }
        },
        shopping: {
            protein: [
                { item: "Sea bass (branzino) fillets", qty: "600g" },
                { item: "Chicken breast", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Greek yoghurt", qty: "500g" },
                { item: "Anchovy fillets", qty: "1 tin" }
            ],
            produce: [
                { item: "Fresh basil (LARGE bunch — for pesto)", qty: "2 bunches" },
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Vine tomatoes", qty: "4" },
                { item: "Cucumber", qty: "2" },
                { item: "Green capsicum", qty: "1" },
                { item: "Green beans", qty: "200g" },
                { item: "Rocket", qty: "200g" },
                { item: "Artichokes or asparagus", qty: "4 or 1 bunch" },
                { item: "Potatoes (waxy)", qty: "4 small" },
                { item: "Fresh rosemary", qty: "1 bunch" },
                { item: "Garlic", qty: "1 bulb" },
                { item: "Lemons", qty: "5" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Trofie pasta (or linguine)", qty: "500g" },
                { item: "Chickpea flour (besan)", qty: "500g" },
                { item: "Pine nuts", qty: "100g" },
                { item: "Olives (Taggiasca if possible)", qty: "1 jar" },
                { item: "Parmigiano-Reggiano (for pesto)", qty: "100g" },
                { item: "Pecorino (for pesto)", qty: "50g" },
                { item: "Focaccia (bakery, or make your own)", qty: "1" },
                { item: "Honey", qty: "check stock" },
                { item: "Extra virgin olive oil (Ligurian if possible)", qty: "500ml" }
            ]
        }
    },
    veneto: {
        name: "Veneto (Venice)",
        description: "La Serenissima. Risotto, radicchio, baccalà, cicchetti, and the Adriatic's finest. Elegant, subtle, with Eastern spice echoes.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["1 banana", "Espresso"],
                macros: { protein: 1, carbs: 27, fats: 0, calories: 115 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Protein oats: 60g oats, 1 scoop whey, topped with sliced almonds and cinnamon",
                    "2 soft-boiled eggs",
                    "1 persimmon or apple"
                ],
                macros: { protein: 45, carbs: 55, fats: 16, calories: 555 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Risotto al radicchio: arborio rice (80g dry), radicchio, red wine, parmigiano",
                    "Pan-seared chicken thigh (150g, skin removed) with sage",
                    "Side of grilled radicchio with balsamic"
                ],
                macros: { protein: 45, carbs: 60, fats: 16, calories: 570 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Cicchetti-style: 2 slices of baguette with baccalà mantecato (60g — creamed salt cod)"
                ],
                macros: { protein: 18, carbs: 22, fats: 8, calories: 235 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Fegato alla veneziana: calf's liver (180g) with slow-cooked onions — OR grilled salmon (200g) if liver isn't preferred",
                    "Soft polenta (80g dry)",
                    "Steamed green beans with olive oil"
                ],
                macros: { protein: 48, carbs: 50, fats: 16, calories: 545 }
            }
        },
        shopping: {
            protein: [
                { item: "Calf's liver OR salmon fillets", qty: "500g" },
                { item: "Chicken thighs (skinless)", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Salt cod (baccalà) or quality smoked cod", qty: "200g" },
                { item: "Parmigiano-Reggiano", qty: "100g" },
                { item: "Whey protein", qty: "check stock" }
            ],
            produce: [
                { item: "Radicchio (Treviso if possible)", qty: "2 heads" },
                { item: "Brown onions", qty: "4" },
                { item: "Green beans", qty: "400g" },
                { item: "Fresh sage", qty: "1 bunch" },
                { item: "Persimmon or apple", qty: "4" },
                { item: "Lemons", qty: "3" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Arborio rice", qty: "500g" },
                { item: "Polenta (coarse)", qty: "500g" },
                { item: "Rolled oats", qty: "check stock" },
                { item: "Almonds (sliced)", qty: "100g" },
                { item: "Red wine (for cooking)", qty: "1 bottle" },
                { item: "Balsamic vinegar", qty: "check stock" },
                { item: "Cinnamon", qty: "check stock" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    piemonte: {
        name: "Piemonte (Turin)",
        description: "The northwest crown. Truffle country, hazelnuts, Barolo, agnolotti, vitello tonnato. Rich, refined, France-adjacent elegance.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Rice cake with hazelnut butter (thin spread)", "Espresso"],
                macros: { protein: 3, carbs: 18, fats: 6, calories: 140 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Tomino cheese (60g) grilled, served on sourdough",
                    "3 scrambled eggs with truffle oil (tiny drizzle)",
                    "Mixed berries"
                ],
                macros: { protein: 38, carbs: 35, fats: 22, calories: 495 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Vitello tonnato: cold sliced veal (150g) with tuna-caper sauce (tonnato)",
                    "Side of insalata russa (Russian salad — potato, carrot, peas, egg, light mayo)",
                    "Mixed greens"
                ],
                macros: { protein: 48, carbs: 35, fats: 18, calories: 498 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Dark chocolate (85%+, 20g) with hazelnuts (15g — Piemonte is hazelnut country)",
                    "1 pear"
                ],
                macros: { protein: 5, carbs: 25, fats: 14, calories: 250 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Brasato al Barolo: beef braised in red wine (180g lean), slow-cooked with onion, carrot, celery, herbs",
                    "Creamy polenta (80g dry)",
                    "Roasted brussels sprouts with balsamic glaze"
                ],
                macros: { protein: 50, carbs: 55, fats: 18, calories: 590 }
            }
        },
        shopping: {
            protein: [
                { item: "Veal (for vitello tonnato — eye round)", qty: "500g" },
                { item: "Beef chuck or brisket (for brasato)", qty: "600g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Canned tuna (for tonnato sauce)", qty: "1 tin" },
                { item: "Tomino or other grilling cheese", qty: "200g" }
            ],
            produce: [
                { item: "Brussels sprouts", qty: "400g" },
                { item: "Carrots", qty: "4" },
                { item: "Celery", qty: "1 bunch" },
                { item: "Brown onions", qty: "3" },
                { item: "Mixed berries", qty: "300g" },
                { item: "Pears", qty: "4" },
                { item: "Potatoes (for insalata russa)", qty: "3 small" },
                { item: "Frozen peas", qty: "200g" },
                { item: "Mixed salad greens", qty: "200g" },
                { item: "Lemons", qty: "3" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Polenta (coarse)", qty: "500g" },
                { item: "Sourdough bread", qty: "1 loaf" },
                { item: "Rice cakes", qty: "1 pack" },
                { item: "Hazelnuts (Piemontese if possible)", qty: "200g" },
                { item: "Hazelnut butter", qty: "1 jar" },
                { item: "Dark chocolate (85%+)", qty: "100g" },
                { item: "Truffle oil", qty: "small bottle" },
                { item: "Barolo or quality red wine (for cooking)", qty: "1 bottle" },
                { item: "Capers", qty: "1 jar" },
                { item: "Balsamic vinegar", qty: "check stock" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    },
    sardegna: {
        name: "Sardegna (Sardinia)",
        description: "The Blue Zone island. One of the world's longevity capitals. Pecorino, pane carasau, wild boar, lobster, and the shepherd's diet that keeps people living past 100.",
        meals: {
            pre_workout: {
                name: "Pre-Workout",
                time: "6:15 AM",
                items: ["Piece of pane carasau (Sardinian flatbread) with olive oil drizzle", "Espresso"],
                macros: { protein: 2, carbs: 20, fats: 4, calories: 125 }
            },
            breakfast: {
                name: "Post-Workout Breakfast",
                time: "8:30 AM",
                items: [
                    "Pane frattau: pane carasau layered with pomodoro sauce, 2 poached eggs, pecorino sardo",
                    "Side of seasonal fruit"
                ],
                macros: { protein: 32, carbs: 40, fats: 18, calories: 455 }
            },
            lunch: {
                name: "Lunch",
                time: "12:30 PM",
                items: [
                    "Fregola con arselle: fregola pasta (80g dry) with clams (200g in shell), cherry tomatoes, parsley, white wine, garlic",
                    "OR fregola with prawns if clams unavailable",
                    "Simple rocket salad with lemon"
                ],
                macros: { protein: 40, carbs: 58, fats: 14, calories: 525 }
            },
            snack: {
                name: "Afternoon Snack",
                time: "3:30 PM",
                items: [
                    "Pecorino sardo (30g) with raw almonds (15g)",
                    "Fresh figs (2) or grapes"
                ],
                macros: { protein: 12, carbs: 20, fats: 14, calories: 255 }
            },
            dinner: {
                name: "Dinner",
                time: "7:00 PM",
                items: [
                    "Porceddu-inspired: slow-roasted pork loin (180g) with myrtle and rosemary (instead of whole suckling pig)",
                    "Fava bean and pecorino salad (the classic Sardinian pairing)",
                    "Roasted fennel with olive oil"
                ],
                macros: { protein: 52, carbs: 35, fats: 20, calories: 535 }
            }
        },
        shopping: {
            protein: [
                { item: "Pork loin", qty: "600g" },
                { item: "Clams (vongole) or prawns", qty: "500g" },
                { item: "Eggs (free-range)", qty: "18" },
                { item: "Pecorino sardo", qty: "150g" }
            ],
            produce: [
                { item: "Cherry tomatoes", qty: "500g" },
                { item: "Rocket", qty: "200g" },
                { item: "Fennel bulb", qty: "2" },
                { item: "Fresh figs or grapes", qty: "300g" },
                { item: "Fresh parsley", qty: "1 bunch" },
                { item: "Fresh rosemary", qty: "1 bunch" },
                { item: "Garlic", qty: "1 bulb" },
                { item: "Seasonal fruit", qty: "4 pieces" },
                { item: "Lemons", qty: "4" },
                { item: "Bananas", qty: "7" }
            ],
            pantry: [
                { item: "Fregola sarda (Sardinian pasta)", qty: "500g" },
                { item: "Pane carasau (Sardinian flatbread)", qty: "1 pack" },
                { item: "Dried fava beans (or canned)", qty: "300g" },
                { item: "Almonds (raw)", qty: "150g" },
                { item: "White wine (for cooking)", qty: "1 bottle" },
                { item: "Dried myrtle (if available) or bay leaves", qty: "1 pack" },
                { item: "Extra virgin olive oil", qty: "500ml" }
            ]
        }
    }
};
