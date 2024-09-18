import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">Envoyez-moi un message</p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-6 space-y-4">
            <li>📞 +221 77 000 85 00</li>
            <li>📧 kenzak00@gmail.com</li> {/* Correction de l'email */}
            <li>📍 Cité Bulders, Villa N° 69 Est DAKAR</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-6">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Prénom et Nom</label>
              <input type="text" id="name" className="w-full mt-2 px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">E-mail</label>
              <input type="email" id="email" className="w-full mt-2 px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" rows="5" className="w-full mt-2 px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
