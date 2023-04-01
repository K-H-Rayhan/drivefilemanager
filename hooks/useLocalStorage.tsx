import { useEffect, useState } from "react";

export type File = {
    name: string;
    id: string;
};

export type FolderTree = {
    name: string;
    slug: string;
    children?: FolderTree[];
    files?: File[];
};



const useLocalStorage = (key: string): [FolderTree[], (newValue: FolderTree[]) => void] => {
    const [storedValue, setStoredValue] = useState<FolderTree[]>([]);

    useEffect(() => {
        setStoredValue(getData)
    }, []);

    function getData() {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            return [];
        }
    }

    const handleNewValue = (newValue: FolderTree[]) => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };
    return [storedValue, handleNewValue];
};

export default useLocalStorage;