export const itineraryData = [
    {
        dayNumber: 1,
        date: "15/06/2026",
        title: "Arrival & The Seine",
        description: "Arrival from Shanghai. First glimpses of the Eiffel Tower and a classic Parisian dinner.",
        stats: { budget: 404, kmWalked: 4.5, kmTraveled: 30 },
        activities: [
            { time: "06:30 - 08:30", title: "Arrival MU553 from Shanghai", location: "CDG Terminal 2E", description: "Direct flight from Shanghai Pudong. Immigration + baggage ~40 min.", tip: "OVERNIGHT FLIGHT. Sleep on plane. Bring neck pillow.", cost: 0, transit: "25 km by RER B + Metro (50m)", icon: "fa-plane-arrival", type: "transit" },
            { time: "09:30 - 10:15", title: "Hotel: BW Plus Sydney Opera", location: "8 Rue des Mathurins, 75009", description: "Store luggage at front desk. Hotel near Opéra/Madeleine, central Paris.", tip: "PRE PAID FOR 5 NIGHTS. Check-in from 14:00, front desk holds luggage.", cost: 0, transit: "0.5 km by Walk (8m)", icon: "fa-bed", type: "hotel", info: { address: "8 Rue des Mathurins, 75009 Paris", hours: "24/7 Front Desk", tel: "+33 1 44 56 08 08", web: "bestwestern.fr", budget: "Pre-paid" } },
            { time: "12:30 - 14:00", title: "Welcome Lunch at Le Bouillon Chartier", location: "7 Rue du Faubourg Montmartre", description: "Historic 1896 Parisian brasserie. Classic French onion soup, steak frites, crème caramel.", tip: "Expect a line, but it moves fast. Write your order on the paper tablecloth!", cost: 45, transit: "1.2 km by Walk (15m)", icon: "fa-utensils", type: "meal", info: { address: "7 Rue du Faubourg Montmartre, 75009 Paris", hours: "11:30 - 00:00", tel: "+33 1 47 70 86 29", web: "bouillon-chartier.com", budget: "€45 Est. for 2" } },
            { time: "14:30 - 16:00", title: "Walk along Seine & Pont Alexandre III", location: "Seine River Banks", description: "Stroll along the river. Admire the Beaux-Arts style Pont Alexandre III.", tip: "Free. Pont Alexandre III is the most ornate bridge, perfect for photos.", cost: 0, icon: "fa-bridge", type: "attraction", info: { address: "Pont Alexandre III, 75008 Paris", hours: "24/7 Public", tel: "N/A", web: "parisinfo.com", budget: "Free" } },
            { time: "16:30 - 19:00", title: "Eiffel Tower Summit", location: "Champ de Mars", description: "Experience sweeping views of Paris at golden hour.", tip: "Pre-book summit access months in advance to avoid massive queues!", cost: 58, transit: "Metro (20m)", icon: "fa-monument", type: "attraction", info: { address: "5 Av. Anatole France, 75007 Paris", hours: "09:30 - 23:45", tel: "+33 892 70 12 39", web: "toureiffel.paris", budget: "€58 for 2 (Summit)" } },
            { time: "19:30 - 21:30", title: "Dinner at Café Constant", location: "139 Rue Saint-Dominique", description: "Bustling, beloved neighborhood bistro by Christian Constant.", tip: "No reservations usually taken, arrive early to snag a table.", cost: 90, icon: "fa-wine-glass", type: "meal", info: { address: "139 Rue Saint-Dominique, 75007 Paris", hours: "07:30 - 23:00", tel: "+33 1 47 53 73 34", web: "maisonconstant.com", budget: "€90 Est. for 2" } }
        ]
    },
    {
        dayNumber: 2,
        date: "16/06/2026",
        title: "Art & Left Bank",
        description: "Impressionist masterpieces, literary cafes, and strolling through Saint-Germain.",
        stats: { budget: 388, kmWalked: 6.2, kmTraveled: 5 },
        activities: [
            { time: "09:30 - 12:00", title: "Musée d'Orsay", location: "Esplanade Valéry Giscard d'Estaing", description: "World's largest collection of Impressionist masterpieces.", tip: "Start at the top floor for the Impressionists, then work your way down.", cost: 32, icon: "fa-palette", type: "attraction", info: { address: "1 Rue de la Légion d'Honneur, 75007 Paris", hours: "09:30 - 18:00 (Closed Mon)", tel: "+33 1 40 49 48 14", web: "musee-orsay.fr", budget: "€32 for 2" } },
            { time: "12:30 - 14:00", title: "Lunch at Les Deux Magots", location: "6 Place Saint-Germain des Prés", description: "Iconic literary café frequented by Hemingway and Sartre.", tip: "Sit on the terrace facing the church for the best people-watching.", cost: 75, transit: "Walk (15m)", icon: "fa-coffee", type: "meal", info: { address: "6 Pl. Saint-Germain des Prés, 75006 Paris", hours: "07:30 - 01:00", tel: "+33 1 45 48 55 25", web: "lesdeuxmagots.fr", budget: "€75 Est. for 2" } },
            { time: "14:30 - 16:00", title: "Panthéon", location: "Place du Panthéon", description: "Neoclassical mausoleum containing the remains of distinguished French citizens.", tip: "Don't miss Foucault's pendulum hanging from the central dome.", cost: 23, transit: "Walk (15m)", icon: "fa-building-columns", type: "attraction", info: { address: "Pl. du Panthéon, 75005 Paris", hours: "10:00 - 18:00", tel: "+33 1 44 32 18 00", web: "paris-pantheon.fr", budget: "€23 for 2" } },
            { time: "16:30 - 18:30", title: "Tuileries Garden & Palais Royal", location: "1st Arrondissement", description: "Stroll through the classic French gardens. See the Buren columns.", tip: "Grab one of the classic green metal chairs by the fountain to rest your feet.", cost: 0, transit: "Metro L1 (15m)", icon: "fa-tree", type: "neutral", info: { address: "Pl. de la Concorde, 75001 Paris", hours: "07:00 - 23:00", tel: "N/A", web: "louvre.fr/en/explore/the-tuileries-garden", budget: "Free" } },
            { time: "19:30 - 21:30", title: "Dinner in Saint-Germain", location: "Saint-Germain-des-Prés", description: "Classic bistro dining in one of Paris's most chic neighborhoods.", tip: "Walk around Rue de Buci after dinner for a lively evening atmosphere.", cost: 85, icon: "fa-utensils", type: "meal", info: { address: "Saint-Germain-des-Prés, 75006", hours: "19:00 - 23:00", tel: "Varies", web: "N/A", budget: "€85 Est. for 2" } }
        ]
    },
    {
        dayNumber: 3,
        date: "17/06/2026",
        title: "Royal Paris & Île de la Cité",
        description: "The vast Louvre, medieval stained glass, and the heart of historical Paris.",
        stats: { budget: 405, kmWalked: 7.1, kmTraveled: 3 },
        activities: [
            { time: "09:00 - 13:00", title: "Louvre Museum", location: "Rue de Rivoli", description: "4 hours inside. Mona Lisa, Venus de Milo, Winged Victory.", tip: "Use the underground Carrousel du Louvre entrance for shorter security lines.", cost: 44, icon: "fa-landmark", type: "attraction", info: { address: "Rue de Rivoli, 75001 Paris", hours: "09:00 - 18:00 (Closed Tue)", tel: "+33 1 40 20 50 50", web: "louvre.fr", budget: "€44 for 2" } },
            { time: "13:30 - 14:30", title: "Lunch near Île de la Cité", location: "Île de la Cité", description: "Quick bite or crêpes near the islands to refuel.", tip: "Grab a quick crêpe on the go to maximize your afternoon sightseeing time.", cost: 35, transit: "Walk (10m)", icon: "fa-utensils", type: "meal", info: { address: "Île de la Cité area", hours: "12:00 - 15:00", tel: "N/A", web: "N/A", budget: "€35 Est. for 2" } },
            { time: "15:00 - 16:00", title: "Sainte-Chapelle", location: "8 Boulevard du Palais", description: "Breathtaking 13th-century Gothic chapel featuring 15 enormous stained glass windows.", tip: "Try to go when the sun is shining; the glass looks spectacular when backlit.", cost: 23, transit: "Walk (5m)", icon: "fa-church", type: "attraction", info: { address: "10 Bd du Palais, 75001 Paris", hours: "09:00 - 17:00", tel: "+33 1 53 40 60 80", web: "sainte-chapelle.fr", budget: "€23 for 2" } },
            { time: "16:30 - 17:30", title: "Notre-Dame Cathedral", location: "6 Parvis Notre-Dame", description: "Enter to see the stunning restored interior.", tip: "Reopened Dec 2024! Free entry. Expect queues but the interior is breathtaking.", cost: 0, transit: "Walk (8m)", icon: "fa-bell", type: "attraction", info: { address: "6 Parvis Notre-Dame, 75004 Paris", hours: "08:00 - 18:45", tel: "+33 1 42 34 56 10", web: "notredamedeparis.fr", budget: "Free" } },
            { time: "17:45 - 18:30", title: "Shakespeare and Company", location: "37 Rue de la Bûcherie", description: "Legendary English-language bookshop since 1951.", tip: "Buy a book to get it officially stamped! The upstairs reading room is charming.", cost: 10, transit: "Walk (12m)", icon: "fa-book", type: "neutral", info: { address: "37 Rue de la Bûcherie, 75005 Paris", hours: "10:00 - 20:00", tel: "+33 1 43 25 40 93", web: "shakespeareandcompany.com", budget: "Free Entry" } },
            { time: "20:00 - 22:00", title: "Dinner near the Panthéon", location: "Latin Quarter", description: "Evening meal in the Latin Quarter. Classic bistro fare.", tip: "The Latin Quarter has many affordable, lively student-area restaurants.", cost: 55, transit: "Metro (15m)", icon: "fa-wine-glass", type: "meal", info: { address: "Quartier Latin, 75005", hours: "19:00 - 23:00", tel: "N/A", web: "N/A", budget: "€55 Est. for 2" } }
        ]
    },
    {
        dayNumber: 4,
        date: "18/06/2026",
        title: "Day Trip to Versailles",
        description: "Exploring the immense opulence of the Sun King's estate.",
        stats: { budget: 378, kmWalked: 8.5, kmTraveled: 45 },
        activities: [
            { time: "08:00 - 09:00", title: "RER C to Versailles", location: "Invalides Station", description: "Take RER C to Versailles-Château Rive Gauche. ~50 min journey.", tip: "Buy return tickets in advance. Keep tickets handy for the exit gates!", cost: 16, icon: "fa-train", type: "transit" },
            { time: "09:30 - 13:00", title: "Palace of Versailles", location: "Place d'Armes, Versailles", description: "Hall of Mirrors, King's Grand Apartments.", tip: "PRE-BOOK YOUR TICKET! Arrive by 09:00 to beat the massive tour groups.", cost: 42, transit: "Walk (5m)", icon: "fa-chess-rook", type: "attraction", info: { address: "Place d'Armes, 78000 Versailles", hours: "09:00 - 18:30 (Closed Mon)", tel: "+33 1 30 83 78 00", web: "chateauversailles.fr", budget: "€42 for 2 (Passport)" } },
            { time: "13:00 - 14:00", title: "Lunch at Versailles", location: "Near the Palace", description: "Lunch break in town or inside the estate grounds.", tip: "There are nice picnic spots and casual cafes down by the Grand Canal.", cost: 45, icon: "fa-utensils", type: "meal", info: { address: "Versailles Town", hours: "12:00 - 14:30", tel: "N/A", web: "N/A", budget: "€45 Est. for 2" } },
            { time: "14:00 - 17:30", title: "Gardens, Grand & Petit Trianon", location: "Versailles Estate", description: "Visit the immense gardens and Marie Antoinette's Hamlet.", tip: "Rent a golf cart if you get tired; the estate is massively spread out (800 hectares).", cost: 24, icon: "fa-leaf", type: "attraction", info: { address: "Versailles Estate, 78000", hours: "08:00 - 20:30 (Gardens)", tel: "N/A", web: "chateauversailles.fr", budget: "€24 for 2" } },
            { time: "18:00 - 19:00", title: "Return to Paris", location: "RER C", description: "Head back to central Paris to rest before dinner.", tip: "Keep an eye on your belongings; pickpockets occasionally target this train line.", cost: 16, icon: "fa-train", type: "transit" },
            { time: "19:30 - 21:30", title: "Dinner at Le Petit Cler", location: "29 Rue Cler", description: "Charming bistro on a famous pedestrian market street near the Eiffel Tower.", tip: "A great spot to enjoy Rue Cler's village vibe while eating classic French food.", cost: 65, icon: "fa-utensils", type: "meal", info: { address: "29 Rue Cler, 75007 Paris", hours: "08:00 - 23:00", tel: "+33 1 45 50 17 50", web: "lepetitcler.com", budget: "€65 Est. for 2" } }
        ]
    },
    {
        dayNumber: 5,
        date: "19/06/2026",
        title: "Montmartre & Opulence",
        description: "From bohemian heights to the gilded extravagance of the Opera and department stores.",
        stats: { budget: 356, kmWalked: 6.0, kmTraveled: 8 },
        activities: [
            { time: "09:30 - 11:00", title: "Sacré-Cœur Dome Climb", location: "Montmartre", description: "Climb the 300 steps of the dome for one of the highest viewpoints in Paris.", tip: "Watch out for 'bracelet scammers' on the steps leading up to the basilica.", cost: 16, icon: "fa-place-of-worship", type: "attraction", info: { address: "35 Rue du Chevalier de la Barre, 75018", hours: "06:30 - 22:30", tel: "+33 1 53 41 89 00", web: "sacre-coeur-montmartre.com", budget: "€16 for 2 (Dome)" } },
            { time: "11:00 - 12:30", title: "Montmartre Village Walk", location: "Place du Tertre", description: "Wander the cobbled streets and soak in the bohemian village atmosphere.", tip: "Wander slightly off the main square to find quieter, charming residential streets.", cost: 0, transit: "Walk", icon: "fa-palette", type: "neutral", info: { address: "Place du Tertre, 75018 Paris", hours: "24/7 Public", tel: "N/A", web: "N/A", budget: "Free" } },
            { time: "13:00 - 14:15", title: "Lunch in Montmartre", location: "Rue Lepic area", description: "Cozy café lunch. Follow the footsteps of Amélie Poulain.", tip: "Look for 'Menu du Jour' (Menu of the Day) on chalkboards for the best value.", cost: 40, icon: "fa-coffee", type: "meal", info: { address: "Rue Lepic, 75018 Paris", hours: "12:00 - 15:00", tel: "N/A", web: "N/A", budget: "€40 Est. for 2" } },
            { time: "14:30 - 16:00", title: "Palais Garnier Opera House", location: "Place de l'Opéra", description: "Self-guided tour of the breathtaking Beaux-Arts opera house.", tip: "Auditorium access depends on rehearsals, but the Grand Staircase alone is worth it.", cost: 32, transit: "Metro L12 (20m)", icon: "fa-masks-theater", type: "attraction", info: { address: "Pl. de l'Opéra, 75009 Paris", hours: "10:00 - 17:00", tel: "+33 1 71 25 24 23", web: "operadeparis.fr", budget: "€32 for 2" } },
            { time: "16:15 - 17:45", title: "Galeries Lafayette Rooftop", location: "40 Boulevard Haussmann", description: "Iconic Art Nouveau department store with a stunning stained glass dome.", tip: "Take the escalators to the FREE rooftop terrace for amazing 360° views.", cost: 0, transit: "Walk (15m)", icon: "fa-bag-shopping", type: "neutral", info: { address: "40 Bd Haussmann, 75009 Paris", hours: "10:00 - 20:30", tel: "+33 1 42 82 34 56", web: "galerieslafayette.com", budget: "Free" } },
            { time: "20:00 - 22:30", title: "Dinner at Pink Mamma", location: "20bis Rue de Douai", description: "Trendy 4-story Italian. Wood-fired pizza, fresh pasta.", tip: "NO RESERVATIONS taken. Arrive by 19:30 or expect a 45+ min wait outside.", cost: 50, transit: "Metro (20m)", icon: "fa-pizza-slice", type: "meal", info: { address: "20bis Rue de Douai, 75009 Paris", hours: "12:00 - 14:15, 18:45 - 22:45", tel: "No Phone", web: "bigmammagroup.com", budget: "€50 Est. for 2" } }
        ]
    },
    {
        dayNumber: 6,
        date: "20/06/2026",
        title: "Le Marais & Contemporary Art",
        description: "Moving hotels, exploring the historic Marais, and modern art.",
        stats: { budget: 248, kmWalked: 5.5, kmTraveled: 12 },
        activities: [
            { time: "09:00 - 09:45", title: "Hotel: Oden Paris Ivry", location: "Ivry-sur-Seine", description: "Check out of first hotel and relocate to new hotel outside Paris.", tip: "Take a taxi WITH your luggage since navigating the metro stairs with bags is tough.", cost: 25, transit: "Taxi (25m)", icon: "fa-bed", type: "hotel", info: { address: "Ivry-sur-Seine", hours: "24/7 Front Desk", tel: "+33 1 00 00 00 00", web: "N/A", budget: "Pre-paid" } },
            { time: "10:00 - 11:30", title: "Place des Vosges & Marais Walk", location: "Le Marais", description: "Paris's oldest planned square (1612).", tip: "Victor Hugo House on the square has free entry for the permanent collections.", cost: 0, transit: "Metro L7 (30m)", icon: "fa-tree-city", type: "attraction", info: { address: "Place des Vosges, 75004 Paris", hours: "08:00 - 20:30", tel: "N/A", web: "paris.fr", budget: "Free" } },
            { time: "12:30 - 14:00", title: "Marché des Enfants Rouges", location: "39 Rue de Bretagne", description: "Oldest covered market in Paris. Grab diverse street food.", tip: "The Moroccan stall and the Japanese bento stand are huge local favorites.", cost: 35, transit: "Walk (10m)", icon: "fa-store", type: "meal", info: { address: "39 Rue de Bretagne, 75003 Paris", hours: "08:30 - 20:30 (Closed Mon)", tel: "+33 1 40 11 20 40", web: "paris.fr", budget: "€35 Est. for 2" } },
            { time: "14:30 - 16:30", title: "Bourse de Commerce – Pinault Collection", location: "2 Rue de Viarmes", description: "Contemporary art housed in a restored circular 18th-century commodities exchange.", tip: "The building's architecture by Tadao Ando is as impressive as the art itself.", cost: 28, transit: "Walk/Metro (15m)", icon: "fa-building", type: "attraction", info: { address: "2 Rue de Viarmes, 75001 Paris", hours: "11:00 - 19:00 (Closed Tue)", tel: "+33 1 55 04 60 60", web: "pinaultcollection.com", budget: "€28 for 2" } },
            { time: "19:00 - 21:00", title: "Dinner at Breizh Café", location: "109 Rue Vieille du Temple", description: "The absolute best Breton galettes (savory crêpes) and artisanal cider.", tip: "Book ahead! Pair your savory galette with artisanal cider served in a traditional bowl.", cost: 45, transit: "Walk (15m)", icon: "fa-utensils", type: "meal", info: { address: "109 Rue Vieille-du-Temple, 75003", hours: "10:00 - 23:00", tel: "+33 1 42 72 13 77", web: "breizhcafe.com", budget: "€45 Est. for 2" } }
        ]
    },
    {
        dayNumber: 7,
        date: "21/06/2026",
        title: "Monet & Music",
        description: "A trip to Giverny followed by the nationwide Fête de la Musique celebration.",
        stats: { budget: 239, kmWalked: 6.0, kmTraveled: 155 },
        activities: [
            { time: "08:30 - 09:30", title: "Train to Giverny", location: "Gare Saint-Lazare", description: "Train SNCF to Vernon, then shuttle bus to Giverny.", tip: "Check the return shuttle and train times immediately upon arrival in Vernon.", cost: 32, transit: "Train (50m)", icon: "fa-train", type: "transit" },
            { time: "10:00 - 13:00", title: "Monet's House & Gardens", location: "Giverny", description: "See the water lilies, the Japanese bridge, and the artist's colorful home.", tip: "Book online to skip the ticket queue. The water lily pond is across the road via a tunnel.", cost: 26, transit: "Shuttle (15m)", icon: "fa-seedling", type: "attraction", info: { address: "84 Rue Claude Monet, 27620 Giverny", hours: "09:30 - 18:00", tel: "+33 2 32 51 28 21", web: "fondation-monet.com", budget: "€26 for 2" } },
            { time: "14:30 - 15:45", title: "Return to Paris", location: "Train SNCF", description: "Shuttle to Vernon, then train back to Gare Saint-Lazare.", tip: "Sit on the right side of the train for better views returning to Paris.", cost: 32, transit: "Train (50m)", icon: "fa-train", type: "transit" },
            { time: "16:30 - 18:00", title: "Jardin du Luxembourg", location: "6th Arrondissement", description: "Rest and stroll through the gardens. Medici Fountain, model boats, people-watching.", tip: "A perfect Sunday afternoon activity. Completely free to enter.", cost: 0, transit: "RER B (15m)", icon: "fa-tree", type: "neutral", info: { address: "Rue de Médicis, 75006 Paris", hours: "07:30 - 21:30 (Summer)", tel: "+33 1 42 34 20 00", web: "senat.fr/visite/jardin", budget: "Free" } },
            { time: "19:00 - 23:00", title: "Fête de la Musique", location: "Citywide", description: "June 21 = Fête de la Musique! Free live music on every street corner.", tip: "Once-in-a-lifetime experience! Just wander around; you'll find Jazz in Marais and rock on Bastille.", cost: 20, icon: "fa-music", type: "attraction", info: { address: "Various Streets, Paris", hours: "Evening - Late Night", tel: "N/A", web: "fetedelamusique.culture.gouv.fr", budget: "Free (Drinks €20)" } }
        ]
    },
    {
        dayNumber: 8,
        date: "22/06/2026",
        title: "Grand Boulevards & Elegance",
        description: "The Champs-Élysées, panoramic views, and a spectacular farewell-style dinner.",
        stats: { budget: 354, kmWalked: 7.2, kmTraveled: 6 },
        activities: [
            { time: "10:00 - 11:15", title: "Champs-Élysées Walk", location: "8th Arrondissement", description: "Stroll the world's most famous avenue. Window-shop at Louis Vuitton.", tip: "Visit the massive Ladurée flagship store for incredible macarons and packaging.", cost: 25, transit: "Walk", icon: "fa-road", type: "neutral", info: { address: "Av. des Champs-Élysées, 75008", hours: "24/7 Public", tel: "N/A", web: "parisinfo.com", budget: "Free" } },
            { time: "11:30 - 12:30", title: "Arc de Triomphe Rooftop", location: "Place Charles de Gaulle", description: "Climb 284 steps for panoramic views of the 12 avenues.", tip: "Use the underground tunnel to cross the roundabout—never try to walk across traffic!", cost: 26, transit: "Walk (15m)", icon: "fa-archway", type: "attraction", info: { address: "Pl. Charles de Gaulle, 75008 Paris", hours: "10:00 - 23:00", tel: "+33 1 55 37 73 77", web: "paris-arc-de-triomphe.fr", budget: "€26 for 2" } },
            { time: "13:30 - 14:45", title: "Lunch near Champs-Élysées", location: "8th Arrondissement", description: "Elegant lunch in the business/luxury district.", tip: "Side streets off the main Champs-Élysées avenue offer much better food quality and prices.", cost: 60, icon: "fa-utensils", type: "meal", info: { address: "8th Arrondissement", hours: "12:00 - 14:30", tel: "N/A", web: "N/A", budget: "€60 Est. for 2" } },
            { time: "15:00 - 17:00", title: "Musée de l'Orangerie", location: "Jardin des Tuileries", description: "Home to Monet's massive Water Lilies murals in two stunning oval rooms.", tip: "Much more intimate than the Louvre. The oval rooms are designed for perfect natural light.", cost: 25, transit: "Metro L1 (15m)", icon: "fa-palette", type: "attraction", info: { address: "Jardin des Tuileries, 75001 Paris", hours: "09:00 - 18:00 (Closed Tue)", tel: "+33 1 44 50 43 00", web: "musee-orangerie.fr", budget: "€25 for 2" } },
            { time: "19:30 - 22:00", title: "Dinner at Le Train Bleu", location: "Gare de Lyon", description: "Breathtaking Belle Époque restaurant inside the train station.", tip: "A splurge, but you are paying for the incredibly opulent, gilded dining room experience.", cost: 160, transit: "Metro L1 (20m)", icon: "fa-champagne-glasses", type: "meal", info: { address: "Pl. Louis-Armand, 75012 Paris", hours: "11:15 - 14:30, 19:00 - 22:30", tel: "+33 1 43 43 09 06", web: "le-train-bleu.com", budget: "€160 Est. for 2" } }
        ]
    },
    {
        dayNumber: 9,
        date: "23/06/2026",
        title: "The Underground & Alternative Paris",
        description: "Exploring the famous cemetery, the trendy canal, and deep into the catacombs.",
        stats: { budget: 452, kmWalked: 6.8, kmTraveled: 10 },
        activities: [
            { time: "10:00 - 12:00", title: "Père Lachaise Cemetery", location: "20th Arrondissement", description: "Visit the resting places of Oscar Wilde, Edith Piaf, and Jim Morrison.", tip: "Download a map beforehand; the cemetery is massive, winding, and easy to get lost in.", cost: 0, transit: "Metro L2/L3 (30m)", icon: "fa-monument", type: "attraction", info: { address: "16 Rue du Repos, 75020 Paris", hours: "08:00 - 18:00", tel: "+33 1 55 25 82 10", web: "pere-lachaise.com", budget: "Free" } },
            { time: "12:30 - 14:30", title: "Canal Saint-Martin brunch", location: "10th Arrondissement", description: "Trendy brunch spot along the iron footbridges of the canal.", tip: "Grab a coffee and sit by the iron locks to watch the boats pass through.", cost: 50, transit: "Metro (15m)", icon: "fa-coffee", type: "meal", info: { address: "Canal Saint-Martin, 75010", hours: "11:00 - 15:00", tel: "N/A", web: "N/A", budget: "€50 Est. for 2" } },
            { time: "15:00 - 17:30", title: "Catacombs of Paris", location: "1 Avenue du Colonel Henri Rol-Tanguy", description: "Descend into the tunnels holding the bones of over 6 million Parisians.", tip: "Only 200 people allowed inside at a time. Advance tickets are absolutely essential.", cost: 58, transit: "Metro (25m)", icon: "fa-skull", type: "attraction", info: { address: "1 Av. du Colonel Henri Rol-Tanguy, 75014", hours: "09:45 - 20:30 (Closed Mon)", tel: "+33 1 43 22 47 63", web: "catacombes.paris.fr", budget: "€58 for 2" } },
            { time: "18:00 - 19:30", title: "Souvenir Shopping & Seine Walk", location: "Central Paris", description: "Last minute shopping for gifts, cheese, wine, and mustard.", tip: "Supermarkets (Monoprix, Franprix) are great for cheap, authentic food souvenirs.", cost: 100, transit: "Metro", icon: "fa-bag-shopping", type: "neutral", info: { address: "Central Paris", hours: "Varies", tel: "N/A", web: "N/A", budget: "€100 Est." } },
            { time: "20:00 - 22:00", title: "Dinner in Le Marais", location: "Le Marais", description: "Final casual but excellent Parisian dinner to cap off the trip.", tip: "Enjoy your final night! Splurge on that extra dessert or glass of wine.", cost: 70, icon: "fa-utensils", type: "meal", info: { address: "Le Marais, 75003/75004", hours: "19:00 - 23:00", tel: "N/A", web: "N/A", budget: "€70 Est. for 2" } }
        ]
    },
    {
        dayNumber: 10,
        date: "24/06/2026",
        title: "Au Revoir, Paris",
        description: "Final espresso and departure back home.",
        stats: { budget: 70, kmWalked: 0.5, kmTraveled: 35 },
        activities: [
            { time: "08:00 - 09:00", title: "Checkout & Last Coffee", location: "Oden Paris Ivry", description: "Quick espresso at hotel lobby or nearby café.", tip: "Grab a fresh croissant for the taxi ride. Final au revoir to Paris.", cost: 10, icon: "fa-mug-hot", type: "meal", info: { address: "Ivry-sur-Seine", hours: "Morning", tel: "N/A", web: "N/A", budget: "€10" } },
            { time: "09:15 - 10:15", title: "Taxi to CDG Airport", location: "Charles de Gaulle", description: "Allow 45-60 min for taxi. Morning traffic can be heavy.", tip: "Book the taxi via G7 app the night before to guarantee a ride.", cost: 60, transit: "Taxi (45m)", icon: "fa-taxi", type: "transit" },
            { time: "13:25 - 14:30", title: "Flight MU554 to Shanghai", location: "CDG Terminal 2E", description: "Direct flight back to Shanghai Pudong. Safe travels!", tip: "Don't forget to claim any VAT refunds at the airport before you pass security.", cost: 0, transit: "Flight (12h)", icon: "fa-plane-departure", type: "transit" }
        ]
    }
];

export const grandSummaryData = {
    flight: 2400,
    accommodation: 1530,
    food: 975,
    culture: 478,
    transport: 101,
    leisure: 196,
    total: 5679
};
