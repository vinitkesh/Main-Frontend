import Image from "next/image"



export default function Registration1({image, tittle}) {
    return (
        <div className=' bg-[#292929] max-w-[110rem] mx-auto '>
            <div
                className="bg-scroll bg-[#323232] flex flex-col lg:flex-row justify-center items-center"
                style={{
                    backgroundImage: `url('/background1.png')`,
                    height: "",
                    width: "100%",
                }}
            >
                <div className="mt-20 lg:mt-0">
                    <p className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-geist text-4xl lg:text-6xl font-bold leading-79">{tittle}</p>
                    <div className="flex justify-center items-center mt-2 lg:mt-5">
                        <p className=" text-xl"><span className="bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">Help others</span> <span className="bg-gradient-to-r from-blue-500 via-blue-100 to-amber-500 bg-clip-text text-transparent ">by Sharing Your Interview Experience</span></p>

                        <Image className="hidden lg:block mx-3 " src="Arrow.svg" width={130} height={26} alt="image"></Image>
                    </div>
                </div>
                <div>
                    <Image src={image} width={575} height={428} alt="image"></Image>
                </div>

            </div>
            <div className="w-screen h-2 bg-gradient-to-r from-blue-500 to-blue-100"></div>

            
        </div>
    )
}
