
import About from "@/components/About/About";
import Form1 from "@/components/Form1/Form1";
import Form2 from "@/components/Form2/Form2";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import RegistrationHero from "@/components/RegistrationHero/RegistrationHero";
import HeroSection from "@/components/HeroSection/HeroSection";
import Gallery from "@/components/Gallery/Gallery";
import Slider from "@/components/Slider/Slider";
import ImageSwiper from "@/components/ImageSwiper/ImageSwiper";
export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Gallery /> */}
      {/* <Slider /> */}
      <ImageSwiper />
      <RegistrationHero image={"Desk.svg"} tittle={"Insights that Matters"} />
      <Form1 />
      <Form2 />
      <About />
      <GetInTouch />

    </main>
  );
}
