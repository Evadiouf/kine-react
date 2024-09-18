import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">WP</div>
      <nav>
        <ul className="flex space-x-6">
          <li>Accueil</li>
          <li>A propos</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Expériences</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;