import LearnFromExperiences from "@/components/Learn_from_Experiences/LearnFromExperiences";
import ExpandedExpCard from "@/components/ExpandedExpCard/ExpandedExpCard";
import FeaturedExperience from "@/components/FeaturedExperience/FeaturedExperience";
// import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <LearnFromExperiences image={"Frame 91.svg"} title={"Learn from Experiences"} button={"Share Your Own"}/>
      <ExpandedExpCard 
        Name = {"Robert DJ"}
        CTC = {"75LpA"}
        Position1 = {"Software Engineer"}
        Position2 = {"LTC"}
        twitter={"https://twitter.com"}
        linkedin={"https://linkedin.com"}
        insta={"https://instagram.com"}
        email={"mailto:something@gmail.com"}
/>
      <FeaturedExperience/>
      {/* <Footer/> */}
    </main>
  );
}
 