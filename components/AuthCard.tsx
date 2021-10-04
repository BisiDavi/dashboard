import { PropsWithChildren } from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { authCardStyles } from "@styles/AuthCard.style";

export default function AuthCard({
    content,
    children,
}: PropsWithChildren<AuthCardProps>) {
    const classes = authCardStyles();
    return (
        <Grid container>
            <Grid className={classes.cardGrid} item lg={6} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.header}>
                            <div>
                                <Typography component="h1">
                                    {content.title}
                                </Typography>
                                <Typography component="p">
                                    {content.text}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.authform}>{children}</div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

interface AuthCardProps {
    content: {
        title: string;
        text: string;
    };
}
