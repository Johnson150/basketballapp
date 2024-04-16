
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


// url: http://localhost:3000/api/post/

// get function handles GET requests to return posts (used for search) 
export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const post = await client.Player.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return NextResponse.json({ status: 404 }, { message: "Post not found" })
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error getting post", error })

    }
}

// Patch function handles PATCH requests to perform updates (used for editing data)
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { name,
            team,
            MPG,
            PPG,
            RPG,
            APG,
            SPG,
            BPG, } = body;
            // updates the player in the database
        const updatePlayer = await client.player.update({
            where: {
                id
            },
            data: {
                name,
                team,
                MPG,
                PPG,
                RPG,
                APG,
                SPG,
                BPG,
            }
        });
        // if the player is not found, return a 404 status
        if (!updatePlayer) {
            return NextResponse.json({ status: 404 }, { message: "Post not found" })
        }
        return NextResponse.json(updatePlayer);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating post", error })
    }
}


// Function to remove a player from the database using the player id
export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await client.player.delete({
            where: {
                id
            }
        });
        return NextResponse.json({ status: 200 }, { message: "Player deleted" });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return NextResponse.json({ status: 500 }, { message: "Error deleting player", error });
    }
};


export const FETCH = async () => {
    return await GET();
}

