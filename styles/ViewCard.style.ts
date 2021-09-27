import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const viewCardStyle = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            alignItems: "center",
            justifyContent: "space-around",
            padding: 10,
        },
				viewCard:{
					height:"100%",
					width:"100%"
				}
    }),
);
