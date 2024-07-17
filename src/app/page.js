
import About from "@/components/About/About";
import Form1 from "@/components/Form1/Form1";
import Form2 from "@/components/Form2/Form2";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import RegistrationHero from "@/components/RegistrationHero/RegistrationHero";
import HeroSection from "@/components/HeroSection/HeroSection";

import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ExpandedExpCard from "@/components/ExpandedExpCard/ExpandedExpCard";

import ImageSwiper from "@/components/ImageSwiper/ImageSwiper";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageSwiper />
      <RegistrationHero image={"Desk.svg"} tittle={"Insights that Matters"} /> 
      <Form1 />
      <Form2 />
      <About />
      <GetInTouch />
      <ExperienceCard
        name={"Name"}
        company={"Company"}
        diff={"Easy"}
        CTC={"CTC"}
        Position1={"Position1"}
        Position2={"Position2"}
      /> 

      <ExpandedExpCard
        Name={"Name"}
        CTC={"CTC"}
        Position1={"Position1"}
        Position2={"Position2"}
        diff={"Easy"}
        insta={"#"}
        twitter={"#"}
        Linkedin={"#"}
        email={"#"}
      />

        

    </main>
  );
}
