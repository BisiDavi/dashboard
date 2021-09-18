import {
    Card,
    Button,
    Typography,
    CardActions,
    CardContent,
} from "@material-ui/core";

export default function ViewCard() {
    return (
        <Card>
            <CardContent>
                <Typography>Word of the Day</Typography>

                <Typography>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
