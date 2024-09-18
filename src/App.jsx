import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Experiences from './Experiences';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}

export default App;
