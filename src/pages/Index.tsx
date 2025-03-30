
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SectorSolutions from '@/components/home/SectorSolutions';
import AboutPreview from '@/components/home/AboutPreview';
import Achievements from '@/components/home/Achievements';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SectorSolutions />
      <FeaturedProducts />
      <AboutPreview />
      <Achievements />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
