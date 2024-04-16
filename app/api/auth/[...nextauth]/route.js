import NextAuth from "next-auth";
import authConfig from "@/app/libs/auth";

//handle all nextauth routes
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST};