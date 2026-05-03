// THE ARMOURY WITHIN — Supplement Data

const SUPPLEMENTS = {
    essential: [
        {
            name: "Creatine Monohydrate",
            dose: "5g daily",
            when: "Any time, with water or in shake",
            why: "The most researched supplement in sports science. Increases strength, muscle volume, and performance. Safe long-term. No loading phase needed — just consistent daily dose.",
            cost: "~$15/month",
            dietCheck: "Cannot be obtained in sufficient amounts from food alone. 500g of raw steak contains ~2g creatine. Supplementation is warranted."
        },
        {
            name: "Whey Protein Isolate",
            dose: "25-30g (1 scoop) as needed",
            when: "Post-workout or to hit daily protein target",
            why: "Convenient, fast-absorbing protein source. Use to bridge gaps when whole-food protein falls short of 180-200g target. Not a meal replacement.",
            cost: "~$25-35/month",
            dietCheck: "Only needed if struggling to hit 180-200g protein through food. If meals consistently deliver enough protein, this is optional."
        },
        {
            name: "Vitamin D3",
            dose: "2,000-4,000 IU daily",
            when: "Morning, with fat-containing meal",
            why: "Even in sunny Sydney, many people are deficient. Supports testosterone production, immune function, bone health, mood. Get levels tested via blood test to dial in dose.",
            cost: "~$8-12/month",
            dietCheck: "Very difficult to get enough from food alone. Fatty fish provides some, but supplementation is recommended. Blood test is the best guide."
        }
    ],
    advanced: [
        {
            name: "Magnesium Glycinate",
            dose: "300-400mg",
            when: "Before bed",
            why: "Supports sleep quality, muscle recovery, reduces cramping. Most people are deficient, especially athletes who lose magnesium through sweat. Glycinate form is best for sleep and absorption.",
            cost: "~$12-18/month",
            dietCheck: "Found in nuts, seeds, dark leafy greens, dark chocolate. If eating these regularly, deficiency is less likely — but athletes have higher needs."
        },
        {
            name: "Omega-3 Fish Oil",
            dose: "2-3g combined EPA/DHA daily",
            when: "With a meal",
            why: "Anti-inflammatory, joint health, heart health, brain function. Supports recovery between training sessions.",
            cost: "~$15-20/month",
            dietCheck: "If eating oily fish (salmon, sardines, mackerel) 3+ times per week, you may not need this supplement. The meal plan includes fish frequently — reassess based on actual intake."
        },
        {
            name: "Zinc",
            dose: "15-30mg",
            when: "With dinner",
            why: "Supports testosterone production and immune function. Often depleted in athletes through sweat. Don't exceed 40mg/day.",
            cost: "~$8-10/month",
            dietCheck: "Found in red meat, oysters, pumpkin seeds, chickpeas. The meal plan includes zinc-rich foods. Get levels tested before supplementing long-term."
        },
        {
            name: "Ashwagandha (KSM-66)",
            dose: "600mg",
            when: "Morning or evening",
            why: "Evidence for stress/cortisol reduction, modest testosterone support, and improved recovery. Particularly useful during high-stress periods (audition seasons, financial pressure).",
            cost: "~$15-20/month",
            dietCheck: "Not available from food. This is a true supplement — only add if stress management is a priority."
        }
    ],
    skip: [
        {
            name: "Fat Burners",
            why: "The only effective ingredient is caffeine — which you get from espresso. Everything else is marketing. Some contain dangerous stimulants. Save your money and drink coffee."
        },
        {
            name: "Testosterone Boosters",
            why: "Almost all are ineffective for healthy young males. The ones that actually work are prescription medications requiring medical supervision. Tribulus, fenugreek, D-aspartic acid — none produce meaningful testosterone increases in clinical trials."
        },
        {
            name: "BCAAs",
            why: "If you're eating 180-200g of protein per day (which you are), BCAAs are completely redundant. They're already in your food. Literally throwing money away."
        },
        {
            name: "Mass Gainers",
            why: "Overpriced sugar and low-quality protein. If you need more calories, eat more food — a banana and peanut butter is better and cheaper."
        },
        {
            name: "Pre-Workout Powders",
            why: "The active ingredient is caffeine. An espresso + banana achieves the same thing without artificial colours, sweeteners, or proprietary blends. If you need a pre-workout, you need more sleep."
        },
        {
            name: "Collagen Supplements",
            why: "The evidence for collagen supplements improving skin, joints, or hair is weak at best. Your body breaks collagen down into amino acids just like any other protein. Eat adequate protein from whole foods instead."
        }
    ]
};
