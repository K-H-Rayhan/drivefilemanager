import { FolderTree } from "@/types/TreeNodeType";
import { useEffect, useState } from "react";

const initialTreeValue: FolderTree[] = [
  {
    name: "My Drive",
    slug: "",
    id: "root",
    children: [],
  },
];

const useLocalStorage = (
  key: string
): [FolderTree[], (newValue: FolderTree[]) => void] => {
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
