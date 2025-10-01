import React from 'react';

const technologySolutionsData = [
  {
    title: 'Surveillance camera management system - AI integration',
    imageUrl: '/src/assets/Img/tech1.jpg', // Replace with actual image path
  },
  {
    title: 'Cyber security solutions',
    imageUrl: '/src/assets/Img/tech2.jpg',
  },
  {
    title: 'Natural language processing',
    imageUrl: '/src/assets/Img/tech3.jpg',
  },
  {
    title: 'Cloud computing',
    imageUrl: '/src/assets/Img/tech4.jpg',
  },
  {
    title: 'Custom software & platform',
    imageUrl: '/src/assets/Img/tech5.jpg',
  },
];

const partnersLogos = [
  { src: '/src/assets/Img/mobifone.png', alt: 'Mobifone' },
  { src: '/src/assets/Img/gtel.png', alt: 'Gtel' },
  { src: '/src/assets/Img/o-cau.png', alt: 'O Cau' },
  { src: '/src/assets/Img/untit.png', alt: 'UNTIT' },
  { src: '/src/assets/Img/n.png', alt: 'N' },
  { src: '/src/assets/Img/network-optix.png', alt: 'Network Optix' },
];

const clientsList = [
  [
    'Ministry of Public Security',
    'Ministry of Information and Communications',
    'Ministry of Foreign Affairs',
    'Ministry of Culture, Sports and Tourism',
    'Ministry of Industry and Trade',
    'Ministry of Finance',
    'Vietnam News Agency',
  ],
  [
    'Vietnam Education Publishing House',
    'Tre Publishing House',
    'Kim Dong Publishing House',
    'Literature Publishing House',
    'University of Labour and Social Affairs (ULSA)',
    'Vietnam Writers’ Association',
  ],
  [
    'People’s Committee of Thua Thien Hue',
    'People’s Committee of Quang Ninh',
    'People’s Committee of Hanoi',
    'Vietnam National University, Hanoi',
    'University of Social Sciences and Humani',
    'National Political Publishing House',
    'Vietnam Automation Association',
  ],
];

const TechnologySolutions = () => {
  return (
    <section className="my-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Technology Solutions</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {technologySolutionsData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[200px] h-64 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Product = () => {
  return (
    <section className="my-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product</h2>
      <p className="mb-4">
        PalmTek supplies specialized security equipment with advanced technology, ensuring high efficiency and reliability:
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-800">
        <li>Surveillance camera systems</li>
        <li>Long-range thermal cameras</li>
        <li>Narrow-gap inspection cameras</li>
        <li>Long-distance acoustic-optical listening devices</li>
        <li>Through-wall radar systems</li>
        <li>Anti-drone devices</li>
      </ul>
    </section>
  );
};

const PartnersClients = () => {
  return (
    <section className="my-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Our Partners and Clients</h2>
      <div className="flex space-x-6 mb-6 overflow-x-auto scrollbar-hide">
        {partnersLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 border rounded-lg p-2 bg-white shadow-md"
            style={{ minWidth: '120px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={logo.src} alt={logo.alt} className="max-h-10 object-contain" />
          </div>
        ))}
      </div>
      <div className="bg-white border rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
        {clientsList.map((column, colIndex) => (
          <ul key={colIndex} className="space-y-1">
            {column.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white text-3xl font-semibold"
        style={{
          backgroundImage: "url('/src/assets/Img/bannerpage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative z-10">Solutions</h1>
      </div>

      {/* Technology Solutions */}
      <TechnologySolutions />

      {/* Product Section */}
      <Product />

      {/* Partners and Clients */}
      <PartnersClients />
    </div>
  );
};

export default Solution;
