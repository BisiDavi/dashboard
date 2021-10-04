import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import Providers from "next-auth/providers";

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
        signIn: "/auth/",
    },
    database: process.env.DATABASE_URL,
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    debug: false,
};

export default function CustomNextAuth(req, res) {
    return NextAuth(req, res, options);
}
