import { ReactNode, createContext, useState } from "react";
import Modal from "../components/Modal";

interface IModalContext {
    isOpen: boolean;
    toggleOpenModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    toggleOpenModal: () => {},
})

const ModalProvider = ({
    children,
  }: Readonly<{ children: ReactNode }>) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpenModal = () => {
        setOpen((prevOpen) => (!prevOpen));
    };

    return (
        <ModalContext.Provider value={{ isOpen: open, toggleOpenModal }}>
            {open && (<Modal />)}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider