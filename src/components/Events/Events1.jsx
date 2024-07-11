import React from 'react';
import Image from 'next/image';
import styles from './Events.module.css';

export default function RegistrationForEvent({ image, title }) {
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
                                Help Others
                            </span>{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-blue-100 to-amber-500 bg-clip-text text-transparent">
                            by Sharing Your Interview Experience
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
                </div>
                <div className="mt-[87px] gap-4 flex justify-center items-center">
                    <Image
                        src={image}
                        width={328}
                        height={328}
                        alt="image"
                    />
                    <div className={styles.verticalTextBlock}>
                        <span className={styles.verticalText}>Upcoming</span>
                        <button className={styles.circleButton}>
                            <Image
                                src="/Arrow 7.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                    </div>
                    <div className={styles.verticalTextBlock}>
                        <span className={styles.verticalText}>Past</span>
                        <button className={styles.circleButton}>
                            <Image
                                src="/Arrow 7.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-100"></div>
        </div>
    );
}
