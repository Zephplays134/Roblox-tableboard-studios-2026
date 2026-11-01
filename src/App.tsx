import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatusGrid } from './components/StatusGrid';
import { UpdatesSection } from './components/UpdatesSection';
import { MajorSystemsSection } from './components/MajorSystemsSection';
import { ElevatorSection } from './components/ElevatorSection';
import { Footer } from './components/Footer';
import { ElevatorChatbot } from './components/ElevatorChatbot';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatusGrid />
        <UpdatesSection />
        <MajorSystemsSection />
        <ElevatorSection />
      </main>
      <Footer />
      <ElevatorChatbot />
    </>
  );
};

export default App;
