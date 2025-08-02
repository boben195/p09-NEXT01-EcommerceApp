"use server";
import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "@/utils/cloudinary";
import Product from "@/app/api/models/product.model";

export async function updateAction(formData: FormData, id: string) {
    try {
        const image = formData.get("image") as File;
        const name = formData.get("name");
        const price = formData.get("price");
        const link = formData.get("link");
        const description = formData.get("description");

        if ( !name || !price || !link || !description) {
            throw new Error("All fields are required");
        }

      await connectDB()
      
      const product = await Product.findById(id);
      if (!product) {
          throw new Error("Product not found");
      }

      if (image.size === 0) {
        await Product.findByIdAndUpdate(id, {
            name,
            price: parseFloat(price as string),
            link,
            description,
        });
      
        return { success: true, message: "Product updated successfully" };
      } else {
        const parts = product.image.split("/");
        const fileName = parts[parts.length - 1];
        const imageId = fileName.split(".")[0];
      }
        

        const arrayBuffer = await image.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const imageResponse: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "watch",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });

        console.log("Image response: ", imageResponse);
        await Product.findByIdAndUpdate(id, {
            image: imageResponse.secure_url,
            name,
            price: parseFloat(price as string),/////??? its a string
            link,
            description,
        });
        return { success: true, message: "Product added successfully" };
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred",
        }
    }
}
    