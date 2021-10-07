import NextAuth from "next-auth";
import { useRouter } from "next/router";
import Providers from "next-auth/providers";

export default function CustomNextAuth(req, res) {
    const router = useRouter();
    return NextAuth(req, res, {
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
        },
        database: process.env.DATABASE_URL,
        secret: process.env.NEXT_PUBLIC_SECRET,
        session: {
            jwt: true,
            maxAge: 30 * 24 * 60 * 60,
        },
        callbacks: {
            async signIn() {
                return router.push("/");
            },
        },
        debug: false,
    });
}
