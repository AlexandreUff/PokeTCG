import { ReactNode, createContext, useState } from "react";
import Modal from "../components/Modal";

interface IModalContext {
    isOpen: boolean;
    openModal: (title: string, body: ReactNode) => void;
    closeModal: () => void;
}

export interface ModalContent {
    title: string;
    body: ReactNode
}

export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
})

const ModalProvider = ({
    children,
  }: Readonly<{ children: ReactNode }>) => {
    const [open, setOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ModalContent>({title: "", body: ""})

    const openModal = (title: string, body: ReactNode) => {
        setOpen((prevOpen) => (!prevOpen));
        setContent({title, body})
    };

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <ModalContext.Provider value={{ isOpen: open, openModal, closeModal }}>
            {open && (<Modal content={content} />)}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider