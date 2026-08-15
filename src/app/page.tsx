import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoDemo } from "@/components/VideoDemo";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { Benefits } from "@/components/Benefits";
import { Audience } from "@/components/Audience";
import { CaseStudy } from "@/components/CaseStudy";
import { TelegramCTA } from "@/components/TelegramCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <VideoDemo />
        <Services />
        <Pricing />
        <Comparison />
        <Benefits />
        <Audience />
        <CaseStudy />
        <TelegramCTA />
        <FAQ />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
