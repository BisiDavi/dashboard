import AuthCard from "@components/AuthCard";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FcGoogle } from "react-icons/fc";
import { IconButton, Tooltip } from "@material-ui/core";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";

export default function Loginform() {
    const classes = authFormStyles();

    return (
        <AuthCard content={authJson.login}>
            <div className={classes.iconGroup}>
                <Tooltip title="Login with Github">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Login with Google">
                    <IconButton>
                        <FcGoogle />
                    </IconButton>
                </Tooltip>
            </div>
        </AuthCard>
    );
}
