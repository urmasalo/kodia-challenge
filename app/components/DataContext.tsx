
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
    searchCriteria: string;
    setSearchCriteria: (value: string) => void;
    performSearch: boolean;
    setPerformSearch: (argument: boolean) => void;
    language: string;
    setLanguageChange: (value: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [searchCriteria, setSearchCriteria] = useState('bitcoin');
    const [performSearch, setPerformSearch] = useState(false);
    const [language, setLanguageChange] = useState('es')

    return (
        <DataContext.Provider value={{ searchCriteria, setSearchCriteria, performSearch, setPerformSearch, language, setLanguageChange }}>
            {children}
        </DataContext.Provider>
    );
};