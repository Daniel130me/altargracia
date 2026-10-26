import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Intro } from "@/components/site/intro";
import { Stats } from "@/components/site/stats";
import { Solutions } from "@/components/site/solutions";
import { Audiences } from "@/components/site/audiences";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Products } from "@/components/site/products";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Intro />
      <Stats />
      <Solutions />
      <Audiences />
      <WhyUs />
      <Process />
      <Products />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}
