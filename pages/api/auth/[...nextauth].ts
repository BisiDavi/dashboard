import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
        Providers.GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signin",
    },
    database: process.env.DATABASE_URL,
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        secret: process.env.NEXT_PUBLIC_SECRET,
    },
    debug: true,
};

export default function CustomNextAuth(req, res) {
    return NextAuth(req, res, options);
}
