import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Intro } from "@/components/site/intro";
import { Solutions } from "@/components/site/solutions";
import { Audiences } from "@/components/site/audiences";
import { WhyUs } from "@/components/site/why-us";
import { Work } from "@/components/site/work";
import { Process } from "@/components/site/process";
import { Products } from "@/components/site/products";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { BackToTop } from "@/components/site/back-to-top";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Intro />
        <Solutions />
        <Audiences />
        <WhyUs />
        <Work />
        <Process />
        <Products />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
