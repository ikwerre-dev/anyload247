import Header from '@/components/Header';
import Banner from '@/components/Banner';
import WhoWeAre from '@/components/WhoWeAre';
import LogisticsSolutions from '@/components/LogisticsSolutions';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ThreeClicksHero from '@/components/ThreeClicksHero';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <WhoWeAre />
      <LogisticsSolutions />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <ThreeClicksHero />
      <Gallery />
    </main>
  );
}