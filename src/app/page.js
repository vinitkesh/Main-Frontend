import About from "@/components/About/About";
import Form1 from "@/components/Form1/Form1";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import RegistrationHero from "@/components/RegistrationHero/RegistrationHero";

export default function Home() {
  return (
    <main>
      <div>Hello GDSC</div>
      <RegistrationHero image={"Desk.svg"} tittle={"Insights that Matters"} />
      <Form1 />
      <About />
      <GetInTouch/>
    </main>
  );
}
