import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScheduleInterview from './components/ScheduleInterview';

export default function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');

  const renderPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <ScheduleInterview onBack={() => setCurrentPage('portfolio')} />;
      default:
        return (
          <>
            <Header onScheduleClick={() => setCurrentPage('schedule')} />
            <main className="bg-white">
              <Hero onScheduleClick={() => setCurrentPage('schedule')} />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  );
}