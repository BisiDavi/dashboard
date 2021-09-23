import Pagelayout from "@layouts/Pagelayout";
import { Typography, Grid, Table } from "@material-ui/core";

export default function Order() {
    return (
        <Pagelayout title="Orders">
            <Typography component="h1">
                Welcome to the Inventory manager page, add products, edit
                products, and delete products
            </Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Table></Table>
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
