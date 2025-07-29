"use server";
import {connectDB} from "@/app/api/db/connectDB";

export async function addAction(formData: FormData) {
    try {
        const image = formData.get("image") as File;
        const name = formData.get("name");
        const price = formData.get("price");
        const link = formData.get("link");
        const description = formData.get("description");

        if (!image || !name || !price || !link || !description) {
            throw new Error("All fields are required");
        }

        await connectDB()
        //image proces
    } catch (error) {
        
    }
}
    