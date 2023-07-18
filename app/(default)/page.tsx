export const metadata = {
  title: 'IE Tecnologia',
  description: 'Page description',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Accordion from '@/components/accordion';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      <Accordion />
    </>
  );
}
