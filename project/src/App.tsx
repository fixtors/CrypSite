import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PriceTicker from './components/PriceTicker';
import Partners from './components/Partners';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <Features />
          <PriceTicker />
          <Partners />
          <Faq />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;