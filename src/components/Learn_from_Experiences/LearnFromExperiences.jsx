import React from 'react';
import Image from 'next/image';
import styles from './LearnFromExperiences.module.css';

export default function LearnFromExperiences({ image, title, button }) {
    return (
        <div className="bg-[#292929] mx-auto overflow-hidden">
            <div
                className="bg-scroll bg-[#323232] flex flex-col lg:flex-row justify-center items-center"
                style={{
                    backgroundImage: `url('/background1.png')`,
                    width: "100vw",
                }}
            >
                <div className="mt-20 lg:mt-0 ml-5">
                    <p className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-geist text-4xl lg:text-6xl font-bold leading-79 whitespace-nowrap">
                        {title}
                    </p>
                    <div className="flex justify-center items-center mt-2 lg:mt-5">
                        <p className="text-xl">
                            <span className="bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
                                Prepare to Impress
                            </span>{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-blue-100 to-amber-500 bg-clip-text text-transparent">
                                Tips from Past Interviewees
                            </span>
                        </p>
                        <Image
                            className="hidden lg:block flex-grow mx-3"
                            src="/Group 76.svg"
                            width={136}
                            height={26}
                            alt="arrow"
                        />
                    </div>
                    <a href="#">
                    <button className="h-[62px] px-[24px] py-[16px] gap-[16px] rounded-[40px] bg-[#323232] shadow-[0_0_8px_0_#ffffff4d] text-white text-[1.125rem] font-bold flex justify-center items-center mt-[55px] transition-transform duration-300 hover:scale-95 whitespace-nowrap">
                        {button}
                        <Image
                            className="ml-2"
                            src="/Arrow 8.svg"
                            width={20}
                            height={2}
                            alt="arrow"
                        />
                    </button>
                </a>
                </div>
                <div className="mt-[87px] gap-4 flex justify-center items-center">
                    <Image
                        src={image}
                        width={328}
                        height={328}
                        alt="image"
                    />
                    <div className={styles.verticalTextBlock}>
                        <button className={styles.circleButton}>
                            <Image
                                src="/Arrow 7.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        <span className={styles.verticalText}>Product Based</span>
                    </div>
                    <div className={styles.verticalTextBlock}>
                        <button className={styles.circleButton}>
                            <Image
                                src="/Arrow 7.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        <span className={styles.verticalText}>Service Based</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-100"></div>
        </div>
    );
}
