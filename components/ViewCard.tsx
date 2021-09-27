import {
    Card,
    Button,
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
        <Card className={classes.viewCard}>
            <CardContent>{children}</CardContent>
            {content?.btnVariant && <Divider />}
            {content?.btnVariant && (
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
            )}
        </Card>
    );
}
