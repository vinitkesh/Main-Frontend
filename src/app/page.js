import Image from "next/image";

import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard";

export default function Home() {
  return (
    <main>
      <br/>
      <ExperienceCard  name = "Robert Downey Jr." 
                      ctcNum= "75 LpA" 
                      positionData = "Lead"
                      positionData2 = "Senior Lead"
                      image = "https://source.unsplash.com/random/200x200"
                      companyImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png"/>
      <br/>
      <ExperienceCard  name = "Robert Downey Jr." 
                      ctcNum= "75 LpA" 
                      positionData = "Lead"
                      positionData2 = "Senior Lead"
                      image = "https://source.unsplash.com/random/200x200"
                      companyImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png"/>
      
    </main>
  );
}
