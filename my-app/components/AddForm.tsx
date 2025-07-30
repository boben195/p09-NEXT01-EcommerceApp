"use client";


import { addAction } from "@/utils/addAction"
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ChangeEvent, useState } from "react";
import Image from "next/image";


const AddForm = () => {
    const router = useRouter();
    const [imageURL, setImageURL] = useState("");
    async function clientAddAction(formData: FormData) {
        const { error, success } = await addAction(formData);
        if (error) {
            toast.error(error)
        } else if (success) {
            toast.success(success);
            router.push("/");
            setImageURL("");
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileSize = file.size;
            if (Math.round(fileSize / 1024) > 1024) { 
                toast.error("Image size should not exceed 1MB");
                
            } else {
                setImageURL(URL.createObjectURL(file));

            }
        }
    }


  return (
      <form action={clientAddAction} className="text-black w-full max-w-xl mx-auto flex flex-col justify-center
       items-center space-y-4 mt-3 md:mt-5">
          {imageURL && (<Image src={ imageURL} alt="img" width={1000} height={1000} className="max-w-full max-h-72 object-cover object-center rounded-lg" />)}
          <div className="flex flex-col w-full">
              <label htmlFor="">Product Image:</label>
              <input type="file" accept="image/*" name="image" onChange={handleImageChange} className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Enter product name" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Price:</label>
              <input type="number" name="price" placeholder="Enter product price" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Sellers Link:</label>
              <input type="text" name="link" placeholder="Link to where buyers can find you" className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"/>
          </div>
          <div className="flex flex-col w-full">
              <label htmlFor="">Description</label>
              <textarea name="description" placeholder="Enter the product description" rows={4} className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer">Add Product</button>
    </form>
  )
}

export default AddForm