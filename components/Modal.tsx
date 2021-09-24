import Modal from "@material-ui/core/Modal";
import { PropsWithChildren } from "react";

interface AppModalInterface {
    open: boolean;
    handleClose: () => void;
    content: {
        title: string;
        description;
    };
    children;
}

export default function AppModal({
    content,
    open,
    handleClose,
    children,
}: PropsWithChildren<AppModalInterface>) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={`modal-${content.title}`}
            aria-describedby={`modal-${content.description}`}
        >
            {children}
        </Modal>
    );
}
