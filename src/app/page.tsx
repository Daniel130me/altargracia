import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { HowItWorks } from "@/components/site/how-it-works";
import { Testimonials } from "@/components/site/testimonials";
import { ContactSection } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
