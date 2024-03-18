import Image from "next/image"
import Card from "@/components/About/Card"


const title = ["What We Do","Our Mission","How We Achieve"]
const number = 1
const description = ["GDSC NIT Calicut is a vibrant community where students come together to enhance their technical skills.",

"GDSC NIT Calicut is a vibrant community where students come together to enhance their technical skills.",

"We aim to achieve this by organizing various events, workshops, hackathons, and speaker sessions that focus on cutting-edge technologies such as Android app and Web development, machine learning, cloud computing, and more."
]
const content1 = [
    "Connect, Collaborate, Create",
    "Innovation Through Projects.",
    "Resource Sharing",
    "Mastery Through Workshops"
]

const content2 = [
    "To empower students to become proficient developers, foster innovation, and contribute to the tech community."
]

export default function About() {
    return (
        <div className="bg-[#292929] pb-20 min-h-screen w-full h-full flex justify-center items-center ">
            <div className="  w-[90%] lg:w-screen max-w-[110rem] mx-auto h-full flex flex-col items-center justify-center">
                <div className="mt-20 lg:w-[90%] lg:mx-auto"> 
                    <Image src="Group6.svg" width={190} height={190} alt="image"></Image>
                    <div className="relative bottom-32 left-4 lg:bottom-36 lg:left-16 z-20">
                        <h3 className="bg-gradient-to-r from-blue-500 to-sky-50 bg-clip-text text-transparent font-geist text-4xl lg:text-6xl font-bold leading-79">Get To Know About Us</h3>
                        <div className="lg:flex">
                            <p className="text-gray-400 lg:text-lg">Beyond the Name : <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">Discover What </span><span className="bg-gradient-to-r from-blue-100 to-amber-500 bg-clip-text text-transparent">Makes Us Tick</span></p>
                            <Image className="m-2 lg:pt-3" src="Frame17.svg" width={190} height={190} alt="image"></Image>
                        </div>
                    </div>

                </div>


                <div className="flex  lg:w-[75%] flex-col lg:flex-row mx-auto justify-center items-center gap-10 ">
                        <Card title={title[0]} number={number} description={description[0]} content={content1}/>
                        <Card title={title[1]} number={number+1} description={description[1]} content={content2} arrow={true}/>
                        <Card title={title[2]} number={number+2} description={description[2]} content={[]}/>
                </div>
                        {/* <Image className="m-2 lg:pt-3 relative bottom-[30rem] xl:bottom-[25rem] left-[13rem]" src="vector3.svg" width={300} height={160} alt="image"></Image>
                        <Image className="m-2 lg:pt-3 relative bottom-36 right-56" src="vector2.svg" width={300} height={160} alt="image"></Image> */}

            </div>
        </div>
    )
}



