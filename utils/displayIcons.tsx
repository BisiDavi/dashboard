import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import NoteIcon from "@material-ui/icons/Note";
import PeopleIcon from "@material-ui/icons/People";

export default function displayIcons(iconName: string) {
    switch (iconName) {
        case "arrowRight":
            return <ArrowForwardIcon />;
        case "arrowLeft":
            return <ArrowBackIcon />;
        case "add":
            return <AddIcon />;
        case "note":
            return <NoteIcon />;
        case "people":
            return <PeopleIcon />;
        default:
            return null;
    }
}
