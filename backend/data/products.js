const products = [
  // ─── ELECTRONICS ───
  {
    id: "e1", category: "electronics", name: "Noise Buds Air Pro",
    price: 1299, originalPrice: 2499, rating: 4.3, reviews: 1842,
    stock: 45, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
    description: "True wireless earbuds with 40-hour total playback, active noise cancellation, and IPX5 water resistance.",
    badge: "Best Seller", highlights: ["ANC", "40hr battery", "IPX5", "Fast charge"]
  },
  {
    id: "e2", category: "electronics", name: "boAt Storm Smart Watch",
    price: 1999, originalPrice: 3999, rating: 4.1, reviews: 3210,
    stock: 30, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    description: "1.69\" HD display smartwatch with SpO2, heart rate monitor, 10-day battery, and 100+ sports modes.",
    badge: "Sale", highlights: ["SpO2 monitor", "10-day battery", "100+ modes", "IP67"]
  },
  {
    id: "e3", category: "electronics", name: "Portronics Power Bank 20K",
    price: 1499, originalPrice: 2200, rating: 4.5, reviews: 921,
    stock: 60, image: "https://images.unsplash.com/photo-1609592806596-4e5f5e9d5ef9?w=400&q=80",
    description: "20,000 mAh dual-port power bank with 22.5W fast charging and LED indicator display.",
    badge: null, highlights: ["20000 mAh", "22.5W PD", "Dual USB-C", "LED display"]
  },
  {
    id: "e4", category: "electronics", name: "Zebronics Mechanical Keyboard",
    price: 2199, originalPrice: 3500, rating: 4.2, reviews: 654,
    stock: 20, image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&q=80",
    description: "TKL mechanical keyboard with blue switches, RGB backlight, and detachable USB-C cable.",
    badge: "New", highlights: ["Blue switches", "RGB", "TKL layout", "USB-C"]
  },
  {
    id: "e5", category: "electronics", name: "Mi Portable Bluetooth Speaker",
    price: 999, originalPrice: 1799, rating: 4.0, reviews: 2110,
    stock: 80, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    description: "360° surround sound with 12-hour playback, IPX7 waterproof, and built-in mic.",
    badge: null, highlights: ["IPX7", "12hr play", "360° sound", "Built-in mic"]
  },

  // ─── FASHION ───
  {
    id: "f1", category: "fashion", name: "Urban Classic Hoodie",
    price: 799, originalPrice: 1499, rating: 4.4, reviews: 3400,
    stock: 100, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80",
    description: "Oversized French terry cotton hoodie with kangaroo pocket. Unisex fit, pre-shrunk.",
    badge: "Trending", highlights: ["100% cotton", "Oversized", "Unisex", "Pre-shrunk"]
  },
  {
    id: "f2", category: "fashion", name: "Slim Fit Chinos",
    price: 999, originalPrice: 1800, rating: 4.2, reviews: 1890,
    stock: 75, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
    description: "Stretch cotton chinos with slim fit, 4-way stretch, and wrinkle resistance. Perfect for office or casual.",
    badge: null, highlights: ["4-way stretch", "Wrinkle free", "Slim fit", "5 colors"]
  },
  {
    id: "f3", category: "fashion", name: "Puma Court Classic Sneakers",
    price: 3499, originalPrice: 4999, rating: 4.6, reviews: 5600,
    stock: 40, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    description: "Retro-inspired leather sneakers with cushioned insole and vulcanized sole. Timeless silhouette.",
    badge: "Best Seller", highlights: ["Leather upper", "Cushioned sole", "Unisex", "Sizes 6-12"]
  },
  {
    id: "f4", category: "fashion", name: "Linen Shirt Co-ord Set",
    price: 1299, originalPrice: 2200, rating: 4.3, reviews: 872,
    stock: 35, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80",
    description: "Breezy linen co-ord set perfect for Chennai summers. Relaxed fit, button-down shirt + trousers.",
    badge: "Summer Pick", highlights: ["100% linen", "Breathable", "Co-ord set", "Machine wash"]
  },
  {
    id: "f5", category: "fashion", name: "Titan Analog Watch",
    price: 2999, originalPrice: 4500, rating: 4.7, reviews: 7100,
    stock: 25, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80",
    description: "Minimalist stainless steel analog watch with sapphire-coated glass and leather strap. 5 ATM water resistant.",
    badge: null, highlights: ["Sapphire glass", "5 ATM", "Leather strap", "2yr warranty"]
  },

  // ─── FOOD & GROCERY ───
  {
    id: "g1", category: "food", name: "Millet Magic Breakfast Box",
    price: 349, originalPrice: 499, rating: 4.5, reviews: 1230,
    stock: 200, image: "https://images.unsplash.com/photo-1574985897898-32c03a5b41c0?w=400&q=80",
    description: "Assorted millet-based instant breakfast mix — ragi, foxtail, and bajra. No preservatives.",
    badge: "Organic", highlights: ["No preservatives", "High fiber", "Gluten-free", "3 varieties"],
    mfgDate: "2025-03-01", expiryDate: "2026-03-01"
  },
  {
    id: "g2", category: "food", name: "Cold Press Coconut Oil 1L",
    price: 399, originalPrice: 550, rating: 4.6, reviews: 3400,
    stock: 150, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    description: "Virgin cold-pressed coconut oil, unrefined. Ideal for cooking, hair, and skin. Glass bottle.",
    badge: "Pure", highlights: ["Cold pressed", "Unrefined", "Glass bottle", "1L"],
    mfgDate: "2025-04-15", expiryDate: "2026-04-15"
  },
  {
    id: "g3", category: "food", name: "Dark Roast Filter Coffee 250g",
    price: 299, originalPrice: 399, rating: 4.8, reviews: 6700,
    stock: 300, image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
    description: "Classic South Indian dark roast chicory blend. 80:20 coffee-chicory ratio. Perfect decoction.",
    badge: "Staff Pick", highlights: ["80:20 blend", "Dark roast", "Fine grind", "250g"],
    mfgDate: "2025-05-01", expiryDate: "2025-11-01"
  },
  {
    id: "g4", category: "food", name: "Organic Turmeric Powder 200g",
    price: 149, originalPrice: 220, rating: 4.4, reviews: 2100,
    stock: 400, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80",
    description: "Farm-fresh certified organic turmeric powder with high curcumin content. No artificial color.",
    badge: "Organic", highlights: ["High curcumin", "No additives", "Certified organic", "200g"],
    mfgDate: "2025-04-01", expiryDate: "2026-04-01"
  },
  {
    id: "g5", category: "food", name: "Mixed Nuts Trail Mix 500g",
    price: 599, originalPrice: 899, rating: 4.5, reviews: 1800,
    stock: 120, image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400&q=80",
    description: "Premium dry fruit mix: almonds, cashews, walnuts, pistachios, and raisins. Zero added sugar.",
    badge: "Healthy", highlights: ["Zero sugar", "500g", "5 varieties", "Resealable pack"],
    mfgDate: "2025-05-10", expiryDate: "2026-05-10"
  },

  // ─── BOOKS ───
  {
    id: "b1", category: "books", name: "Atomic Habits – James Clear",
    price: 399, originalPrice: 599, rating: 4.9, reviews: 48000,
    stock: 500, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    description: "The #1 New York Times bestseller on building good habits and breaking bad ones. Over 15M copies sold.",
    badge: "Bestseller", highlights: ["Paperback", "320 pages", "English", "Self-help"]
  },
  {
    id: "b2", category: "books", name: "The Lean Startup – Eric Ries",
    price: 449, originalPrice: 699, rating: 4.7, reviews: 21000,
    stock: 200, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    description: "How today's entrepreneurs use continuous innovation to build radically successful businesses.",
    badge: null, highlights: ["Paperback", "336 pages", "English", "Business"]
  },
  {
    id: "b3", category: "books", name: "Deep Work – Cal Newport",
    price: 349, originalPrice: 499, rating: 4.6, reviews: 14500,
    stock: 300, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    description: "Rules for focused success in a distracted world. Essential reading for knowledge workers.",
    badge: "Popular", highlights: ["Paperback", "304 pages", "English", "Productivity"]
  },
  {
    id: "b4", category: "books", name: "Sapiens – Yuval Noah Harari",
    price: 499, originalPrice: 799, rating: 4.8, reviews: 62000,
    stock: 400, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
    description: "A brief history of humankind. From ancient foragers to modern Homo sapiens.",
    badge: "Bestseller", highlights: ["Paperback", "512 pages", "English", "History"]
  },
  {
    id: "b5", category: "books", name: "Python Crash Course – Eric Matthes",
    price: 699, originalPrice: 999, rating: 4.7, reviews: 9800,
    stock: 150, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    description: "A hands-on, project-based introduction to programming. Perfect for beginners and students.",
    badge: "For Students", highlights: ["Paperback", "560 pages", "English", "Programming"]
  },

  // ─── HOME & KITCHEN ───
  {
    id: "h1", category: "home", name: "Prestige Induction Cooktop",
    price: 1599, originalPrice: 2500, rating: 4.4, reviews: 8900,
    stock: 55, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    description: "2000W induction cooktop with 7 preset cooking modes, auto shut-off, and child lock.",
    badge: "Top Pick", highlights: ["2000W", "7 modes", "Auto shut-off", "1yr warranty"]
  },
  {
    id: "h2", category: "home", name: "Milton Stainless Steel Lunch Box",
    price: 549, originalPrice: 899, rating: 4.5, reviews: 4200,
    stock: 200, image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    description: "3-tier stainless steel tiffin with leak-proof lids. Food-grade, microwave-safe containers.",
    badge: null, highlights: ["3-tier", "Leak-proof", "Food-grade steel", "BPA free"]
  },
  {
    id: "h3", category: "home", name: "Cello Plastic Storage Set (6pc)",
    price: 399, originalPrice: 699, rating: 4.2, reviews: 3100,
    stock: 180, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    description: "Airtight food storage containers in 3 sizes. BPA-free, dishwasher safe, stackable.",
    badge: "Value Pack", highlights: ["6 pieces", "Airtight", "BPA free", "Stackable"]
  },
  {
    id: "h4", category: "home", name: "Philips Air Fryer HD9200",
    price: 5499, originalPrice: 8999, rating: 4.6, reviews: 13200,
    stock: 30, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",
    description: "4.1L capacity Rapid Air technology air fryer. Up to 90% less fat. 7 preset cooking programs.",
    badge: "Hot Deal", highlights: ["4.1L", "Rapid Air", "90% less fat", "7 presets"]
  },
  {
    id: "h5", category: "home", name: "WD Iron Stand & Organizer",
    price: 699, originalPrice: 1200, rating: 4.1, reviews: 1560,
    stock: 90, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
    description: "Freestanding 3-tier iron stand with magazine rack, umbrella holder, and hooks. Powder coated.",
    badge: null, highlights: ["3-tier", "Powder coated", "Multi-use", "Easy assemble"]
  }
];

module.exports = products;