import { useState } from "react";
import { Typography, Tooltip, Grid, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import dynamic from "next/dynamic";
import Pagelayout from "@layouts/Pagelayout";
import InventoryForm from "@components/form/InventoryForm";
import InventoryTable from "@components/InventoryTable";
import { inventoryStyles } from "@styles/Inventory.style";

const AppModal = dynamic(() => import("../components/Modal"));

export default function InventoryManager() {
    const [modal, setModal] = useState(false);

    const classes = inventoryStyles();

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
                <InventoryForm />
            </AppModal>
            <Grid container className={classes.inventoryContainer}>
                <Grid item xs={12}>
                    <InventoryTable />
                </Grid>
                <Tooltip title="add to inventory">
                    <IconButton
                        className={classes.iconButton}
                        onClick={() => toggleModal(true)}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Pagelayout>
    );
}
