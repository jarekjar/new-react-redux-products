const products = [
  {
    id: 1,
    title: "Secure Glass Bolts",
    slug: "secure-glass-bolts",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 2,
    title: "Big Glass Shears",
    slug: "bg-glass-shears",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 3,
    title: "Reusable Glass Components",
    slug: "glass-reusable-components",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 4,
    title: "Glass Environment Cleaner Spray",
    slug: "glass-environment-cleaner-spray",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 5,
    title: "Type 3 Glass Panel",
    slug: "type-3-glass-panel",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 6,
    title: "Glass Flux Creation",
    slug: "glass-flux",
    businessId: 1,
    category: "Glass"
  },
  {
    id: 7,
    title: "Book: Deliverying Building Materials",
    slug: "delivering-building-materials",
    businessId: 1,
    category: "Building"
  },
  {
    id: 8,
    title: "Glass Car Windshield",
    slug: "glass-car-windshield",
    businessId: 1,
    category: "Auto"
  },
  {
    id: 9,
    title: "Steel Beams",
    slug: "steel-beams",
    businessId: 1,
    category: "Manufacturing"
  },
  {
    id: 10,
    title: "Wood Planks",
    slug: "wood-planks",
    businessId: 1,
    category: "Consumer"
  }
];

const businesses = [
  { id: 1, name: "CRL" },
  { id: 2, name: "C R H" },
  { id: 3, name: "Dunlop" }
];

const newProduct = {
  id: null,
  title: "",
  businessId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProduct,
  products,
  businesses
};
