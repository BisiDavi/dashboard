import Modal from "@material-ui/core/Modal";
import { modalStyles } from "@styles/Modal.style";
import { PropsWithChildren } from "react";

interface AppModalInterface {
    open: boolean;
    handleClose: () => void;
    children: JSX.Element;
}

export default function AppModal({
    open,
    handleClose,
    children,
}: PropsWithChildren<AppModalInterface>) {
    const classes = modalStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={`modal-inventory`}
            aria-describedby={`modal-inventoryManager`}
            className={classes.modal}
        >
            {children}
        </Modal>
    );
}
