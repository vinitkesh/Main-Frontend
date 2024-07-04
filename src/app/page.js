import ExpCardContainer from "@/components/ExpCardContainer/ExpCardContainer";

import ExpandedExpCard from "@/components/ExpandedExpCard/ExpandedExpCard";
import FeaturedExperience from "@/components/FeaturedExperience/FeaturedExperience";

export default function Home() {
  return (
    <main>
      <FeaturedExperience />
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
      <ExpCardContainer />

    </main>
  );
}
 