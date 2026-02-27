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
          {/* Footer Experience: Roll over animation */}
          <section className="relative">
            {/* Section 1: Contact (Stays pinned) */}
            <div className="sticky top-0 h-screen">
              <FooterContact />
            </div>

            {/* Section 2: Footer Content (Rolls on top) */}
            <div className="relative z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
              <FooterContent />
            </div>
          </section>
        </main>
      </div>
    </SmoothScroll>
  );
}




