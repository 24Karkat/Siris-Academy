import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { StatBar } from "@/components/StatBar";
import { Courses } from "@/components/Courses";
import { TheTape } from "@/components/TheTape";
import { Playbook } from "@/components/Playbook";
import { TheFloor } from "@/components/TheFloor";
import { Pricing } from "@/components/Pricing";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Ticker />
      <Hero />
      <StatBar />
      <Courses />
      <TheTape />
      <Playbook />
      <TheFloor />
      <Pricing />
      <CtaBanner />
      <Footer />
    </>
  );
}
