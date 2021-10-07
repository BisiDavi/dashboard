import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CopyrightIcon from "@material-ui/icons/Copyright";
import AddIcon from "@material-ui/icons/Add";
import { FcGoogle } from "react-icons/fc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TimelineIcon from "@material-ui/icons/Timeline";
import LogoutIcon from "@material-ui/icons/Logout";

export default function displayIcons(iconName: string) {
    switch (iconName) {
        case "add":
            return <AddIcon data-testid="add" />;
        case "news":
            return <TimelineIcon />;
        case "crypto": {
            return <CopyrightIcon />;
        }
        case "inventory": {
            return <MonetizationOnIcon />;
        }
        case "covid": {
            return <LocalHospitalIcon />;
        }
        case "github": {
            return <GitHubIcon />;
        }
        case "google": {
            return <FcGoogle />;
        }
        case "avatar": {
            return <AccountCircleIcon />;
        }
        case "logout": {
            return <LogoutIcon />;
        }
        default:
            return null;
    }
}
