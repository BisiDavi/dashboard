import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
    gridContainer: {
        justifyContent: "space-between",
        width: "100%",
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
		menu:{
			
		}
}));
