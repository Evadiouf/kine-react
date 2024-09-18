import React from 'react';

const services = [
  { title: "Développement Application", description: "Lorem ipsum dolor sit amet..." },
  { title: "Programmation langages", description: "Lorem ipsum dolor sit amet..." },
  { title: "Modélisation", description: "Lorem ipsum dolor sit amet..." },
  { title: "Création vidéo", description: "Lorem ipsum dolor sit amet..." },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;