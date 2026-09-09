import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";

import { SiTicktick } from "react-icons/si";
import { GoLaw } from "react-icons/go";
import {
  FaAward,
  FaBalanceScale,
  FaBusinessTime,
  FaChartLine,
  FaCoins,
  FaCrown,
  FaGlobe,
  FaGraduationCap,
  FaHandsHelping,
  FaHandshake,
  FaLeaf,
  FaShoppingCart,
  FaTrophy,
  FaUnlock,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";

// Team members images

// product images
import awakeeCleanser375 from "./assets/products/awakeeCleanser375.jpeg";
import colonCleanser from "./assets/products/awakeeCleanser.jpeg";
import colonCleanserCapsule from "./assets/products/colonCleanserCapsule.jpeg";
import herbalSoap from "./assets/products/herbalSoap.jpeg";
import menEnhancement from "./assets/products/menEnhancement.jpeg";
import eyeRemedy from "./assets/products/eyeRemedy.jpeg";
import prostateRemedy from "./assets/products/prostateRemedy.jpeg";
import libidoHerbalCapsule from "./assets/products/libidoHerbalCapsule.jpeg";

export const slides = [
  {
    image: slide1,
    title: "Natural Wellness",
    description: "Discover the power of nature for a healthier you.",
    button: "Get Started",
    link: "http://www.jomadel.com/default.aspx",
  },
  {
    image: slide2,
    title: "Herbal Solutions",
    description: "Experience the benefits of our premium herbal products.",
    button: "Explore Our Products",
    link: "/products",
  },
  {
    image: slide3,
    title: "Healthy Living",
    description:
      "Embrace a natural lifestyle with our carefully crafted products.",
    button: "Checkout Our Reward System",
    link: "/compensation",
  },
];

export const products = [
  {
    id: 1,
    name: "Jomadel Awakee Colon Cleanser (750ml Liquid)",
    tagline: "Start your day fresh, light, and energized!",
    description:
      "Give your body the natural reset it needs with Jomadel Awakee Colon Cleanser Liquid – a powerful herbal blend that cleanses, hydrates, and revitalizes your entire system.",
    benefits: [
      "Cleanses the colon and removes harmful toxins.",
      "Regulates blood pressure and supports heart health.",
      "Boosts immunity and strengthens the body’s defense.",
      "Helps manage arthritis, diabetes, and skin conditions.",
      "Promotes healthy digestion and better nutrient absorption.",
      "Hydrates and refreshes your body from the inside out.",
    ],
    indications: [
      "Toxin Build-Up: Supports the detoxification process, eliminating harmful substances from the body.",
      "Digestive Issues: Helps with indigestion, constipation, and bloating by promoting better digestion and nutrient absorption.",
      "Skin Conditions: Helps reduce inflammation and promote the healing of skin conditions like acne, rashes, and irritation.",
      "Low Energy and Fatigue: Supports energy production and overall vitality by providing essential nutrients and improving circulation.",
      "Weak Immune System: Boosts immune function, reducing the risk of infections and illnesses.",
      "Poor Circulation: Improves blood flow and promotes healthy circulation throughout the body.",
      "Constipation: Helps alleviate constipation by promoting healthy digestion and regular bowel movements.",
      "Skin Infections and Irritations: Soothes skin conditions such as eczema, acne, and rashes, promoting faster healing.",
      "Detoxification: Helps the body rid itself of toxins, supporting liver and kidney function.",
      "Fatigue and Low Energy: Enhances overall vitality and energy levels by improving digestion, nutrient absorption, and circulation.",
      "Weakened Immune System: Strengthens the immune system, helping the body fight off infections.",
      "Digestive Disorders: Helps alleviate symptoms of bloating, gas, and indigestion.",
      "Jomadel Awakee Body Cleaner provides a holistic approach to cleansing, detoxifying, and nourishing the body, promoting overall health and well-being.",
    ],
    image: colonCleanser,
    price: "$19.99",
  },

  {
    id: 8,
    name: "Jomadel Awakee Colon Cleanser (375ml Liquid)",
    tagline: "Start your day fresh, light, and energized!",
    description:
      "Start your day fresh, light, and energized! Give your body the natural reset it needs with Jomadel Awakee Colon Cleanser Liquid – a powerful herbal blend that cleanses, hydrates, and revitalizes your entire system.",
    benefits: [
      "Cleanses the colon and removes harmful toxins.",
      "Regulates blood pressure and supports heart health.",
      "Boosts immunity and strengthens the body’s defense.",
      "Helps manage arthritis, diabetes, and skin conditions.",
      "Promotes healthy digestion and better nutrient absorption.",
      "Hydrates and refreshes your body from the inside out.",
    ],
    indications: [
      "Toxin Build-Up: Supports the detoxification process, eliminating harmful substances from the body.",
      "Digestive Issues: Helps with indigestion, constipation, and bloating by promoting better digestion and nutrient absorption.",
      "Skin Conditions: Helps reduce inflammation and promote the healing of skin conditions like acne, rashes, and irritation.",
      "Low Energy and Fatigue: Supports energy production and overall vitality by providing essential nutrients and improving circulation.",
      "Weak Immune System: Boosts immune function, reducing the risk of infections and illnesses.",
      "Poor Circulation: Improves blood flow and promotes healthy circulation throughout the body.",
      "Constipation: Helps alleviate constipation by promoting healthy digestion and regular bowel movements.",
      "Skin Infections and Irritations: Soothes skin conditions such as eczema, acne, and rashes, promoting faster healing.",
      "Detoxification: Helps the body rid itself of toxins, supporting liver and kidney function.",
      "Fatigue and Low Energy: Enhances overall vitality and energy levels by improving digestion, nutrient absorption, and circulation.",
      "Weakened Immune System: Strengthens the immune system, helping the body fight off infections.",
      "Digestive Disorders: Helps alleviate symptoms of bloating, gas, and indigestion.",
      "Jomadel Awakee Body Cleaner provides a holistic approach to cleansing, detoxifying, and nourishing the body, promoting overall health and well-being.",
    ],
    image: awakeeCleanser375,
    price: "$19.99",
  },


  {
    id: 2,
    name: "Awakee Colon Cleanser Capsule",
    tagline: "Gentle on your system, tough on toxins!",
    description:
      "These herbal capsules keep your digestive system healthy while supporting overall wellness – especially for those managing blood sugar levels.",
    benefits: [
      "Cleanses the colon and eliminates waste buildup",
      "Supports healthy digestion and gut function",
      "Effective for diabetes patients – helps regulate blood sugar",
      "Boosts metabolism and energy levels",
      "Strengthens the immune system",
      "Promotes a healthy, toxin-free body",
    ],
    indications: [
      "Constipation: Promotes regular bowel movements and relieves constipation.",
      "Irritable Bowel Syndrome (IBS): Helps manage symptoms of IBS, such as bloating, cramps, and discomfort.",
      "Toxins Build-up: Detoxifies the colon, removing waste and accumulated toxins.",
      "Bloating and Gas: Alleviates excessive bloating and gas, promoting a flatter and more comfortable abdomen.",
      "Digestive Disorders: Supports overall digestive health and helps address minor digestive issues like indigestion and acid reflux.",
      "Poor Appetite: Improves appetite by promoting better digestion and nutrient absorption.",
      "Chronic Constipation: Provides relief from long-term constipation by promoting regular bowel movements.",
      "Toxic Overload: Helps in removing harmful substances that may cause health issues such as fatigue, skin problems, and irritability.",
      "Bloating and Gas Accumulation: Reduces discomfort caused by bloating and excessive gas.",
      "Digestive Irregularities: Improves digestion and can help alleviate symptoms of indigestion, nausea, or poor nutrient absorption.",
      "Inflammatory Bowel Disease (IBD): May offer supplementary support in managing inflammation in the colon.",
      "Weak Immune System: Supports the immune system by promoting a healthy gut microbiome and detoxification.",
      "Jomadel Awakee Colon Cleanser Capsule provides natural and effective support for colon health, detoxifying the body and improving overall digestive function.",
    ],
    image: colonCleanserCapsule,
    price: "$24.99",
  },
  {
    id: 4,
    name: "Men Enhancement Capsule",
    dosage: "2 Capsules twice daily",
    benefits: [
      "The unique blend of natural ingredients in Jomadel Awakee Men Enhancement Capsule offers the following benefits:",
      "Improves Sexual Performance: Enhances stamina, libido, and overall sexual health.",
      "Boosts Energy Levels: Combats fatigue and supports increased vitality.",
      "Supports Erectile Function (Pausinystalia Yohimbe): Improves blood flow to support stronger and longer-lasting erections.",
      "Enhances Mood and Reduces Stress (Turnera Diffusa): Alleviates anxiety and enhances overall well-being.",
      "Aids in Weight Management (Hoodia Gordoni): Helps suppress appetite and supports healthy weight control.",
      "Improves Circulation (Ginkgo Biloba): Enhances blood flow, benefiting not just sexual health but overall cardiovascular function.",
      "Boosts Testosterone Levels (Uvaria): Promotes hormonal balance and supports muscle growth and reproductive health.",
    ],
    indications: ["Erectile Dysfunction (ED)"],
    image: menEnhancement, // Replace with your image
    price: "$19.99",
  },
  {
    id: 5,
    name: "Awakee Eye Remedy Capsule",
    tagline: "See life clearly, now and for years to come!",
    description:
      "Protect your eyes and enhance your vision with this natural herbal blend designed to fight strain and age-related eye concerns.",
    benefits: [
      "Improves vision clarity and focus",
      "Relieves eye strain from screen time",
      "Supports retinal health and prevents deterioration",
      "Reduces inflammation and irritation",
      "Moisturizes and soothes dry eyes",
      "Helps with night vision and overall eye comfort",
    ],
    indications: [""],
    image: eyeRemedy,
    price: "$19.99",
  },
  {
    id: 6,
    name: "Awakee Prostate Remedy Capsule",
    description:
      "A powerful herbal formula that supports men’s health, comfort, and vitality as they age.",
    benefits: [
      "Supports prostate health and reduces swelling",
      "Improves urinary flow and comfort",
      "Reduces inflammation and discomfort",
      "Balances male hormones naturally",
      "Enhances energy and overall vitality",
      "Helps maintain sexual health and confidence",
    ],
    indications: [""],
    image: prostateRemedy,
    price: "$19.99",
  },
  {
    id: 7,
    name: "AWAKEE Libido Herbal Capsule",
    tagline: "Unleash the Power Within! 🔥",
    description:
      "Struggling with low energy, poor performance, or fading desire? It's time to reclaim your vitality and confidence — naturally.",
    benefits: [
      "Boost testosterone levels",
      "Enhance sexual stamina and drive",
      "Improve blood flow and performance",
      "Support overall male reproductive health",
    ],
    indications: [
      "Whether you're battling stress, fatigue, or age-related decline, this herbal solution helps restore your passion and performance — the natural way.",
    ],
    image: libidoHerbalCapsule,
    price: "$19.99",
  },
   {
    id: 3,
    name: "Awakee Herbal Soap",
    tagline: "Nature’s gentle touch for your skin!",
    description:
      "A luxurious herbal blend that cleanses, heals, and beautifies your skin naturally.",
    benefits: [
      "Deep cleanses dirt and impurities",
      "Hydrates and nourishes skin to prevent dryness",
      "Heals irritation and soothes inflammation",
      "Improves skin elasticity and natural glow",
      "Fights acne, eczema, and other skin infections",
      "Leaves a refreshing natural fragrance",
    ],
    indications: [
      "Acne and Pimples: Helps clear breakouts and reduce inflammation caused by acne.",
      "Dry and Dehydrated Skin: Provides deep moisture and prevents skin from becoming dry or flaky.",
      "Eczema and Psoriasis: Soothes itching and irritation associated with eczema and psoriasis, while promoting healing.",
      "Sensitive Skin: Gently cleanses and nourishes sensitive skin without causing irritation.",
      "Sunburns and Minor Burns: Soothes and cools sunburned or mildly burned skin, promoting faster recovery.",
      "Stretch Marks: Helps to improve skin elasticity and reduce the appearance of stretch marks.",
      "Uneven Skin Tone: Balances skin tone and brightens dull, uneven skin.",
      "Skin Rashes and Inflammation: Reduces irritation and inflammation, providing relief from rashes.",
      "Skin Infections: Helps reduce bacterial or fungal infections, soothing the affected area.",
      "Allergic Reactions: Alleviates itching and discomfort caused by skin allergies.",
      "Psoriasis: Relieves the symptoms of psoriasis, including itching, redness, and scaling.",
      "Dermatitis: Provides relief from the discomfort and inflammation caused by dermatitis.",
      "Dry Skin Conditions: Helps treat dry, flaky, or cracked skin by deeply hydrating and nourishing.",
      "Acne and Pimple Outbreaks: Controls oil production, reduces inflammation, and promotes clearer skin.",
      "Jomadel Awakee Herbal Soap offers a gentle yet effective way to care for the skin while helping treat a range of skin conditions and promoting overall skin health naturally.",
    ],
    image: herbalSoap,
    price: "$29.99",
  },
];

export const benefits = [
  {
    icon: SiTicktick,
    className: "text-4xl text-green-500 mb-4",
    title: "Efficient and Reliable Products",
    description: "We have products that are efficient and are reliable.",
  },
  {
    icon: GoLaw,
    className: "text-4xl text-green-500 mb-4",
    title: "Fair and Transparent System",
    description:
      "Our system is designed for fairness and transparency, eliminating manipulation from uplines or downlines.",
  },
  {
    icon: FaUnlock,
    className: "text-4xl text-green-500 mb-4",
    title: "Unlimited Earning Potential",
    description:
      "Even with just two people you can earn money for Life. You can earn in millions from people you don't even know.",
  },
  {
    icon: FaBusinessTime,
    className: "text-4xl text-green-500 mb-4",
    title: "Flexible Business Opportunity",
    description:
      "Build your business alongside your existing commitments, without disrupting your current lifestyle.",
  },
  {
    icon: FaBusinessTime,
    className: "text-4xl text-green-500 mb-4",
    title: "Multiple Income Streams",
    description:
      "Earn through direct referrals, pairing bonuses, matching bonuses, leadership bonuses, upgrade bonuses, special ranking incentives, product sales, and unilevel bonuses.",
  },
  {
    icon: FaBusinessTime,
    className: "text-4xl text-green-500 mb-4",
    title: "Easy to Understand & Implement",
    description:
      "Our system is designed for simplicity and ease of understanding.",
  },
];

export const values = [
  {
    icon: FaCrown,
    className: "text-2xl text-green-600 mr-2",
    title: "Faith-Driven Leadership:",
    description: " Guided by strong spiritual principles",
  },
  {
    icon: FaHandshake,
    className: "text-2xl text-green-600 mr-2",
    title: "Unwavering Integrity:",
    description: "Maintaining the highest ethical standards",
  },
  {
    icon: FaAward,
    className: "text-2xl text-green-600 mr-2",
    title: "Service Excellence:",
    description: "Putting customer wellness first.",
  },
  {
    icon: FaLeaf,
    className: "text-2xl text-green-600 mr-2",
    title: "Professional Development:",
    description: "Continuous learning and growth",
  },
  {
    icon: FaBalanceScale,
    className: "text-2xl text-green-600 mr-2",
    title: "Quality Assurance:",
    description: "Rigorous standards in every product.",
  },
  {
    icon: FaHandsHelping,
    className: "text-2xl text-green-600 mr-2",
    title: "Sustainable Impact:",
    description: "Creating lasting value for families and communities",
  },
];

export const objectives = [];

export const packages = [
  { name: "Basic", amount: "N13,000", pv: "1 Small Awake Colon Cleanser" },
  {
    name: "Silver",
    amount: "N29,000",
    pv: "1 Big & 1 Small Awake Colon Cleanser",
  },
  { name: "Gold", amount: "N81,000", pv: "" },
  { name: "PLATINUM", amount: "N185,000", pv: "" },
  { name: "DIAMOND", amount: "N419,000", pv: "" },
  { name: "VIP", amount: "N653,000", pv: "" },
];

export const waysToEarn = [
  {
    icon: FaShoppingCart,
    title: "Retail Profit",
    description:
      "All products are to be sold with 20% profit mark up. This implies that distributors can specialize in selling products and can still make huge amount of money. All our products are essential for treatment and management of various health challenges.",
  },
  {
    icon: FaUserPlus,
    title: "Referral Bonus",
    description: "Earn bonuses for referring new members to the company.",
  },
  {
    icon: FaUsers,
    title: "Pairing Bonus",
    description:
      "Earn bonuses when you have balanced growth in your downline teams.",
  },
  {
    icon: FaChartLine,
    title: "Upgrade Bonus",
    description:
      "Upgrade payment involves payment of the difference between distributor’s current package and desired package. The company pays distributors 28% of upgrade bonus regardless of entry package level .",
  },
  {
    icon: FaCoins,
    title: "Repurchase/Unilevel Bonus",
    description:
      "Earn from repurchases made by members in your downline. You can earn repurchase/unilevel bonus up to 14th generation depending on your package.",
  },
  {
    icon: FaTrophy,
    title: "Ranking, Awards and Incentives",
    description: "Achieve higher ranks and receive awards and incentives.",
  },
  {
    icon: FaChartLine,
    title: "Leadership Bonus",
    description:
      "The company is open to support leaders by rewarding them with bonuses based on monthly quarterly or annual performances. These include training and travel support and special cash rewards.",
  },
  {
    icon: FaGlobe,
    title: "Stockist Bonus",
    description: "Earn bonuses for managing a stockist center.",
  },
  {
    icon: FaChartLine,
    title: "Global Share Bonus",
    description:
      "A GLOBAL AMBASSADOR Who has accumulated over 15,000,000PV shall be entitled to a bonus of N100,000,000 and subsequent monthly share to infinity.",
  },
  {
    icon: FaGraduationCap,
    title: "Educational Development",
    description:
      "HWI is committed to a personal development of our distributors and we run weekly programme for all members. In addition any member with 10,000 PV on lesser leg will receive scholarship from Maximum Impact School of Management and Technology for Six months certificate course in ENTREPRENEURSHIP DEVELOPMENT.",
  },
];
