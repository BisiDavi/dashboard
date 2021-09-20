import {
    Card,
    Button,
    Typography,
    Divider,
    CardActions,
    CardContent,
} from "@material-ui/core";
import { PropsWithChildren } from "react-transition-group/node_modules/@types/react";
import displayIcons from "utils/displayIcons";
import { viewCardStyle } from "@styles/ViewCard.style";

interface ViewCard {
    content?: {
        btnVariant?: "outlined" | "contained" | "text";
        btnText?: string;
        icon?: string;
    };
}

export default function ViewCard({
    content,
    children,
}: PropsWithChildren<ViewCard>) {
    const classes = viewCardStyle();
    return (
        <Card>
            <CardContent>{children}</CardContent>
            <Divider />
            <CardActions>
                <Button
                    className={classes.button}
                    variant={content?.btnVariant}
                    size="small"
                >
                    {content?.btnText}
                    {displayIcons(content?.icon)}
                </Button>
            </CardActions>
        </Card>
    );
}
