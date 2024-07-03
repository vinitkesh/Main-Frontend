
import About from "@/components/About/About";
import Form1 from "@/components/Form1/Form1";
import Form2 from "@/components/Form2/Form2";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import RegistrationHero from "@/components/RegistrationHero/RegistrationHero";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RegistrationHero image={"Desk.svg"} tittle={"Insights that Matters"} />
      <Form1 />
      <Form2 />
      <About />
      <GetInTouch />

    </main>
  );
}
