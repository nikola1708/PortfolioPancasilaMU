import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WeeklyModules } from './components/WeeklyModules';
import { Showcase } from './components/Showcase';
import { FinalReflection } from './components/FinalReflection';
import {Footer} from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <WeeklyModules />
      <Showcase />
      <FinalReflection />
      <Footer />
    </div>
  );
}
