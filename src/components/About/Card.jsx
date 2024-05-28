import Image from "next/image"

export default function Card({number,title, description, content,arrow}) {
  return (
    <div className="w-[95%] my-2 lg:h-[25rem] xl:h-[20rem] flex justify-center items-center rounded-lg py-4 border border-gray-400  bg-gradient-to-b from-neutral-700 to-neutral-800 ">
        <div className="w-[90%] mx-auto">
       {arrow&& <Image className="hidden m-2  pb-2 lg:block relative left-[50%] lg:bottom-10 xl:bottom-0" src="vector3.svg" width={300} height={160} alt="image"></Image>}
        <p className="h-6 text-center w-10 rounded-2xl bg-[#FAD869] text-black font-semibold">{number}</p>
        <p className="font-semibold text-2xl my-2">{title}</p>
        <p className="text-gray-300  ">{description}</p>
        <ul className="py-2">
            {content.map((item,i) => (
                <li key={i} className="text-gray-300 list-disc ml-6">{item}</li>
            ))}
        </ul>
        {arrow&&<Image className="hidden lg:block relative right-[50%] lg:top-10 xl:top-0 pt-2" src="vector2.svg" width={300} height={160} alt="image"></Image>}
        </div>
    </div>
  )
}
