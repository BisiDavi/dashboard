import React from "react";
import InventoryForm from "./form/InventoryForm";
import AppModal from "./Modal";
import { formValues } from "../types";

interface InventoryModalProps {
    modal: boolean;
    handleClose: () => void;
    formValues?: { selectedField: formValues; selectedIndex: number };
    formType?: "edit" | "add";
}

export default function InventoryModal({
    modal,
    handleClose,
    formValues,
    formType,
}: InventoryModalProps) {
    return (
        <AppModal open={modal} handleClose={handleClose}>
            <InventoryForm formValues={formValues} formType={formType} />
        </AppModal>
    );
}
