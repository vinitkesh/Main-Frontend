"use client"

import Image from "next/image";
import StarRating from "./Starrating";
import { useState } from "react";
import { useForm } from 'react-hook-form';


const formFields = [
    {
        label: "Name",
        name: "name",   
        type: "text",
        placeholder: "Enter your name",
    },
    {
        label: "Roll No.",
        name: "rollno",
        type: "text",
        placeholder: "Enter your name",
    },
    {
        label: "Email Id",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
    },
    {
        label: "Linkedin Profile",
        name: "linkedin",
        type: "text",
        placeholder: "Please provide your Profile URL",
    },
    {
        label: "GitHub Link",
        name: "github",
        type: "text",
        placeholder: "Please provide your Profile URL",
    },
    {
        label: "Other Social Site (If any)",
        name: "othersocial",
        type: "text",
        placeholder: "Please provide your Profile URL",
    },
    {
        label: "Name of your Company",
        name: "company",
        type: "text",
        placeholder: "Enter Your Company Name",
    },
    {
        label: "What is Your CTC",
        name: "ctc",
        type: "text",
        placeholder: "Enter Your CTC in LPA",
    },
    {
        label: "Position",
        name: "position",
        type: "text",
        placeholder: "Select Your Position",
    },
    {
        label: "Type of Role",
        name: "role",
        type: "text",
        placeholder: "Select Your Role",
    },
    {
        label: "Please add Your Short Bio",
        name: "bio",
        type: "text",
        height: "64",
        placeholder: "Type your Bio Here",
    },
    {
        label: "Please add Your Experience",
        name: "experience",
        type: "text",
        height: "64",
        placeholder: "Type your Experience Here",
    },
];





export default function Form1() {


    const {
        register,
        handleSubmit
      } = useForm();
      const [rating, setRating] = useState(5); 



      const onSubmit = (data) => {
        const dataWithRating = { ...data, rating };
        console.log(dataWithRating);
      }
    



    const handleRatingChange = (value) => {
        setRating(value);
    };



    return (
<div className="bg-[#292929] w-full">
        <div className="flex flex-col justify-center items-center py-32  mx-auto max-w-[110rem]">

                <div className="lg:w-[50%] w-[90%] rounded-lg  shadow shadow-blue-300">
                    <p className="text-center font-bold pt-20 text-5xl"><span>Your</span> <span className="bg-gradient-to-r from-blue-400 via-blue-100 to-amber-100 bg-clip-text text-transparent">Experience</span> <span>Matters</span></p>
    
        <div className="lg:w-[75%] w-[85%] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field, index) => (
                <div key={index} className="flex flex-col  mt-10 w-full justify-center items-center mx-auto">
                    <label className="text-lg self-start font-geist text-white">{field.label}</label>
                    <input
                        className={field.height ? (`align-text-top h-64 mt-2 w-full px-2 rounded-lg self-center bg-[#323232] focus:placeholder-blue-400 focus:outline-none `) : (` focus:outline-none h-14 mt-2 w-full px-2 rounded-lg self-center bg-[#323232] focus:placeholder-blue-400`)}
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name)}
                    />
                </div>
            ))}
             <p className='text-white text-lg pt-10'>Rate Your Experience</p>
             <StarRating rating={rating} onRatingChange={handleRatingChange} />


            <button className="flex justify-center items-center text-center w-full bg-[#323232] h-16 rounded-md mt-10"><Image src="upload.svg" width={24} height={24} className="mx-2" alt="image"></Image>Please Upload Your Picture</button>
            <button className="flex justify-center items-center text-center w-full bg-[#323232] h-16 rounded-md mt-8"><Image src="upload.svg" width={24} height={24} className="mx-2" alt="image"></Image>Please Upload Your Company Logo</button>

             <div className="flex justify-center items-center pt-10">
            <input type="checkbox" className="w-5 h-12 bg-black" />
            <p className=" text-md text-[#AFAFAF] pl-4">I hereby confirm that all information provided by me is accurate.</p>
             </div>

             <button className="flex justify-center text-black text-3xl mb-20 font-semibold items-center text-center w-full bg-[#FAD869] h-16 rounded-md mt-8">SUBMIT</button>
            </form>
        </div>
                </div>


            </div>
</div>
    )   
}
