import Image from "next/image"
import Link from "next/link"
import Form from "./Form"

export default function GetInTouch() {
    return (
        <div className="bg-[#292929] pb-20  w-full min-h-screen flex justify-center items-center ">
            <div className="  w-[90%] lg:w-screen max-w-[110rem] mx-auto h-full flex flex-col items-center justify-center">
                <div className="mt-20 lg:w-[90%] lg:mx-auto">
                    <Image src="square.svg" width={190} height={190} alt="image"></Image>
                    <div className="relative bottom-32 left-4 lg:bottom-36 lg:left-16 z-20">
                        <h3 className="bg-gradient-to-r from-blue-500 to-sky-50 bg-clip-text text-transparent font-geist text-4xl lg:text-6xl font-bold leading-79">Get in Touch With Us</h3>
                        <div className="lg:flex">
                            <p className="text-gray-400 lg:text-lg">Drop Us a Line : <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">Reach Out and Get </span><span className="bg-gradient-to-r from-blue-100 to-amber-500 bg-clip-text text-transparent">Connected</span></p>
                            <Image className="m-2 lg:pt-3" src="Frame17.svg" width={190} height={190} alt="image"></Image>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col lg:flex-row bg-[#323232] w-[98%] lg:w-[85%] mx-auto justify-center items-center border border-[#5A5A5A] rounded-xl py-10">
                    <div className="flex flex-col w-full justify-center flex-1 lg:border-r lg:border-b-0 border-b border-[#5A5A5A]">
                        <p className="bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-100 bg-clip-text text-transparent font-semibold lg:text-4xl text-center pt-10 text-3xl">Connect With Us</p>

                        <div className="w-[90%] mx-auto">
                            <div className="flex items-center mt-10 gap-5">
                                <Image src="phone.svg" width={48} height={48} alt="image"></Image>
                                <div className="flex flex-col">
                                    <p className="text-sm text-[#A8A8A8]">Phone</p>
                                    <p className="text-xl text-[#E7E7E7]">Satya Prakash</p>
                                    <p className="text-[#A8A8A8]">+91 12345-67890</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-10 gap-5">
                                <Image src="email.svg" width={48} height={48} alt="image"></Image>
                                <div className="flex flex-col">
                                    <p className="text-sm text-[#A8A8A8]">Email</p>
                                    <p className="text-xl text-[#E7E7E7]">gdsc@nitc.ac.in</p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full pb-10">
                            <p className="bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-100 bg-clip-text text-transparent font-semibold lg:text-4xl text-center pt-10 text-3xl">Social</p>

                            <div className="flex w-[95%] mx-auto justify-center items-center gap-5 py-5">
                                <Link href='https://www.instagram.com/gdsc_nitc?igsh=b3hrdmgwanA4MDE4'><Image src="instagram.svg" width={48} height={48} alt="image"></Image></Link>
                                <Link href='https://www.linkedin.com/company/gdsc-nit-calicut/?originalSubdomain=in'><Image src="linkedin.svg" width={48} height={48} alt="image"></Image></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center flex-1 w-full py-10">
                        <p className="bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-100 bg-clip-text text-transparent font-semibold lg:text-4xl text-center text-3xl ">Let's Talk</p>

                        <Form />

                    </div>
                </div>

            </div>
        </div>
    )
}
