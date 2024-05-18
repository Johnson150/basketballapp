import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

// Function to handle POST requests to create a new player data
export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, team, MPG, PPG, RPG, APG, SPG, BPG, FG, FGA, FGPercent,
            threeP, threePA, threePPercent, twoP, twoPA, twoPPercent,
            eFGPercent, FT, FTA, FTPercent, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS } = body;
        const newPlayer = await client.player.create({
            data: {
                name, team, MPG, PPG, RPG, APG, SPG, BPG, FG, FGA, FGPercent,
                threeP, threePA, threePPercent, twoP, twoPA, twoPPercent,
                eFGPercent, FT, FTA, FTPercent, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS
            },
        });
        return NextResponse.json(newPlayer);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error creating player", error: error.message },
        );
    }
};

// Function to handle GET requests to return all players
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


// Function to handle updating player data
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { name, team, MPG, PPG, RPG, APG, SPG, BPG, FG, FGA, FGPercent,
            threeP, threePA, threePPercent, twoP, twoPA, twoPPercent,
            eFGPercent, FT, FTA, FTPercent, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS } = body;

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

        if (!updatePlayer) {
            return NextResponse.json({ status: 404 }, { message: "Player not found" })
        }
        return NextResponse.json(updatePlayer);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating player", error })
    }
}

// Function to handle deleting a player
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
        console.error(error);
        return NextResponse.json({ status: 500 }, { message: "Error deleting player", error });
    }
};

// Function to evaluate trade proposals
const evaluateTrade = (player1, player2, categories) => {
    let matches = 0;
    categories.forEach(category => {
        if (player1[category] && player2[category] && player1[category] === player2[category]) {
            matches++;
        }
    });
    return matches >= 3;  // Trade goes through if there are at least 3 matches
};

// Endpoint to handle trade proposals
export const TRADE = async (req) => {
    try {
        const { player1Id, player2Id } = await req.json();
        const categories = ['MPG', 'PPG', 'RPG', 'APG', 'SPG', 'BPG']; // The stats categories to compare

        // Fetch players from the database
        const player1 = await client.player.findUnique({ where: { id: player1Id } });
        const player2 = await client.player.findUnique({ where: { id: player2Id } });

        // Evaluate the trade
        if (evaluateTrade(player1, player2, categories)) {
            return NextResponse.json({
                message: "Trade approved",
                players: [player1, player2]
            });
        } else {
            return NextResponse.json({
                message: "Trade rejected",
                reason: "Players do not match in at least three statistical categories"
            }, { status: 400 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Error processing trade",
            error: error.message
        }, { status: 500 });
    }
};

// Function to fetch all players
export const FETCH = async () => {
    return await GET();
}
