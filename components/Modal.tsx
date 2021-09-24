import Modal from "@material-ui/core/Modal";
import { PropsWithChildren } from "react";

interface AppModalInterface {
    open: boolean;
    handleClose: () => void;
    children;
}

export default function AppModal({
    open,
    handleClose,
    children,
}: PropsWithChildren<AppModalInterface>) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={`modal-inventory`}
            aria-describedby={`modal-inventoryManager`}
        >
            {children}
        </Modal>
    );
}
