'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SmoothScroll from '@/components/SmoothScroll';
import VideoBackground from '@/components/VideoBackground';
import OurWork from '@/components/OurWork';
import OurServices from '@/components/OurServices';
import Process from '@/components/Process';
import Team from '@/components/Team';
import FooterContact from '@/components/FooterContact';
import FooterContent from '@/components/FooterContent';
import { motion, AnimatePresence, Variants } from 'framer-motion'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      ease: 'easeOut',
      duration: 0.5,
    },
  }),
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black">
        <VideoBackground />
        <Navigation />
        <main>
          <Hero />
          <OurWork />
          <OurServices />
          <Process />
          <Team />
          {/* Footer Experience: A professional slide-over reveal */}
          <section className="relative bg-[#161719]">
            {/* Section 1: Contact (Natural scroll) */}
            <motion.h2
              className="max-w-[1400px] mx-auto mb-4 text-[60px] md:text-[80px] xl:text-[100px]
               font-semibold tracking-[-0.04em] text-[#FA6F45]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Let’s Talk<span className="text-[#FA6F45]">.</span>
            </motion.h2>
            <div className="sticky top-0 h-[150vh] bg-[#161719]">
              <FooterContact />
            </div>

            {/* Section 2: Footer Content (Reveals or Scrolls normally) */}
            <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
              <FooterContent />
            </div>
          </section>
        </main>
      </div>
    </SmoothScroll>
  );
}




