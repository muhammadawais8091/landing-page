'use client'

import { useEffect } from "react";
import { Communication } from "@/components/Communication";
import { Hero } from "@/components/Hero/Hero";
import { OnsiteSolutions } from "@/components/OnsiteSolutions";
import { StepsApproach } from "@/components/StepsApproach";
import { VideoEssential } from "@/components/VideoEssential";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    const script = document.createElement('script');
    script.defer = true;
    script.id = 'caba-pop-up-widget-script';
    script.setAttribute('caba-widget-id', '9bb3b025-d4ae-4127-af42-a4fe476eb4a1');
    script.setAttribute('caba-brand-id', '3883b6f8-22bc-4de4-b5aa-2cbc5eb74682');
    script.setAttribute('caba-x-api-key', '8e20368f5ced0652e49e22ceb1d017d2a0f9417332069a063e68a49f398417f8');
    script.src = 'https://d20tafw4qgu3vp.cloudfront.net/pop-up-widget/build/bundle.js';

    // Check if the script element already exists to avoid duplication
    if (!document.getElementById('caba-pop-up-widget-script')) {
      document.body.appendChild(script);
    }

    // Clean up the script when the component unmounts
    return () => {
      if (document.getElementById('caba-pop-up-widget-script')) {
        document.getElementById('caba-pop-up-widget-script')!.remove();
      }
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />

      <VideoEssential />

      <StepsApproach />

      <div className="pt-[20px]">
        <OnsiteSolutions />
      </div>

      {/* <PricePlan /> */}

      <Communication />
      
      <div id="caba-pop-up-widget"></div>
    </main>
  )
}

export default Home