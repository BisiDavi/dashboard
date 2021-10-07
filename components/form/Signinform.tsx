import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { IconButton, Tooltip } from "@material-ui/core";
import { useRouter } from "next/router";

import AuthCard from "@components/AuthCard";
import Spinner from "@components/Spinner";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import displayIcons from "@utils/displayIcons";

type providerType = {
    name: string;
    id: string;
};

export default function Signinform() {
    const classes = authFormStyles();
    const router = useRouter();
    const [session, loading] = useSession();

    console.log("session Signinform", session);

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    //if (loading !== null && loading !== undefined) {
    //    return <Spinner />;
    //}

    return (
        <>
            <AuthCard content={authJson.login}>
                <div className={classes.iconGroup}>
                    {authJson.icons.map((provider: any) => (
                        <Tooltip key={provider.id} title={provider.title}>
                            <IconButton onClick={() => signIn(provider.id)}>
                                {displayIcons(provider.id)}
                            </IconButton>
                        </Tooltip>
                    ))}
                </div>
            </AuthCard>
        </>
    );
}
