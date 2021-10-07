import { useEffect } from "react";
import { useSession, signIn } from "next-auth/client";
import Spinner from "@components/Spinner";

export default function Auth({ children }) {
    const [session, loading] = useSession();
    const isUser = !!session?.user;
    useEffect(() => {
        if (loading) <Spinner />;
        if (!isUser && !loading) signIn();
    }, [isUser, loading]);

    if (isUser) {
        return children;
    }

    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return <Spinner />;
}
