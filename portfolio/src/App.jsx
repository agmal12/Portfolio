import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Optional: Future sections can go here */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
