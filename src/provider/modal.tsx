import { ReactNode, createContext, useState } from "react";

interface IModalContext {
    isOpen: boolean;
    toggleOpenModal: () => void;
}

const ModalContext = createContext<IModalContext>({
    isOpen: false,
    toggleOpenModal: () => {},
})

const ModalProvider = ({
    children,
  }: Readonly<{ children: ReactNode }>) => {
    const [open, setOpen] = useState<boolean>(false); // Estado do tema

    const toggleOpenModal = () => {
        setOpen((prevOpen) => (!prevOpen));
    };

    return (
        <ModalContext.Provider value={{ isOpen: open, toggleOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider