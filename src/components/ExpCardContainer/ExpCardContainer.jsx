import React from 'react'
import './ExpCardContainer.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard'



const ExpCardContainer = () => {

  const mockData = [
    {
      name: "Robert Downey Jr.",
      company: "GoldMan Sachs",
      diff: "Easy",
      CTC: "75LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },
    {
      name: "Robert Downey Jr.",
      company: "Accenture",
      diff: "Medium",
      CTC: "32LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },

    {
      name: "Robert Downey Jr.",
      company: "GoldMan Sachs",
      diff: "Hard",
      CTC: "75LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },
    {
      name: "Bill Clinton",
      company: "Google",
      diff: "Medium",
      CTC: "32LpA",
      Position1: "SWE",
      Position2: "LTC"
    },
    {
      name: "Robert Downey Jr.",
      company: "GoldMan Sachs",
      diff: "Easy",
      CTC: "75LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },
    {
      name: "Robert Downey Jr.",
      company: "Accenture",
      diff: "Medium",
      CTC: "32LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },

    {
      name: "Robert Downey Jr.",
      company: "GoldMan Sachs",
      diff: "Hard",
      CTC: "75LpA",
      Position1: "Software Engineer",
      Position2: "LTC"
    },
    {
      name: "Bill Clinton",
      company: "Google",
      diff: "Medium",
      CTC: "32LpA",
      Position1: "SWE",
      Position2: "LTC"
    }

  ]



  return (
    <div className='ExpCardContainer px-[100px] flex flex-row justify-between flex-wrap gap-[120px] ' >
      
      {mockData.map((data, index) => (
        <ExperienceCard key={index} 
            name={data.name} 
            company={data.company} 
            diff={data.diff} 
            CTC={data.CTC} 
            Position1={data.Position1} 
            Position2={data.Position2} />
      ))}

      
    </div>
  )
}

export default ExpCardContainer
