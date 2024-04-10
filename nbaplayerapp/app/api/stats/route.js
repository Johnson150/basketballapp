import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, actors, releaseYear } = body;
    const newstats = await client.stats.create({
      data: {
        title,
        actors,
        releaseYear,
      },
    });
    return NextResponse.json(newstats);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating stats entry", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const stats = await client.stats.findMany();
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error getting statss", error }
    );
  }
}
