import { signIn } from "next-auth/react";
import { IconButton, Tooltip } from "@material-ui/core";

import AuthCard from "@components/AuthCard";
import { authFormStyles } from "@styles/Authform.style";
import { login, icons } from "@json/auth.json";
import displayIcons from "@utils/displayIcons";

export default function Loginform() {
    const classes = authFormStyles();

    return (
        <AuthCard content={login}>
            <div className={classes.iconGroup}>
                {icons.map((icon) => (
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
