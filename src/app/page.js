import About from "@/components/About/About";
import Form1 from "@/components/Form1/Form1";
import Registration from "@/components/Registration/Registration";

export default function Home() {
  return (
    <main>
      <div>Hello GDSC</div>
      <Registration image={"Desk.svg"} tittle={"Insights that Matters"} />
      <Form1 />
      <About />
    </main>
  );
}
