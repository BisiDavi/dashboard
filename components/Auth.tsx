import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Auth({ children }) {
    const { data: session, loading } = useSession();
    const isUser = !!session?.user;

    useEffect(() => {
        if (loading) return;
        if (!isUser) signIn();
    }, [isUser, loading]);

    if (isUser) {
        return children;
    }

    return <div>Loading ...</div>;
}
