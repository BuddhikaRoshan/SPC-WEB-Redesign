import Header from './components/Header';
import HeroNew from './components/HeroNew';
import WelcomeSection from './components/WelcomeSection';
import StatsBar from './components/StatsBAr';
import OurClients from './components/OurClients';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import LatestNews from './components/LatestNews';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <WelcomeSection />
      <StatsBar />
      <ServicesSection />
      <OurClients />
      <LatestNews />
      <Footer />

    </main>
  );
}
