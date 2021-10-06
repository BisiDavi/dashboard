import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    database: process.env.DATABASE_URL,
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    events: {
        async signIn(message) {
            /* on successful sign in */
            console.log("message signIn", message);
        },
        async signOut(message) {
            /* on signout */
            console.log("message signOut", message);
        },
        async createUser(message) {
            /* user created */
            console.log("message createUser", message);
        },
        async updateUser(message) {
            /* user updated - e.g. their email was verified */
            console.log("message updateUser", message);
        },
        async linkAccount(message) {
            /* account (e.g. Twitter) linked to a user */
            console.log("message linkAccount", message);
        },
        async session(message) {
            /* session is active */
            console.log("message session", message);
        },
        async error(message) {
            /* error in authentication flow */
            console.log("message error", message);
        },
    },
    debug: false,
};

export default function CustomNextAuth(req, res) {
    return NextAuth(req, res, options);
}
