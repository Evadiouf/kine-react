import React from 'react';

const Hero = () => {
  return (
    <section className="text-left py-16 bg-gray-50">
      <h1 className="text-4xl font-bold">Fatou Kiné Ndiaye</h1>
      <p className="text-xl mt-4">Full Stack Developper</p>
      
      <div className="text-right">
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg">CONTACTEZ-MOI</button>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-bold">A propos</h1>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo <br />
          ullamco laboris exercitation ullamco laboris labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat <br />
          laboris exercitation ullamco laboris
        </p>
    
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Télécharger mon CV</button>
     
        <div className="flex-1 flex justify-end items-start">
          <img src="/image projet.png" alt="" className="rounded-lg shadow-lg -mt-20 max-w-full h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
