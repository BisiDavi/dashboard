import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { IconButton, Tooltip } from "@material-ui/core";
import { useRouter } from "next/router";

import AuthCard from "@components/AuthCard";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import displayIcons from "@utils/displayIcons";

type providerType = {
    name: string;
    id: string;
};

export default function Signinform({ providers }) {
    console.log("providers Signinform", providers);
    const classes = authFormStyles();
    const router = useRouter();
    const [session] = useSession();

    console.log("session Signinform", session);

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    return (
        <>
            <AuthCard content={authJson.login}>
                <div className={classes.iconGroup}>
                    {Object.values(providers).map((provider: any) => (
                        <Tooltip key={provider.id} title={provider.name}>
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
