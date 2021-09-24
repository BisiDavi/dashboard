import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CopyrightIcon from "@material-ui/icons/Copyright";
import AddIcon from "@material-ui/icons/Add";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TimelineIcon from "@material-ui/icons/Timeline";

export default function displayIcons(iconName: string) {
    switch (iconName) {
        case "add":
            return <AddIcon />;
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
        default:
            return null;
    }
}
