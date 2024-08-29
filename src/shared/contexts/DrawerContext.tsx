import { createContext, useCallback, useContext, useState} from "react";



interface IDrawerContexData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOptions[]
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
 }

interface IDrawerContexProps{
   children: React.ReactNode
}

interface IDrawerOptions {
    path: string 
    icon: string
    label: string
}

const DrawerContext = createContext({} as IDrawerContexData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IDrawerContexProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions)
    }, []);

   
    return (
        <DrawerContext.Provider value={{drawerOptions, isDrawerOpen, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
           {children}
        </DrawerContext.Provider>
    );
}