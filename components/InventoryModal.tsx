import React from "react";
import InventoryForm from "./form/InventoryForm";
import AppModal from "./Modal";
import { formValues } from "../types";

interface InventoryModalProps {
    modal: boolean;
    handleClose: () => void;
    formValues?: { selectedField: formValues; selectedIndex: number };
}

export default function InventoryModal({
    modal,
    handleClose,
    formValues,
}: InventoryModalProps) {
    return (
        <AppModal open={modal} handleClose={handleClose}>
            <InventoryForm formValues={formValues} />
        </AppModal>
    );
}
