import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/post

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, team, MPG, PPG, RPG, APG, SPG, BPG } = body;
        const newPlayer = await client.player.create({ // Use 'player' instead of 'post'
            data: {
                name,
                team,
                MPG,
                PPG,
                RPG,
                APG,
                SPG,
                BPG,
            },
        });
        return NextResponse.json(newPlayer);
    } catch (error) {
        console.error(error); // This will help you see the error details in the server logs
        return NextResponse.json(
            { message: "Error creating player", error: error.message }, // Adjusted the message for clarity
            { status: 500 }
        );
    }
};



