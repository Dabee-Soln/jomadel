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
    title: "Transforming Lives Through Health and Wealth",
    description: "A wellness and entrepreneurship ecosystem built around healthier living, opportunity and lasting impact.",
    button: "Get Started",
    link: "http://www.jomadel.com/default.aspx",
  },
  {
    image: slide2,
    title: "Wellness Meets Opportunity",
    description: "Build healthier habits while exploring an empowering path to entrepreneurship and sustainable income.",
    button: "Learn About Jomadel",
    link: "/about",
  },
  {
    image: slide3,
    title: "Build Health. Create Wealth. Leave a Legacy.",
    description: "Explore Jomadel's business packages, income streams, awards and recognition structure.",
    button: "Explore Compensation Plan",
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
    icon: FaBalanceScale,
    className: "text-3xl text-green-600",
    title: "Integrity",
    description: "Trust is our foundation; we do what is right transparently.",
  },
  {
    icon: FaCrown,
    className: "text-3xl text-green-600",
    title: "Leadership",
    description: "We lead by example, set standards and guide the path forward.",
  },
  {
    icon: FaChartLine,
    className: "text-3xl text-green-600",
    title: "Innovation",
    description: "We embrace change and pioneer new solutions that empower success.",
  },
  {
    icon: FaAward,
    className: "text-3xl text-green-600",
    title: "Quality",
    description: "Excellence defines how we approach our products and services.",
  },
  {
    icon: FaUsers,
    className: "text-3xl text-green-600",
    title: "Culture",
    description: "Our diverse, collaborative culture helps us achieve extraordinary outcomes together.",
  },
];

export const objectives = [];

export const packages = [
  { name: "Basic", amount: "₦13,000", pv: "7 PV" },
  { name: "Silver", amount: "₦29,000", pv: "20 PV" },
  { name: "Gold", amount: "₦81,000", pv: "60 PV" },
  { name: "Platinum", amount: "₦185,000", pv: "140 PV" },
  { name: "Diamond", amount: "₦419,000", pv: "320 PV" },
  { name: "VIP", amount: "₦653,000", pv: "500 PV" },
];

export const waysToEarn = [
  { icon: FaShoppingCart, title: "Retail Profit", description: "Earn up to 20% retail profit by purchasing at wholesale rates and selling at retail prices." },
  { icon: FaUserPlus, title: "Direct Referral Bonus", description: "Earn 28% based on PV when you directly refer a new member." },
  { icon: FaUsers, title: "Indirect Referral Bonus", description: "Earn across qualifying generations, from the 2nd through the 8th generation, based on package eligibility." },
  { icon: FaChartLine, title: "Direct Upgrade Bonus", description: "Earn 28% when directly referred partners upgrade their packages to higher tiers." },
  { icon: FaChartLine, title: "Indirect Upgrade Bonus", description: "Earn up to 10% on qualifying package upgrades in your success line through the 8th generation." },
  { icon: FaUsers, title: "Binary Pairing Bonus", description: "Earn from matched PV on your left and right binary legs at package-based rates from 8% to 17%." },
  { icon: FaCoins, title: "Personal Repurchase Bonus", description: "Earn up to 25% PV on qualifying personal product repurchases." },
  { icon: FaCoins, title: "Unilevel Bonus", description: "Earn monthly commissions from team repurchases, up to 30% and as deep as 15 generations for qualifying packages." },
  { icon: FaTrophy, title: "Rank Awards", description: "Progress through qualifying ranks and unlock cash, product, technology, travel, vehicle and property rewards." },
  { icon: FaAward, title: "Achievers’ Award Matching", description: "Qualifying members participate in matching rewards connected to award achievements within their success lines." },
  { icon: FaBusinessTime, title: "Stockist / Agency", description: "Operate at State, Area or Community Stockist level and earn qualifying PV from centre turnover." },
  { icon: FaChartLine, title: "Stockist PV", description: "Stockist referrals contribute specified Point Value toward rank qualification." },
  { icon: FaShoppingCart, title: "Stockist Gift", description: "Qualifying State, Area and Community Stockists receive product-value gifts." },
  { icon: FaUserPlus, title: "Stockist Referral", description: "Earn cash referral bonuses for qualifying State, Area and Community Stockist referrals." },
  { icon: FaGlobe, title: "Global Profit Sharing", description: "Qualified Ambassador-rank leaders participate in a pool funded with 2% of company profit." },
  { icon: FaHandsHelping, title: "Community Support Funds", description: "Jomadel allocates 2% of company profits to a fund intended to give back to society." },
];
