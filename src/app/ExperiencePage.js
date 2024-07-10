import LearnFromExperiences from "@/components/Learn_from_Experiences/LearnFromExperiences";
import ExpCardContainer from "@/components/ExpCardContainer/ExpCardContainer";
import SearchFilterBar from "@/components/BodyExpPage/body";
// import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <LearnFromExperiences image={"Frame 91.svg"} title={"Learn from Experiences"} button={"Share Your Own Experiences"}/>
      <SearchFilterBar/>
      <ExpCardContainer 
        Name = {"Robert DJ"}
        CTC = {"75LpA"}
        Position1 = {"Software Engineer"}
        Position2 = {"LTC"}
        twitter={"https://twitter.com"}
        linkedin={"https://linkedin.com"}
        insta={"https://instagram.com"}
        email={"mailto:something@gmail.com"}
/>
      {/* <Footer/> */}
    </main>
  );
}
 