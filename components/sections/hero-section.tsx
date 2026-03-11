import Image from 'next/image';
import { Navbar } from '@/components/ui/navbar';

export function HeroSection() {
  return (
    <section className="hero" id="about">
      <Navbar />
      <div className="container hero-content">
        <Image src="/ebf-logo-light.svg" alt="EBF logo" width={280} height={88} />
        <p className="eyebrow">ESCP Bachelor&apos;s Finance Society</p>
        <h1>Building the next generation of finance leaders.</h1>
        <p>
          EBF was created to connect ambitious students with real financial markets, elite professionals,
          and practical learning experiences through events, investment activity, and community initiatives.
        </p>
        <div className="cta-row">
          <a href="#events" className="button primary">Explore events</a>
          <a href="https://www.instagram.com/escpbscfinance/" className="button ghost" target="_blank">Instagram</a>
        </div>
      </div>
    </section>
  );
}
