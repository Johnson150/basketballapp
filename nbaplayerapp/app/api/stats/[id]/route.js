
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const stats = await client.stats.findUnique({
            where: {
                id
            }
        });
        if(!stats){
            return NextResponse.json({status: 404}, {message: "stats not found"})
        }
        return NextResponse.json(stats);
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error getting stats", error})
        
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { title, actors, releaseYear } = body;

        const updatestats = await client.stats.update({
            where: {
                id
            },
            data: {
                title,
                actors,
                releaseYear
            }
        });
        if(!updatestats){
            return NextResponse.json({status: 404}, {message: "stats not found"})
        }
        return NextResponse.json(updatestats);
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error updating stats", error})
    }
}

export const DELETE = async (request, {params}) => {
    try {
        const { id } = params;
        await client.stats.delete({
            where: {
                id
            }
        });
        return NextResponse.json({status: 200}, {message: "stats deleted"});
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: "Error deleting stats", error})
    }
}

