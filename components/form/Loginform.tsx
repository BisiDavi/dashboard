import { signIn } from "next-auth/react";
import { IconButton, Tooltip } from "@material-ui/core";

import AuthCard from "@components/AuthCard";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import displayIcons from "@utils/displayIcons";

export default function Loginform() {
    const classes = authFormStyles();

    return (
        <AuthCard content={authJson.login}>
            <div className={classes.iconGroup}>
                {authJson.icons.map((icon) => (
                    <Tooltip key={icon.name} title={icon.title}>
                        <IconButton onClick={() => signIn(icon.name)}>
                            {displayIcons(icon.name)}
                        </IconButton>
                    </Tooltip>
                ))}
            </div>
        </AuthCard>
    );
}
