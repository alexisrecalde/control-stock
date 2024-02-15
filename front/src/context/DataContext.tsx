import { createContext, useState, ReactNode, useEffect } from "react";


type DataContextType = {
    role: string;
    setRole: React.Dispatch<React.SetStateAction<string>>;
}

// Get data from local storage
const loadFromLocalStorage = () => {
    try {
        // Retrieve data from local storage
        const storedData = localStorage.getItem("appData");
        if (storedData) {
            return JSON.parse(storedData);
        }
    } catch (error) {
        console.error("Error loading data from local storage:", error);
    }
    // Return default values if no data found in local storage
    return {
        role: '',
    }
};

const DataContext = createContext<DataContextType>({
    role: '',
    setRole: () => {},

})

type Props = {
    children: ReactNode;
};

export const AppProps = ({ children }: Props) => {
    const initialState = loadFromLocalStorage();

    const [role, setRole] = useState<string>(initialState.role)

    // Use useEffect to save state to local storage whenever it changes
    useEffect(() => {
        const dataToStore = {
            role,
        };
        try {
            // Store data in local storage as a JSON string
            localStorage.setItem("appData", JSON.stringify(dataToStore));
        } catch (error) {
            console.error("Error saving data to local storage:", error);
        }
    }, [role]);

    return (
        <DataContext.Provider
            value={{
                role,
                setRole,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;

