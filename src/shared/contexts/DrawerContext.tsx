import { createContext, useCallback, useContext, useState} from "react";



interface IDrawerContexData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
 }

interface IDrawerContexProps{
   children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContexData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IDrawerContexProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
           {children}
        </DrawerContext.Provider>
    );
}