export const products = [
    {
      id: 1,
      name: 'Recycled Plastic Furniture',
      price: 450,
      sustainabilityRating: 4.8,
      recycledContent: 92,
      location: 'Berlin, DE',
      image: '/images/products/furniture.jpg',
      categories: ['home', 'plastic']
    },
    {
      id: 2,
      name: 'Refurbished Laptop',
      price: 1200,
      sustainabilityRating: 4.5,
      recycledContent: 85,
      location: 'Lisbon, PT',
      image: '/images/products/laptop.jpg',
      categories: ['electronics', 'refurbished']
    }
    // Add more products...
  ];
  
  export const categories = [
    { id: 'plastic', name: 'Recycled Plastics', icon: '♻️' },
    { id: 'electronics', name: 'Refurbished Tech', icon: '💻' },
    { id: 'textiles', name: 'Sustainable Fashion', icon: '👕' }
  ];