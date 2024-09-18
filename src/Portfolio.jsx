import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <div className="mt-6 flex justify-center space-x-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Application Mobile</button>
          <button className="px-6 py-2 bg-gray-200 rounded-lg">Site Web</button>
          <button className="px-6 py-2 bg-gray-200 rounded-lg">Modélisation</button>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold">Projet</h3>
            <p className="mt-4 text-gray-700">Application pour pharmacie de garde</p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">Voir plus</button>
          </div>
          <div className="flex-1 flex justify-end items-start">
          <img src="/image projet.png" alt="" className="rounded-lg shadow-lg -mt-20 max-w-full h-auto"/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
