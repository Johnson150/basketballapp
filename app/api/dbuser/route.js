import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

// URL: http://localhost:3000/api/dbuser

// handles POST requests of email and password to create a new dbuser, returns new dbuser if
// successful, or an error message if not

export const POST = async (req) => {
    try {
        // user.password= await bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT))
        // console.log(user);
        const body = await req.json();
        const { email, password } = body;
         // Hash the password using bcrypt with asynchronous method
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT));

        // Now create the new user in the database with the hashed password
        const newDbUser = await client.dbuser.create({
            data: {
                email,
                password: hashedPassword
            },
        });




        // const newDbUser = await client.dbuser.create({
        //     data: {
        //         email,
        //         password
        //     },
        // });
        return NextResponse.json(newDbUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error creating dbuser", error: error.message },
            { status: 500 }
        );
    }
};

// handles GET requests to return all dbusers 
export const GET = async () => {
    try {
        const dbUsers = await client.dbuser.findMany();
        return NextResponse.json(dbUsers);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting dbusers", error: error.message },
            { status: 500 }
        );
    }
}

// fethces dbusers by using the GET function
export const FETCH = async () => {
    return await GET();
}
