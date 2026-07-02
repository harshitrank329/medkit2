// Sample product data
const products = [
    // Medicines
    {
        id: 1,
        title: "Paracetamol Tablets",
        category: "medicines",
        price: 9.00,
        oldPrice: 12.45,
        rating: 5,
        image: "/static/images/paracetamol.jpg",
        discount: "25% OFF",
        description: "Relieves mild to moderate pain and reduces fever."
    },
    {
        id: 7,
        title: "Aspirin Tablets",
        category: "medicines",
        price: 91.5,
        oldPrice: 122.00,
        rating: 4.5,
        image: "/static/images/aspirin-dispersible-tablets.jpg",
        discount: "25% OFF",
        description: "Relieves pain, reduces inflammation and fever."
    },
    {
        id: 10,
        title: "Ibuprofen Tablets",
        category: "medicines",
        price: 99.00,
        oldPrice: 120.00,
        rating: 4,
        image: "/static/images/ibuprofen-tablets.jpg",
        discount: "17% OFF",
        description: "Relieves pain and reduces inflammation."
    },
    {
        id: 15,
        title: "Pain Relief Gel",
        category: "medicines",
        price: 199.00,
        oldPrice: 250.00,
        rating: 4.5,
        image: "/static/images/pain-relief-gel.jpg",
        discount: "20% OFF",
        description: "Provides fast relief from muscle and joint pain."
    },
    {
        id: 25,
        title: "Pain Relief Patches",
        category: "medicines",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4.5,
        image: "/static/images/pain-relief-patches.jpg",
        discount: "20% OFF",
        description: "Provides targeted relief from pain."
    },
    {
        id: 29,
        title: "Herbal Cough Syrup",
        category: "medicines",
        price: 199.00,
        oldPrice: 299.00,
        rating: 4,
        image: "/static/images/herbal-cough-syrup.jpg",
        discount: "33% OFF",
        description: "Natural remedy for cough and throat irritation."
    },
    {
        id: 33,
        title: "Herbal Pain Relief Balm",
        category: "medicines",
        price: 199.00,
        oldPrice: 299.00,
        rating: 4.5,
        image: "/static/images/herbal-pain-relief-balm.jpeg",
        discount: "33% OFF",
        description: "Natural remedy for muscle and joint pain."
    },
    // Devices
    {
        id: 2,
        title: "Digital Thermometer",
        category: "devices",
        price: 158.00,
        oldPrice: 187.00,
        rating: 4,
        image: "/static/images/DigitalThermometer.jpg",
        discount: "16% OFF",
        description: "Accurate temperature readings within seconds."
    },
    {
        id: 8,
        title: "Digital Pulse Oximeter",
        category: "devices",
        price: 795.00,
        oldPrice: 1589.00,
        rating: 5,
        image: "/static/images/DigitalPulseOximeter.jpg",
        discount: "49% OFF",
        description: "Measures oxygen saturation levels in the blood."
    },
    {
        id: 11,
        title: "Glucose Monitor",
        category: "devices",
        price: 2499.00,
        oldPrice: 2999.00,
        rating: 5,
        image: "/static/images/GlucoseMonitor.jpg",
        discount: "17% OFF",
        description: "Monitors blood sugar levels for diabetics."
    },
    {
        id: 13,
        title: "Nebulizer Machine",
        category: "devices",
        price: 1999.00,
        oldPrice: 2499.00,
        rating: 5,
        image: "/static/images/NebulizerMachine.jpg",
        discount: "20% OFF",
        description: "Helps in treating respiratory conditions."
    },
    {
        id: 16,
        title: "Thermal Scissors",
        category: "devices",
        price: 499.00,
        oldPrice: 599.00,
        rating: 4.5,
        image: "/static/images/ThermalScissors.jpg",
        discount: "17% OFF",
        description: "Cuts through tough materials with ease."
    },
    {
        id: 18,
        title: "Inhaler",
        category: "devices",
        price: 799.00,
        oldPrice: 999.00,
        rating: 4,
        image: "/static/images/Inhaler.jpg",
        discount: "20% OFF",
        description: "Helps in treating asthma and other respiratory issues."
    },
    {
        id: 20,
        title: "Thermometer Strips",
        category: "devices",
        price: 199.00,
        oldPrice: 299.00,
        rating: 4,
        image: "/static/images/thermometer-strips.jpg",
        discount: "33% OFF",
        description: "Quick and easy way to check temperature."
    },
    {
        id: 24,
        title: "Thermometer Gun",
        category: "devices",
        price: 999.00,
        oldPrice: 1299.00,
        rating: 5,
        image: "/static/images/thermometer-gun.jpg",
        discount: "23% OFF",
        description: "Non-contact thermometer for quick readings."
    },
    {
        id: 26,
        title: "Pulse Oximeter Finger Clip",
        category: "devices",
        price: 799.00,
        oldPrice: 999.00,
        rating: 4,
        image: "/static/images/pulse-oximeter-finger-clip.jpg",
        discount: "20% OFF",
        description: "Measures oxygen saturation levels in the blood."
    },
    {
        id: 28,
        title: "Digital Body Fat Scale",
        category: "devices",
        price: 1999.00,
        oldPrice: 2499.00,
        rating: 5,
        image: "/static/images/digital-body-fat-scale.jpg",
        discount: "20% OFF",
        description: "Measures body fat percentage and weight."
    },
    {
        id: 30,
        title: "Infrared Thermometer",
        category: "devices",
        price: 1299.00,
        oldPrice: 1599.00,
        rating: 5,
        image: "/static/images/infrared-thermometer.jpg",
        discount: "19% OFF",
        description: "Non-contact thermometer for quick readings."
    },
    {
        id: 32,
        title: "Digital Blood Glucose Meter",
        category: "devices",
        price: 2499.00,
        oldPrice: 2999.00,
        rating: 5,
        image: "/static/images/digital-blood-glucose-meter.jpg",
        discount: "17% OFF",
        description: "Monitors blood sugar levels."
    },
    {
        id: 34,
        title: "Digital Thermometer with Fever Alarm",
        category: "devices",
        price: 799.00,
        oldPrice: 999.00,
        rating: 4,
        image: "/static/images/digital-thermometer-with-fever-alarm.jpg",
        discount: "20% OFF",
        description: "Temperature with fever alarm."
    },
    {
        id: 36,
        title: "Digital Weight Scale",
        category: "devices",
        price: 999.00,
        oldPrice: 1299.00,
        rating: 5,
        image: "/static/images/dws.jpg",
        discount: "23% OFF",
        description: "Accurate weight measurements with easy-to-read display."
    },
    {
        id: 42,
        title: "Digital Kitchen Scale",
        category: "devices",
        price: 1299.00,
        oldPrice: 1599.00,
        rating: 5,
        image: "/static/images/digital-kitchen-scale.jpg",
        discount: "19% OFF",
        description: "Accurate weight measurements for cooking."
    },
    {
        id: 43,
        title: "Digital Food Thermometer",
        category: "devices",
        price: 799.00,
        oldPrice: 999.00,
        rating: 4,
        image: "/static/images/digital-food-thermometer.jpg",
        discount: "20% OFF",
        description: "Temperature readings for cooking."
    },
    {
        id: 44,
        title: "Digital Body Composition Scale",
        category: "devices",
        price: 2499.00,
        oldPrice: 2999.00,
        rating: 5,
        image: "/static/images/digital-body-composition-scale.jpg",
        discount: "17% OFF",
        description: "Measures body fat percentage."
    },
    {
        id: 46,
        title: "Digital Caliper",
        category: "devices",
        price: 999.00,
        oldPrice: 1299.00,
        rating: 5,
        image: "/static/images/digital-caliper.jpg",
        discount: "23% OFF",
        description: "Measures body fat percentage and weight."
    },
    // Wellness
    {
        id: 3,
        title: "Vitamin C Supplements",
        category: "wellness",
        price: 324.00,
        oldPrice: 500,
        rating: 4.5,
        image: "/static/images/vitamin-c-supplements.jpg",
        discount: "35% OFF",
        description: "Boosts immunity and supports overall health."
    },
    {
        id: 12,
        title: "Vitamin D3 Supplements",
        category: "wellness",
        price: 399.00,
        oldPrice: 599.00,
        rating: 4.5,
        image: "/static/images/vitamin-d3-supplements.jpg",
        discount: "33% OFF",
        description: "Supports bone health and immune function."
    },
    {
        id: 14,
        title: "Electrolyte Powder",
        category: "wellness",
        price: 299.00,
        oldPrice: 399.00,
        rating: 4,
        image: "/static/images/electrolyte-powder.jpg",
        discount: "25% OFF",
        description: "Replenishes electrolytes lost during exercise."
    },
    {
        id: 17,
        title: "Omega-3 Fish Oil",
        category: "wellness",
        price: 899.00,
        oldPrice: 1099.00,
        rating: 5,
        image: "/static/images/omega-3-fish-oil.jpg",
        discount: "18% OFF",
        description: "Supports heart and brain health."
    },
    {
        id: 19,
        title: "Calcium Supplements",
        category: "wellness",
        price: 499.00,
        oldPrice: 599.00,
        rating: 4.5,
        image: "/static/images/calcium-supplements.jpg",
        discount: "17% OFF",
        description: "Supports bone health and prevents osteoporosis."
    },
    {
        id: 21,
        title: "Electrolyte Tablets",
        category: "wellness",
        price: 299.00,
        oldPrice: 399.00,
        rating: 4.5,
        image: "/static/images/electrolyte-tablets.jpg",
        discount: "25% OFF",
        description: "Replenishes electrolytes lost during exercise."
    },
    {
        id: 22,
        title: "Cold Compress Pack",
        category: "wellness",
        price: 199.00,
        oldPrice: 299.00,
        rating: 4,
        image: "/static/images/cold-compress-pack.jpg",
        discount: "33% OFF",
        description: "Provides relief from swelling and pain."
    },
    {
        id: 23,
        title: "Hot Water Bottle",
        category: "wellness",
        price: 299.00,
        oldPrice: 399.00,
        rating: 4.5,
        image: "/static/images/hot-water-bottle.jpg",
        discount: "25% OFF",
        description: "Provides warmth and comfort & Body Pain Relief."
    },
    {
        id: 27,
        title: "Vitamin B12 Supplements",
        category: "wellness",
        price: 599.00,
        oldPrice: 799.00,
        rating: 4.5,
        image: "/static/images/vitamin-b12-supplements.jpg",
        discount: "25% OFF",
        description: "Supports energy production and brain health."
    },
    {
        id: 31,
        title: "Probiotic Supplements",
        category: "wellness",
        price: 699.00,
        oldPrice: 899.00,
        rating: 4.5,
        image: "/static/images/probiotic-supplements.jpg",
        discount: "22% OFF",
        description: "Supports gut health and digestion."
    },
    {
        id: 35,
        title: "Vitamin E Oil",
        category: "wellness",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4.5,
        image: "/static/images/vitamin-e-oil.jpg",
        discount: "20% OFF",
        description: "Moisturizes skin and promotes healing."
    },
    {
        id: 37,
        title: "Herbal Sleep Aid",
        category: "wellness",
        price: 499.00,
        oldPrice: 599.00,
        rating: 4,
        image: "/static/images/herbal-sleep-aid.jpg",
        discount: "17% OFF",
        description: "Natural remedy for better sleep."
    },
    {
        id: 38,
        title: "Herbal Joint Pain Relief",
        category: "wellness",
        price: 499.00,
        oldPrice: 599.00,
        rating: 4,
        image: "/static/images/herbal-joint-pain-relief.jpg",
        discount: "17% OFF",
        description: "Natural remedy for joint pain."
    },
    {
        id: 39,
        title: "Herbal Energy Drink",
        category: "wellness",
        price: 299.00,
        oldPrice: 399.00,
        rating: 4.5,
        image: "/static/images/herbal-energy-drink.jpg",
        discount: "25% OFF",
        description: "Natural energy booster."
    },
    {
        id: 40,
        title: "Herbal Digestive Aid",
        category: "wellness",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4,
        image: "/static/images/herbal-digestive-aid.jpg",
        discount: "20% OFF",
        description: "Supports digestive health."
    },
    {
        id: 41,
        title: "Herbal Immune Booster",
        category: "wellness",
        price: 599.00,
        oldPrice: 699.00,
        rating: 4.5,
        image: "/static/images/herbal-immune-booster.jpg",
        discount: "14% OFF",
        description: "Supports immune system health."
    },
    {
        id: 45,
        title: "Herbal Stress Relief",
        category: "wellness",
        price: 499.00,
        oldPrice: 599.00,
       
        image: "/static/images/herbal-stress-relief.jpg",
        discount: "17% OFF",
        description: "A triple-action formula designed to regulate stress."
    },
    {
        id: 47,
        title: "Herbal Anti-Aging Cream",
        category: "wellness",
        price: 799.00,
        oldPrice: 999.00,
        rating: 4.5,
        image: "/static/images/herbal-anti-aging-cream.jpg",
        discount: "20% OFF",
        description: "Natural remedy for youthful skin."
    },
    // Personal Care
    {
        id: 4,
        title: "Sunscreen",
        category: "personal-care",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4.8,
        image: "/static/images/sunscreen3.jpg",
        discount: "20% OFF",
        description: "Broad-spectrum sunscreen for sun protection."
    },
    {
        id: 56,
        title: "Sunscreen",
        category: "personal-care",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4.8,
        image: "/static/images/sunscreen2.jpg",
        discount: "20% OFF",
        description: "Broad-spectrum sunscreen for sun protection."
    },
    {
        id: 63,
        title: "Sunscreen",
        category: "personal-care",
        price: 399.00,
        oldPrice: 499.00,
        rating: 4.8,
        image: "/static/images/sunscreen1.jpg",
        discount: "20% OFF",
        description: "Broad-spectrum sunscreen for sun protection."
    },
    {
        id: 53,
        title: "Face Wash",
        category: "personal-care",
        price: 199.00,
        oldPrice: 249.00,
        rating: 4.5,
        image: "/static/images/face-wash.jpg",
        discount: "20% OFF",
        description: "Gentle face wash for all skin types."
    },
    {
        id: 54,
        title: "Shampoo",
        category: "personal-care",
        price: 299.00,
        oldPrice: 349.00,
        rating: 4,
        image: "/static/images/shampoo1.jpg",
        discount: "15% OFF",
        description: "Nourishing shampoo for healthy hair."
    },
    {
        id: 55,
        title: "Body Lotion",
        category: "personal-care",
        price: 249.00,
        oldPrice: 299.00,
        rating: 4.5,
        image: "/static/images/body-lotion.jpg",
        discount: "17% OFF",
        description: "Moisturizing body lotion for soft skin."
    },
    {
        id: 57,
        title: "Licorice Root",
        category: "ayurved",
        price: 100.00,
        oldPrice: 120.00,
        rating: 4.5,
        image: "/static/images/licorice.jpg",
        discount: "17% OFF",
        description: "Supports respiratory health and soothes the throat."
    },
    {
        id: 58,
        title: "Curry Leaves Powder",
        category: "ayurved",
        price: 150.50,
        oldPrice: 165.00,
        rating: 4.3,
        image: "/static/images/curry_leaves.jpg",
        discount: "30% OFF",
        description: "Promotes healthy hair and digestion."
    },
    {
        id: 59,
        title: "Black Seed Oil",
        category: "ayurved",
        price: 180.00,
        oldPrice: 200.00,
        rating: 4.9,
        image: "/static/images/black_seed.jpg",
        discount: "18% OFF",
        description: "Supports immune function and overall health."
    },
    {
        id: 60,
        title: "Coconut Oil",
        category: "ayurved",
        price: 120.00,
        oldPrice: 150.00,
        rating: 4.8,
        image: "/static/images/coconut_oil.jpg",
        discount: "20% OFF",
        description: "Moisturizes skin and promotes healthy hair."
    },
    {
        id: 61,
        title: "Rosemary Oil",
        category: "ayurved",
        price: 150.00,
        oldPrice: 160.00,
        rating: 4.6,
        image: "/static/images/rosemary_oil.jpg",
        discount: "21% OFF",
        description: "Enhances memory and concentration."
    },
    {
        id: 62,
        title: "Himalayan Pink Salt",
        category: "ayurved",
        price: 60.00,
        oldPrice: 50.50,
        rating: 4.7,
        image: "/static/images/himalayan_salt.jpg",
        discount: "27% OFF",
        description: "Rich in minerals and supports hydration."
    },
    
    {
        id: 64,
        title: "Ashwagandha Capsules",
        category: "ayurved",
        price: 52.50,
        oldPrice: 70.00,
        rating: 4.8,
        image: "/static/images/ashwagandha1.jpg",
        discount: "25% OFF",
        description: "Supports stress relief and enhances overall well-being."
    },
    
    // Protein
    {
        id: 65,
        title: "Optimum Nutrition (ON) Gold Standard 100% ",
        category: "Protein",
        price: 3000.00,
        oldPrice: 4000.00,
        rating: 4.7,
        image: "/static/images/whey_protein1.jpg",
        discount: "25% OFF",
        description: "High-quality protein for muscle recovery and growth."
    },
    {
        id: 75,
        title: "Performance Whey Protein",
        category: "Protein",
        price: 2000.00,
        oldPrice: 2500.00,
        rating: 4.9,
        image: "/static/images/whey_protein.jpg",
        discount: "20% OFF",
        description: "3 Grams of 100% Creatine Monohydrate per Serving, Zero Calories & Zero Carbohydrates."
    },
    {
        id: 76,
        title: "Vegan Protein Powder",
        category: "Nutrition",
        price: 1500.00,
        oldPrice: 2000.00,
        rating: 4.7,
        image: "/static/images/vegan_protein1.jpg",
        discount: "25% OFF",
        description: "Plant-based protein blend for a healthy lifestyle."
    },
    {
        id: 77,
        title: "Omega-3 Fish Oil",
        category: "wellness",
        price: 1200.00,
        oldPrice: 1500.00,
        rating: 4.8,
        image: "/static/images/omega3.jpg",
        discount: "20% OFF",
        description: "Supports heart health and cognitive function."
    },
    {
        id: 78,
        title: "Vitamin C Tablets",
        category: "wellness",
        price: 300.00,
        oldPrice: 400.00,
        rating: 4.6,
        image: "/static/images/vitamin_c.jpg",
        discount: "25% OFF",
        description: "Boosts immunity and supports overall health."
    },
    {
        id: 79,
        title: "Herbal Tea Assortment",
        category: "Food & Drinks",
        price: 350.00,
        oldPrice: 450.00,
        rating: 4.7,
        image: "/static/images/herbal_tea.jpg",
        discount: "22% OFF",
        description: "A variety of soothing herbal teas."
    },
    {
        id: 80,
        title: "Natural Honey",
        category: "Food & Drinks",
        price: 400.00,
        oldPrice: 500.00,
        rating: 4.9,
        image: "/static/images/honey.jpg",
        discount: "20% OFF",
        description: "Pure and natural honey for health benefits."
    },
    {
        id: 81,
        title: "Aloe Vera Gel",
        category: "personal-care",
        price: 250.00,
        oldPrice: 300.00,
        rating: 4.8,
        image: "/static/images/aloe_vera.jpg",
        discount: "17% OFF",
        description: "Soothes and hydrates skin."
    },
    {
        id: 82,
        title: "Activated Charcoal Powder",
        category: "wellness",
        price: 500.00,
        oldPrice: 600.00,
        rating: 4.5,
        image: "/static/images/charcoal_powder.jpg",
        discount: "17% OFF",
        description: "Detoxifies and purifies the body."
    },
    {
        id: 83,
        title: "Matcha Green Tea Powder",
        category: "Food & Drinks",
        price: 800.00,
        oldPrice: 1000.00,
        rating: 4.9,
        image: "/static/images/matcha.jpg",
        discount: "20% OFF",
        description: "Rich in antioxidants and boosts metabolism."
    },
    {
        id: 84,
        title: "Cacao Nibs",
        category: "Food & Drinks",
        price: 600.00,
        oldPrice: 750.00,
        rating: 4.6,
        image: "/static/images/cacao_nibs.jpg",
        discount: "20% OFF",
        description: "Raw chocolate pieces for a healthy snack."
    },
    {
        id: 85,
        title: "Spirulina Powder",
        category: "Nutrition",
        price: 1200.00,
        oldPrice: 1500.00,
        rating: 4.8,
        image: "/static/images/spirulina.jpg",
        discount: "20% OFF",
        description: "Nutrient-dense superfood for energy."
    },
    {
        id: 86,
        title: "Beetroot Powder",
        category: "Nutrition",
        price: 700.00,
        oldPrice: 900.00,
        rating: 4.7,
        image: "/static/images/beetroot_powder.jpg",
        discount: "22% OFF",
        description: "Supports cardiovascular health."
    },
    {
        id: 87,
        title: "Cinnamon Powder",
        category: "Food & Drinks",
        price: 150.00, 
        oldPrice: 200.00,
        rating: 4.5,
        image: "/static/images/cinnamon.jpg",
        discount: "25% OFF",
        description: "Natural spice with numerous health benefits."
    },
    {
        id: 88,
        title: "Ginger Powder",
        category: "Food & Drinks",
        price: 180.00,
        oldPrice: 220.00,
        rating: 4.6,
        image: "/static/images/ginger_powder.jpg",
        discount: "18% OFF",
        description: "Supports digestion and has anti-inflammatory properties."
    },
    {
        id: 89,
        title: "Flaxseed Meal",
        category: "Nutrition",
        price: 300.00,
        oldPrice: 400.00,
        rating: 4.7,
        image: "/static/images/flaxseed_meal.jpg",
        discount: "25% OFF",
        description: "Rich in omega-3 fatty acids and fiber."
    },
    {
        id: 90,
        title: "Almond Butter",
        category: "Food & Drinks",
        price: 1200.00,
        oldPrice: 1500.00,
        rating: 4.8,
        image: "/static/images/almond_butter.jpg",
        discount: "20% OFF",
        description: "Nutritious spread for a healthy snack."
    },
    {
        id: 91,
        title: "Peanut Butter",
        category: "Food & Drinks",
        price: 800.00,
        oldPrice: 1000.00,
        rating: 4.6,
        image: "/static/images/peanut_butter.jpg",
        discount: "20% OFF",
        description: "Creamy and delicious peanut butter."
    },
    {
        id: 92,
        title: "Quinoa",
        category: "Food & Drinks",
        price: 500.00,
        oldPrice: 600.00,
        rating: 4.7,
        image: "/static/images/quinoa.jpg",
        discount: "17% OFF",
        description: "High-protein grain for healthy meals."
    },
    {
        id: 93,
        title: "Brown Rice",
        category: "Food & Drinks",
        price: 300.00,
        oldPrice: 400.00,
        rating: 4.5,
        image: "/static/images/brown_rice.jpg",
        discount: "25% OFF",
        description: "Nutritious whole grain for balanced meals."
    },
    {
        id: 94,
        title: "Oats",
        category: "Food & Drinks",
        price: 200.00,
        oldPrice: 250.00,
        rating: 4.8,
        image: "/static/images/oats.jpg",
        discount: "20% OFF",
        description: "Healthy whole grain for breakfast."
    },
    {
        id: 95,
        title: "Chickpeas",
        category: "Food & Drinks",
        price: 150.00,
        oldPrice: 200.00,
        rating: 4.6,
        image: "/static/images/chickpeas.jpg",
        discount: "25% OFF",
        description: "High-protein legume for various dishes."
    },
    {
        id: 96,
        title: "Lentils",
        category: "Food & Drinks",
        price: 120.00,
        oldPrice: 150.00,
        rating: 4.7,
        image: "/static/images/lentils.jpg",
        discount: "20% OFF",
        description: "Nutritious legume for soups and salads."
    },
    {
        id: 97,
        title: "Couscous",
        category: "Food & Drinks",
        price: 250.00,
        oldPrice: 300.00,
        rating: 4.5,
        image: "/static/images/couscous.jpg",
        discount: "17% OFF",
        description: "Quick-cooking grain for easy meals."
    },
    {
        id: 98,
        title: "Pasta",
        category: "Food & Drinks",
        price: 200.00,
        oldPrice: 250.00,
        rating: 4.8,
        image: "/static/images/pasta.jpg",
        discount: "20% OFF",
        description: "Versatile grain for various recipes."
    },
    {
        id: 99,
        title: "Rice Noodles",
        category: "Food & Drinks",
        price: 180.00,
        oldPrice: 220.00,
        rating: 4.6,
        image: "/static/images/rice_noodles.jpg",
        discount: "18% OFF",
        description: "Gluten-free noodles for Asian dishes."
    },
    {
        id: 100,
        title: "Coconut Sugar",
        category: "Food & Drinks",
        price: 300.00,
        oldPrice: 350.00,
        rating: 4.7,
        image: "/static/images/coconut_sugar.jpg",
        discount: "14% OFF",
        description: "Natural sweetener with a low glycemic index."
    },
    {
        id: 101,
        title: "Maple Syrup",
        category: "Food & Drinks",
        price: 400.00,
        oldPrice: 500.00,
        rating: 4.9,
        image: "/static/images/maple_syrup.jpg",
        discount: "20% OFF",
        description: "Pure maple syrup for pancakes and desserts."
    },
    {
        id: 102,
        title: "Nut Mix",
        category: "Food & Drinks",
        price: 600.00,
        oldPrice: 700.00,
        rating: 4.8,
        image: "/static/images/nut_mix.jpg",
        discount: "14% OFF",
        description: "Healthy snack mix of various nuts."
    },
    {
        id: 103,
        title: "Dried Fruits",
        category: "Food & Drinks",
        price: 500.00,
        oldPrice: 600.00,
        rating: 4.7,
        image: "/static/images/dried_fruits.jpg",
        discount: "17% OFF",
        description: "Nutritious and sweet dried fruit snacks."
    },
    {
        id: 104,
        title: "Granola",
        category: "Food & Drinks",
        price: 350.00,
        oldPrice: 400.00,
        rating: 4.6,
        image: "/static/images/granola.jpg",
        discount: "13% OFF",
        description: "Crunchy granola for breakfast or snacks."
    },
    {
        id: 105,
        title: "Energy Drink",
        category: "Food & Drinks",
        price: 100.00,
        oldPrice: 150.00,
        rating: 4.5,
        image: "/static/images/energy_drink.jpg",
        discount: "33% OFF",
        description: "Boost your energy with this refreshing drink."
    },
    {
        id: 106,
        title: "Herbal Supplements",
        category: "wellness",
        price: 1200.00,
        oldPrice: 1500.00,
        rating: 4.8,
        image: "/static/images/herbal_supplements.jpg",
        discount: "20% OFF",
        description: "Natural supplements for overall wellness."
    },
    {
        id: 107,
        title: "Probiotic Capsules",
        category: "wellness",
        price: 800.00,
        oldPrice: 1000.00,
        rating: 4.7,
        image: "/static/images/probiotics.jpg",
        discount: "20% OFF",
        description: "Supports gut health and digestion."
    },
    {
        id: 108,
        title: "Electrolyte Powder",
        category: "Nutrition",
        price: 600.00,
        oldPrice: 750.00,
        rating: 4.6,
        image: "/static/images/electrolyte_powder.jpg",
        discount: "20% OFF",
        description: "Replenishes electrolytes after workouts."
    },
    {
        id: 109,
        title: "Detox Tea",
        category: "Food & Drinks",
        price: 250.00,
        oldPrice: 300.00,
        rating: 4.5,
        image: "/static/images/detox_tea.jpg",
        discount: "17% OFF",
        description: "Supports detoxification and digestion."
    },
    // Personal Care Products
    {
        id: 110,
        title: "Cleansing Face Wash",
        category: "personal-care",
        price: 350.00,
        oldPrice: 400.00,
        rating: 4.8,
        image: "/static/images/face_wash.jpg",
        discount: "13% OFF",
        description: "Gentle cleanser for all skin types."
    },
    {
        id: 111,
        title: "Sunscreen Lotion",
        category: "personal-care",
        price: 500.00,
        oldPrice: 600.00,
        rating: 4.9,
        image: "/static/images/sunscreen.jpg",
        discount: "17% OFF",
        description: "Protects skin from harmful UV rays."
    },
    {
        id: 112,
        title: "Moisturizing Cream",
        category: "personal-care",
        price: 700.00,
        oldPrice: 800.00,
        rating: 4.6,
        image: "/static/images/moisturizer.jpg",
        discount: "13% OFF",
        description: "Hydrates and nourishes the skin."
    },
    {
        id: 113,
        title: "Hair Oil",
        category: "personal-care",
        price: 400.00,
        oldPrice: 500.00,
        rating: 4.7,
        image: "/static/images/hair_oil.jpg",
        discount: "20% OFF",
        description: "Promotes healthy hair growth."
    },
    {
        id: 114,
        title: "Lip Balm",
        category: "personal-care",
        price: 150.00,
        oldPrice: 200.00,
        rating: 4.5,
        image: "/static/images/lip_balm.jpg",
        discount: "25% OFF",
        description: "Keeps lips moisturized and soft."
    },
    {
        id: 115,
        title: "Nail Care Kit",
        category: "personal-care",
        price: 300.00,
        oldPrice: 350.00,
        rating: 4.8,
        image: "/static/images/nail_care.jpg",
        discount: "14% OFF",
        description: "Complete kit for nail grooming."
    },
    {
        id: 116,
        title: "Foot Cream",
        category: "personal-care",
        price: 250.00,
        oldPrice: 300.00,
        rating: 4.6,
        image: "/static/images/foot_cream.jpg",
        discount: "17% OFF",
        description: "Soothes and softens dry feet."
    },
    {
        id: 117,
        title: "Body Scrub",
        category: "personal-care",
        price: 400.00,
        oldPrice: 500.00,
        rating: 4.7,
        image: "/static/images/body_scrub.jpg",
        discount: "20% OFF",
        description: "Exfoliates and rejuvenates skin."
    },
    {
        id: 118,
        title: "Shampoo",
        category: "personal-care",
        price: 350.00,
        oldPrice: 400.00,
        rating: 4.8,
        image: "/static/images/shampoo.jpg",
        discount: "13% OFF",
        description: "Gentle formula for all hair types."
    },
    {
        id: 119,
        title: "Conditioner",
        category: "personal-care",
        price: 300.00,
        oldPrice: 350.00,
        rating: 4.6,
        image: "/static/images/conditioner.jpg",
        discount: "14% OFF",
        description: "Nourishes and detangles hair."
    },
    // Protein Supplements
    {
        id: 120,
        title: "MuscleTech NitroTech Whey Protein",
        category: "protein",
        price: 4500.00,
        oldPrice: 5500.00,
        rating: 4.9,
        image: "/static/images/MuscleTech_NitroTech.jpg",
        discount: "18% OFF",
        description: "Premium whey protein isolate for muscle building and recovery."
    },
    {
        id: 121,
        title: "Optimum Nutrition Gold Standard Whey",
        category: "protein",
        price: 4200.00,
        oldPrice: 5000.00,
        rating: 4.8,
        image: "/static/images/on_gold_standard.jpg",
        discount: "16% OFF",
        description: "World's best-selling whey protein powder for lean muscle support."
    },
    {
        id: 122,
        title: "Dymatize Nutrition Elite Whey",
        category: "protein",
        price: 3900.00,
        oldPrice: 4700.00,
        rating: 4.7,
        image: "/static/images/dymatize_elite.jpg",
        discount: "17% OFF",
        description: "High-quality whey protein for muscle growth and recovery."
    },
    {
        id: 123,
        title: "Ultimate Nutrition Prostar Whey",
        category: "protein",
        price: 3700.00,
        oldPrice: 4400.00,
        rating: 4.6,
        image: "/static/images/prostar_whey.jpg",
        discount: "16% OFF",
        description: "Whey protein blend for athletes and fitness enthusiasts."
    },
    {
        id: 124,
        title: "Bigmuscles Nutrition Raw & Real Whey",
        category: "protein",
        price: 3200.00,
        oldPrice: 4000.00,
        rating: 4.5,
        image: "/static/images/bigmuscles_raw.jpg",
        discount: "20% OFF",
        description: "Unflavored raw whey protein for pure muscle gain."
    },
    {
        id: 125,
        title: "Myprotein Impact Whey Protein",
        category: "protein",
        price: 3500.00,
        oldPrice: 4300.00,
        rating: 4.7,
        image: "/static/images/impact_whey.jpg",
        discount: "19% OFF",
        description: "Popular European whey protein for daily nutrition."
    },
    {
        id: 126,
        title: "Labrada 100% Whey Protein",
        category: "protein",
        price: 4100.00,
        oldPrice: 4800.00,
        rating: 4.8,
        image: "/static/images/labrada_whey.jpg",
        discount: "15% OFF",
        description: "Delicious and effective whey protein for muscle recovery."
    },
    {
        id: 127,
        title: "bGREEN Plant Protein",
        category: "protein",
        price: 2800.00,
        oldPrice: 3500.00,
        rating: 4.4,
        image: "/static/images/bgreen_plant.jpg",
        discount: "20% OFF",
        description: "Plant-based protein for vegans and lactose-intolerant users."
    },
    {
        id: 67,
        title: "Superfood Smoothie Mix",
        category: "New Launches",
        price: 20.00,
        oldPrice: 25.00,
        rating: 4.9,
        image: "/static/images/superfood_smoothie.jpg",
        discount: "20% OFF",
        description: "A blend of nutrient-rich superfoods for a quick boost."
    },
    // Home Care & Hygiene
    {
        id: 68,
        title: "Natural All-Purpose Cleaner",
        category: "Home Care & Hygiene",
        price: 10.00,
        oldPrice: 15.00,
        rating: 4.5,
        image: "/static/images/all_purpose_cleaner.jpg",
        discount: "33% OFF",
        description: "Eco-friendly cleaner for a safe and clean home."
    },
    {
        id: 128,
        title: "Lizol Disinfectant Surface Cleaner",
        category: "Home Care & Hygiene",
        price: 250.00,
        oldPrice: 300.00,
        rating: 4.7,
        image: "/static/images/lizol.jpg",
        discount: "17% OFF",
        description: "Removes 99.9% germs and tough stains for a hygienic home."
    },
    {
        id: 129,
        title: "Harpic Power Plus Toilet Cleaner",
        category: "Home Care & Hygiene",
        price: 120.00,
        oldPrice: 150.00,
        rating: 4.8,
        image: "/static/images/harpic.jpg",
        discount: "20% OFF",
        description: "Powerful toilet cleaner for sparkling clean toilets."
    },
    {
        id: 130,
        title: "Dettol Antibacterial Floor Cleaner",
        category: "Home Care & Hygiene",
        price: 180.00,
        oldPrice: 220.00,
        rating: 4.6,
        image: "/static/images/dettol_floor.jpg",
        discount: "18% OFF",
        description: "Kills germs and leaves floors fresh and clean."
    },
    {
        id: 131,
        title: "Colin Glass Cleaner",
        category: "Home Care & Hygiene",
        price: 90.00,
        oldPrice: 120.00,
        rating: 4.5,
        image: "/static/images/colin.jpg",
        discount: "25% OFF",
        description: "Streak-free shine for glass and shiny surfaces."
    },
    {
        id: 132,
        title: "Scotch-Brite Scrub Pad",
        category: "Home Care & Hygiene",
        price: 40.00,
        oldPrice: 50.00,
        rating: 4.4,
        image: "/static/images/scotch_brite.jpg",
        discount: "20% OFF",
        description: "Removes tough stains from utensils and surfaces."
    },
    {
        id: 133,
        title: "Vim Dishwash Gel",
        category: "Home Care & Hygiene",
        price: 60.00,
        oldPrice: 80.00,
        rating: 4.7,
        image: "/static/images/vim_gel.jpg",
        discount: "25% OFF",
        description: "Removes grease and tough stains from dishes."
    },
    {
        id: 134,
        title: "All Out Liquid Electric",
        category: "Home Care & Hygiene",
        price: 75.00,
        oldPrice: 100.00,
        rating: 4.3,
        image: "/static/images/all_out.jpg",
        discount: "25% OFF",
        description: "Effective mosquito repellent for a peaceful sleep."
    },
    {
        id: 135,
        title: "Odonil Room Freshener",
        category: "Home Care & Hygiene",
        price: 85.00,
        oldPrice: 110.00,
        rating: 4.5,
        image: "/static/images/odonil.jpg",
        discount: "23% OFF",
        description: "Long-lasting fragrance for a fresh home environment."
    },
   
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const searchIcon = document.getElementById('search-icon');
const closeSearch = document.querySelector('.close-search');
const searchOverlay = document.querySelector('.search-overlay');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.querySelector('.close-cart');
const cartSidebar = document.querySelector('.cart-sidebar');
const overlay = document.querySelector('.overlay');
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const continueShoppingBtn = document.querySelector('.continue-shopping');
const filterButtons = document.querySelectorAll('.filter-btn');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');

// Cart array
let cart = [];

// Mobile menu toggle
if (hamburger) 
{
    hamburger.addEventListener('click', () => 
    {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Cart sidebar toggle
if (cartIcon && closeCart && cartSidebar && overlay) 
{
    cartIcon.addEventListener('click', (e) => 
    {
        e.preventDefault();
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeCart.addEventListener('click', () => 
    {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => 
    {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    if (continueShoppingBtn) 
    {
        continueShoppingBtn.addEventListener('click', () => 
        {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}

// Load products with limit
function loadProducts(category = 'all', limit = 8) 
{
    if (!productGrid) return;

    productGrid.innerHTML = '';

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    const productsToShow = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    productsToShow.forEach(product => 
    {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });

    // Add event listeners to newly created add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => 
    {
        button.addEventListener('click', function () 
        {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });

    // Show or hide the "View All" and "View Less" buttons
    const viewAllButton = document.getElementById('view-all-btn');
    const viewLessButton = document.getElementById('view-less-btn');

    if (viewAllButton && viewLessButton) 
    {
        if (limit && filteredProducts.length > limit) 
        {
            viewAllButton.style.display = 'block';
            viewLessButton.style.display = 'none';
        } 
        else 
        {
            viewAllButton.style.display = 'none';
            viewLessButton.style.display = 'block';
        }
    }
}

// Add event listeners for "View All" and "View Less" buttons
document.addEventListener('DOMContentLoaded', () => 
{
    const viewAllButton = document.getElementById('view-all-btn');
    const viewLessButton = document.getElementById('view-less-btn');

    if (viewAllButton) 
    {
        viewAllButton.addEventListener('click', () => 
        {
            loadProducts('all', null); // Load all products
        });
    }

    if (viewLessButton) {
        viewLessButton.addEventListener('click', () => 
        {
            loadProducts('all', 8); // Load only 8 products
        });
    }

    loadProducts(); // Load initial 8 products
});

// Create product card
function createProductCard(product) 
{
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Generate star rating HTML
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) 
    {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (halfStar) 
    {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) 
    {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    productCard.innerHTML = `
        <div class="product-img">
            <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
            ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            <div class="product-icons">
                <span class="product-icon"><i class="far fa-heart"></i></span>
            </div>
        </div>
        <div class="product-details">
            <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-rating">${starsHTML}</div>
            <div class="product-price">
                <span class="current-price">₹${product.price.toFixed(2)}</span>
                ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return productCard;
}

// Filter products
if (filterButtons.length > 0) 
{
    filterButtons.forEach(button => 
    {
        button.addEventListener('click', function() 
        {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and load filtered products
            const category = this.getAttribute('data-filter');
            loadProducts(category);
        });
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) 
    {
        existingProduct.quantity += 1;
    } 
    else 
    {
        cart.push(
        {
            ...product,
            quantity: 1
        });
    }
    
    // Update cart UI
    updateCart();
    
    // Show cart sidebar
    if (cartSidebar && overlay) 
    {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    }
}

// Update cart UI
function updateCart() 
{
    if (!cartItems || !cartCount || !cartTotalPrice) return;
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) 
    {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } 
    else 
    {
        cart.forEach(item => 
        {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <span class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash"></i></span>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to cart item controls
        document.querySelectorAll('.cart-item-remove').forEach(button => 
        {
            button.addEventListener('click', function() 
            {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
        
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => 
        {
            button.addEventListener('click', function() 
            {
                const productId = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(productId);
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => 
        {
            button.addEventListener('click', function() 
            {
                const productId = parseInt(this.getAttribute('data-id'));
                increaseQuantity(productId);
            });
        });
        
        document.querySelectorAll('.quantity-input').forEach(input => 
        {
            input.addEventListener('change', function() 
            {
                const productId = parseInt(this.getAttribute('data-id'));
                const quantity = parseInt(this.value);
                updateQuantity(productId, quantity);
            });
        });
    }
    
    // Update total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `₹${totalPrice.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(productId) 
{
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Increase quantity
function increaseQuantity(productId) 
{
    const item = cart.find(item => item.id === productId);
    if (item) 
    {
        item.quantity += 1;
        updateCart();
    }
}

// Decrease quantity
function decreaseQuantity(productId) 
{
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) 
    {
        item.quantity -= 1;
        updateCart();
    } 
    else if (item && item.quantity === 1) 
    {
        removeFromCart(productId);
    }
}

// Update quantity
function updateQuantity(productId, quantity) 
{
    if (quantity < 1) return;
    
    const item = cart.find(item => item.id === productId);
    if (item) 
    {
        item.quantity = quantity;
        updateCart();
    }
}

// Testimonial slider
function showTestimonial(index) 
{
    testimonialSlides.forEach((slide, i) => 
    {
        slide.style.display = i === index ? 'block' : 'none';
    });
    
    testimonialDots.forEach((dot, i) => 
    {
        dot.classList.toggle('active', i === index);
    });
}

if (testimonialDots.length > 0 && testimonialSlides.length > 0) 
{
    // Show first testimonial initially
    showTestimonial(0);
    
    // Add event listeners to testimonial dots
    testimonialDots.forEach((dot, index) => 
    {
        dot.addEventListener('click', () => 
        {
            showTestimonial(index);
        });
    });
    
    // Auto rotate testimonials
    let currentTestimonial = 0;
    setInterval(() => 
    {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Newsletter form submission
if (newsletterForm) 
{
    newsletterForm.addEventListener('submit', function(e) 
    {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

        if (email && emailRegex.test(email)) 
        {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        } 
        else 
        {
            alert('Please enter a valid email address.');
        }
    });
}

// Add event listener for "View All Products" button
document.addEventListener('DOMContentLoaded', () => {
    const viewAllButton = document.getElementById('view-all-btn');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', () => {
            loadProducts('all', null); // Load all products
        });
    }

    loadProducts(); // Load initial 8 products
});

// Customers reviews section
document.addEventListener('DOMContentLoaded', () => 
{
    if (window.location.hash) 
    {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) 
        {
            setTimeout(() => 
            {
                window.scrollTo(
                {
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// Helper function to show messages
function showMessage(message, type = 'info') {
    // Remove existing message if any
    const existingMessage = document.querySelector('.message-notification');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-notification ${type}`;
    messageDiv.textContent = message;

    // Style the message
    Object.assign(messageDiv.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bold',
        zIndex: '10000',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });

    // Set background color based on type
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = '#f44336';
    } else {
        messageDiv.style.backgroundColor = '#2196F3';
    }

    // Add to page
    document.body.appendChild(messageDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Function to load testimonials dynamically
function loadTestimonials() {
    fetch('/get-testimonials/')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.testimonials) {
                updateTestimonialsSection(data.testimonials);
            }
        })
        .catch(error => {
            console.error('Error loading testimonials:', error);
        });
}

// Function to update testimonials section with new data
function updateTestimonialsSection(testimonials) {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (!testimonialSlider) return;

    // Clear existing testimonials
    const existingSlides = testimonialSlider.querySelectorAll('.testimonial-slide');
    existingSlides.forEach(slide => slide.remove());

    if (testimonials.length === 0) {
        // Show default message when no testimonials
        const defaultSlide = document.createElement('div');
        defaultSlide.className = 'testimonial-slide';
        defaultSlide.innerHTML = `
            <div class="testimonial-content">
                <p>"Be the first to share your experience with Medkit!"</p>
                <div class="customer-info">
                    <h4>Your Feedback Matters</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        `;
        testimonialSlider.appendChild(defaultSlide);
    } else {
        // Add testimonials
        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';

            // Generate star rating HTML
            let starsHTML = '';
            const rating = parseFloat(testimonial.rating);
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;

            // Full stars
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }

            // Half star
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }

            // Empty stars
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }

            slide.innerHTML = `
                <div class="testimonial-content">
                    <p>"${testimonial.comment}"</p>
                    <div class="customer-info">
                        <h4>${testimonial.name}</h4>
                        <div class="rating">
                            ${starsHTML}
                        </div>
                    </div>
                </div>
            `;
            testimonialSlider.appendChild(slide);
        });
    }

    // Update dots if they exist
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    testimonialDots.forEach((dot, index) => {
        dot.style.display = index < Math.min(testimonials.length || 1, 3) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const ratingPopup = document.querySelector('.rating-popup');
    const submitRatingBtn = document.querySelector('.submit-rating-btn');
    const closePopupBtn = document.querySelector('.close-popup-btn');
    const rateUsBtn = document.querySelector('.rate-us-btn');
    const stars = document.querySelectorAll('.stars i');

    // Show the popup when "Rate Us" button is clicked
    if (rateUsBtn) {
        rateUsBtn.addEventListener('click', () => {
            if (ratingPopup) {
                ratingPopup.style.display = 'block';
            }
        });
    }

    // Close the popup when the close button is clicked
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            ratingPopup.style.display = 'none';
            // Reset form
            stars.forEach(star => star.classList.remove('active'));
            document.querySelector('.rating-popup textarea').value = '';
            submitRatingBtn.textContent = 'Submit';
            submitRatingBtn.disabled = false;
        });
    }

    // Handle the "Submit" button click
    if (submitRatingBtn) {
        submitRatingBtn.addEventListener('click', () => {
            const selectedStars = document.querySelectorAll('.stars i.active').length;
            const comment = document.querySelector('.rating-popup textarea').value.trim();

            if (selectedStars > 0 || comment !== '') {
                // Disable button to prevent double submission
                submitRatingBtn.textContent = 'Submitting...';
                submitRatingBtn.disabled = true;

                // Prepare data for submission
                const formData = new FormData();
                formData.append('rating', selectedStars);
                formData.append('comment', comment);

                // Get CSRF token
                const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]');
                const csrfTokenValue = csrftoken ? csrftoken.value : '';

                // Submit testimonial via AJAX
                fetch('/submit-testimonial/', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-CSRFToken': csrfTokenValue
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Show success message
                        showMessage('Thank you for your feedback!', 'success');
                        ratingPopup.style.display = 'none';

                        // Reset form
                        stars.forEach(star => star.classList.remove('active'));
                        document.querySelector('.rating-popup textarea').value = '';

                        // Refresh testimonials section
                        loadTestimonials();
                    } else {
                        showMessage(data.error || 'Failed to submit testimonial. Please try again.', 'error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMessage('Network error. Please check your connection and try again.', 'error');
                })
                .finally(() => {
                    // Re-enable button
                    submitRatingBtn.textContent = 'Submit';
                    submitRatingBtn.disabled = false;
                });
            } else {
                showMessage('Please provide a rating or comment before submitting.', 'error');
            }
        });
    }

    // Handle star selection
    if (stars.length > 0) {
        stars.forEach((star) => {
            star.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');
                stars.forEach((s) => s.classList.remove('active'));
                for (let i = 0; i < value; i++) {
                    stars[i].classList.add('active');
                }
            });
        });
    }
});

// Contact form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Get form field values using Django form field names
            const nameField = contactForm.querySelector('input[name="name"]');
            const emailField = contactForm.querySelector('input[name="email"]');
            const subjectField = contactForm.querySelector('input[name="subject"]');
            const messageField = contactForm.querySelector('textarea[name="message"]');

            if (!nameField || !emailField || !messageField) {
                // If Django form fields not found, don't interfere with form submission
                return;
            }

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const subject = subjectField ? subjectField.value.trim() : '';
            const message = messageField.value.trim();

            // Basic client-side validation (Django will handle server-side validation)
            if (!name) {
                e.preventDefault();
                alert('Name is required. Please enter your name.');
                return;
            }

            // Validate email format (allow all email formats, not just Gmail)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }

            // Validate message
            if (!message || message.length < 10) {
                e.preventDefault();
                alert('Message is required and must be at least 10 characters long.');
                return;
            }

            // If validation passes, allow form to submit to Django backend
            // Django will handle the actual form processing and database storage
        });
    }
});

// Product link
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.querySelector('a[href="#products"]');

    if (productsLink) {
        productsLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = '/index.html#products'; // Navigate to index.html and scroll to #products
        });
    }
});

// Categories link
document.addEventListener('DOMContentLoaded', () => {
    const categoriesLink = document.querySelector('a[href="#categories"]');

    if (categoriesLink) {
        categoriesLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = '/index.html#categories'; // Navigate to index.html and scroll to #categories
        });
    }
});

// Contact link
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('a[href="#contact"]');

    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = '/index.html#contact'; // Navigate to index.html and scroll to #contact
        });
    }
});

// About link
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#about"]');

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = '/index.html#about'; // Navigate to index.html and scroll to #about
        });
    }
});

// Load Ayurvedic products if on ayurvedic page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, current pathname:', window.location.pathname);
    if (window.location.pathname.includes('ayurvedic')) {
        console.log('Ayurvedic page detected, calling loadAyurvedicProducts');
        loadAyurvedicProducts();
    } else {
        console.log('Not on ayurvedic page');
    }
});

//1 Function to load Ayurvedic products
function loadAyurvedicProducts() {
    console.log('loadAyurvedicProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = ''; // Clear existing content

    // Filter Ayurvedic products
    console.log('Products array:', products);
    const ayurvedicProducts = products.filter(product => product.category === 'ayurved');
    console.log('Ayurvedic products found:', ayurvedicProducts.length);
    
    if (ayurvedicProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Ayurvedic products found.</p>';
        return;
    }

    // Create product cards for Ayurvedic products
    ayurvedicProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

//2 personal care page
function loadPersonalCareProducts() {
    console.log('loadPersonalCareProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = ''; // Clear existing content

    // Filter Personal Care products
    console.log('Products array:', products);
    const personalCareProducts = products.filter(product => product.category === 'personal-care');
    console.log('Personal Care products found:', personalCareProducts.length);
    
    if (personalCareProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Personal Care products found.</p>';
        return;
    }

    // Create product cards for Personal Care products
    personalCareProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('personal-care/')) {
        loadPersonalCareProducts();
    }
});

//3 Food & Drinks page
function loadFoodDrinksProducts() {
    console.log('loadFoodDrinksProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = ''; // Clear existing content

    // Filter Food & Drinks products
    console.log('Products array:', products);
    const foodDrinksProducts = products.filter(product => product.category === 'Food & Drinks');
    console.log('Food & Drinks products found:', foodDrinksProducts.length);
    
    if (foodDrinksProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Food & Drinks products found.</p>';
        return;
    }

    // Create product cards for Food & Drinks products
    foodDrinksProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('food-drinks/')) {
        loadFoodDrinksProducts();
    }
});

//4 Home Care & Hygiene page
function loadHomeCareHygieneProducts() {
    console.log('loadHomeCareHygieneProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = '';

    // Filter Home Care & Hygiene products
    console.log('Products array:', products);
    const homeCareProducts = products.filter(product => product.category === 'Home Care & Hygiene');
    console.log('Home Care & Hygiene products found:', homeCareProducts.length);

    if (homeCareProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Home Care & Hygiene products found.</p>';
        return;
    }

    homeCareProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('home-care-hygiene/')) {
        loadHomeCareHygieneProducts();
    }
});

//5 Medical Devices page
function loadMedicalDevicesProducts() {
    console.log('loadMedicalDevicesProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = '';

    // Filter Medical Devices products
    console.log('Products array:', products);
    const medicalDevicesProducts = products.filter(product => product.category === 'devices');
    console.log('Medical Devices products found:', medicalDevicesProducts.length);

    if (medicalDevicesProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Medical Devices products found.</p>';
        return;
    }

    medicalDevicesProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('medical-devices/')) {
        loadMedicalDevicesProducts();
    }
});

//6 New Launches page
function loadNewLaunchesProducts() {
    console.log('loadNewLaunchesProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = '';

    // Filter New Launches products
    console.log('Products array:', products);
    const newLaunchesProducts = products.filter(product => product.category === 'new-launches' || product.category === 'New Launches' || product.category === 'Newly Lanuches');
    console.log('New Launches products found:', newLaunchesProducts.length);

    if (newLaunchesProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No New Launches products found.</p>';
        return;
    }

    newLaunchesProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('new-launches/')) {
        loadNewLaunchesProducts();
    }
});

//7 Nutrition page
function loadNutritionProducts() {
    console.log('loadNutritionProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = '';

    // Filter Nutrition products
    console.log('Products array:', products);
    const nutritionProducts = products.filter(product => product.category === 'Nutrition' || product.category === 'nutrition');
    console.log('Nutrition products found:', nutritionProducts.length);

    if (nutritionProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Nutrition products found.</p>';
        return;
    }

    nutritionProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('nutrition/')) {
        loadNutritionProducts();
    }
});

//8 Protein page
function loadProteinProducts() {
    console.log('loadProteinProducts function called');
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.log('Product grid not found');
        return;
    }

    productGrid.innerHTML = '';

    // Filter Protein products
    console.log('Products array:', products);
    const proteinProducts = products.filter(product => product.category === 'Protein' || product.category === 'protein');
    console.log('Protein products found:', proteinProducts.length);

    if (proteinProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No Protein products found.</p>';
        return;
    }

    proteinProducts.forEach(product => {
        console.log('Creating product card for:', product.title, 'with image:', product.image);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='/static/images/placeholder.jpg';">
                ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
        console.log('Product card added to grid');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.toLowerCase().includes('protein/')) {
        loadProteinProducts();
    }
});

fetch('/api/save-cart/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart.map(i => ({
      name: i.title, price: i.price, quantity: i.quantity ?? 1, selected: i.selected ?? true
    })))
  });
