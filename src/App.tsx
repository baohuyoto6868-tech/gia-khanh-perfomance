/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { AboutAndServices } from './components/AboutAndServices';
import { RescueBrandsProducts } from './components/RescueBrandsProducts';
import { ProjectsMarqueeGallery } from './components/ProjectsMarqueeGallery';
import { ProcessAndNews } from './components/ProcessAndNews';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2A47]">
      {/* 0) TOP BAR & 1) NAVIGATION */}
      <HeaderNav />

      <main className="flex-1">
        {/* 2) HERO */}
        <HeroSection />

        {/* 3) ABOUT & 4) FEATURED SERVICES */}
        <AboutAndServices />

        {/* 5) RESCUE BANNER & 6) BRANDS & PARTNERS & 7) PRODUCTS */}
        <RescueBrandsProducts />

        {/* 8) FEATURED PROJECTS & 9) BRAND MARQUEE & 10) WORKSHOP GALLERY */}
        <ProjectsMarqueeGallery />

        {/* 11) PROCESS & 12) NEWS */}
        <ProcessAndNews />
      </main>

      {/* 13) FOOTER & FLOATING WIDGETS */}
      <FooterSection />
    </div>
  );
}
