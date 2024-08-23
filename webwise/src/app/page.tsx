import { Caroseul } from '@/components/home/caroseul';
import { Contact } from '@/components/home/contact';
import { Method } from '@/components/home/method';
import { Reunion } from '@/components/home/reunion';
import SpecialistSection from '@/components/home/specialistSection';
import { WhyUs } from '@/components/home/whyus';
import { Footer } from '@/components/shared/footer';
import { Menu } from '@/components/shared/menu';
import React from 'react';

export default function Home() {
  return (
  <div>
    <Menu />
    <Contact />
    <Method />
    <Caroseul />
    <Reunion />
    <SpecialistSection />
    <WhyUs />
    <Footer />
  </div>
  );
}
