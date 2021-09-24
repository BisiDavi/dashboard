import { useState } from "react";
import Pagelayout from "@layouts/Pagelayout";
import dynamic from "next/dynamic";
import AddIcon from "@material-ui/icons/Add";
import { Typography, Grid, IconButton } from "@material-ui/core";
import InventoryTable from "@components/InventoryTable";

const AppModal = dynamic(() => import("../components/Modal"));

export default function InventoryManager() {
    const [modal, setModal] = useState(false);

    function toggleModal(open) {
        return setModal(open);
    }
    return (
        <Pagelayout title="Orders">
            <Typography component="h1">
                Welcome to the Inventory manager page, add products, edit
                products, and delete products
            </Typography>
            <AppModal open={modal} handleClose={() => toggleModal(false)}>
                <h1>Hello</h1>
            </AppModal>
            <Grid container>
                <Grid item xs={12}>
                    <InventoryTable />
                </Grid>
                <IconButton onClick={() => toggleModal(true)}>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Pagelayout>
    );
}
