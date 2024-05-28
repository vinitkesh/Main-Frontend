"use client"

import Image from "next/image";
// import StarRating from "./Starrating";
import { useState } from "react";
import { useForm } from 'react-hook-form';


const formFields = [
    {
        label: "Name",
        name: "name",   
        type: "text",
        required: true,
        placeholder: "Enter your name",
    },
    {
        label: "Roll No.",
        name: "rollno",
        type: "text",
        required: true,
        placeholder: "Enter your name",
    },
    {
        label: "Contact No.",
        name: "contact no",
        type: "number",
        required: true,
        placeholder: "Enter your Contact No.",
    },
    {
        label: "Email Id",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Enter your email",
    },
    
    
    
    
];





export default function Form2() {


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
                    <p className="text-center font-bold pt-20 text-5xl"><span>Register</span> <span className="bg-gradient-to-r from-blue-400 via-blue-100 to-amber-100 bg-clip-text text-transparent">Here</span> </p>
    
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
             
             
             <button className="flex justify-center items-center text-center w-full bg-[#323232] h-56 rounded-md mt-10"><Image src="upload.svg" width={238} height={238} className="mx-2" alt="image"></Image></button> 

            <button className="flex justify-center items-center text-center w-full bg-[#323232] h-16 rounded-md mt-10"><Image src="upload.svg" width={25} height={25} className="mx-2" alt="image"></Image>Please Upload Your Payment Reciept</button>
            

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
