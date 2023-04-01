import { useEffect, useState } from "react";

export type File = {
    name: string;
    id: string;
};

export type FolderTree = {
    name: string;
    slug: string;
    id: string;
    children: FolderTree[];
    files?: File[];
};

const initialTreeValue: FolderTree[] = [
    {
        name: "root",
        slug: "",
        id: 'root',
        children: [],
    }
]

const useLocalStorage = (key: string): [FolderTree[], (newValue: FolderTree[]) => void] => {
    const [storedValue, setStoredValue] = useState<FolderTree[]>(() => {
        if (typeof window === "undefined") return initialTreeValue;
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialTreeValue;
        } catch (error) {
            return initialTreeValue;
        }
    });


    const handleNewValue = (newValue: FolderTree[]) => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };
    return [storedValue, handleNewValue];
};

export default useLocalStorage;