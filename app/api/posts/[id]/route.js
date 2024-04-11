import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/posts

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    const newPost = await client.post.create({
        data: {
            title,
            description,
        },
        });
    return NextResponse.json(newPost)
    } catch (error) {
        return NextResponse.json({ message: "Error creating post", error}, { status: 500})
    }
};