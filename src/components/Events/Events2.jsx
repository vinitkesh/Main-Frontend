import Image from "next/image";
import styles from "./Events.module.css";

export default function RegistrationForEvent({ title }) {
    return (
        <div className="bg-[#292929] mx-auto h-[52.5vh]"> {/* Adjusted height */}
            <div
                className="bg-scroll bg-[#323232] flex flex-col lg:flex-row justify-start items-start" 
                style={{
                    backgroundImage: `url('/background1.png')`,
                    width: "100vw",
                    height: "71.8vh",
                    paddingTop: "15vh", 
                    paddingLeft: "3vw"
                }}
            >
                <div className="mt-5 lg:mt-0 ml-5">
                    <p className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-geist text-4xl lg:text-6xl font-bold leading-79 whitespace-nowrap">
                        {title}
                    </p>
                    <div className="flex justify-center items-center mt-2 lg:mt-5">
                        <p className="text-xl">
                            <span className="bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">Help others</span>{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-blue-100 to-amber-500 bg-clip-text text-transparent">by Sharing Your Interview Experience</span>
                        </p>
                        <Image className="hidden lg:block flex-grow mx-3" src="Arrow.svg" width={130} height={26} alt="image" />
                    </div>
                </div>
                <div className="mt-10 gap-4 flex justify-center items-center">
                    <div className={styles.placeholderDiv}></div>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-100"></div>
        </div>
    );
}
