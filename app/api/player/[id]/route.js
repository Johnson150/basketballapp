import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// Function to handle GET requests to retrieve player data
// Function to handle GET requests to return all players
export const GET = async () => {
    try {
        const players = await client.player.findMany();
        // Map through each player and replace null values with "null"
        const modifiedPlayers = players.map(player => {
            const modifiedPlayer = {};
            for (const key in player) {
                modifiedPlayer[key] = player[key] !== null ? player[key] : "null";
            }
            return modifiedPlayer;
        });
        return NextResponse.json(modifiedPlayers);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting players", error: error.message },
            { status: 500 }
        );
    }
}


// Function to handle PATCH requests to update player data
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { name, team, MPG, PPG, RPG, APG, SPG, BPG, FG, FGA, FGPercent,
            threeP, threePA, threePPercent, twoP, twoPA, twoPPercent,
            eFGPercent, FT, FTA, FTPercent, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS } = body;

        const updatedPlayer = await client.Player.update({
            where: { id },
            data: {
                name,
                team,
                MPG,
                PPG,
                RPG,
                APG,
                SPG,
                BPG,
                FG,
                FGA,
                FGPercent,
                threeP,
                threePA,
                threePPercent,
                twoP,
                twoPA,
                twoPPercent,
                eFGPercent,
                FT,
                FTA,
                FTPercent,
                ORB,
                DRB,
                TRB,
                AST,
                STL,
                BLK,
                TOV,
                PF,
                PTS
            }
        });

        if (!updatedPlayer) {
            return NextResponse.json({ status: 404 }, { message: "Player not found" })
        }

        return NextResponse.json(updatedPlayer);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating player", error })
    }
}

// Function to handle DELETE requests to delete player data
export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await client.Player.delete({
            where: { id }
        });
        return NextResponse.json({ status: 200 }, { message: "Player deleted" });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 }, { message: "Error deleting player", error });
    }
};

// Function to handle fetching all players
export const FETCH = async () => {
    try {
        const players = await client.Player.findMany();
        return NextResponse.json(players);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 }, { message: "Error fetching players", error });
    }
}
