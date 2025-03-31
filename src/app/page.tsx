import Header from '@/components/Header';
import Banner from '@/components/Banner';
import WhoWeAre from '@/components/WhoWeAre';
import LogisticsSolutions from '@/components/LogisticsSolutions';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

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
    </main>
  );
}