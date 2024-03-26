"use client"

import { useForm } from 'react-hook-form';

const formFields=[
    {
        name:"Name",
        type:"text",
        placeholder:"Enter Your Name"
    },
    {
        name:"Email",
        type:"email",
        placeholder:"Enter Your Email"
    },
    {
        name:"Message",
        type:"text",
        placeholder:"Enter Your Message"
    }
]

export default function Form() {


    const {
        register,
        handleSubmit
      } = useForm();


      const onSubmit = (data) => {
        console.log(data);
      }

  return (
    <div className="w-full ">
        <form className='w-[90%] mx-auto' onSubmit={handleSubmit(onSubmit)}>

        {formFields.map((field, index) => (
                <div key={index} className="flex flex-col  mt-3 w-full justify-center items-center mx-auto">
                    <label className="text-lg self-start font-geist text-[#E7E7E7]">{field.name}</label>
                    <input
                        className={field.height ? (`align-text-top h-64 mt-2 w-full px-2 rounded-lg self-center bg-[#292929] focus:placeholder-blue-400 focus:outline-none `) : (` focus:outline-none h-14 mt-2 w-full px-2 rounded-lg self-center bg-[#292929] focus:placeholder-blue-400`)}
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name)}
                    />
                </div>
            ))}
            <button className='w-full mt-8 bg-[#FAD869] rounded-md py-2 text-black text-lg font-bold'>Send &#8599;</button>
        </form>
    </div>
  )
}
