import { useState, useReducer } from "react";
import useLocalStorage, { FolderTree } from "@/hooks/useLocalStorage";



const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const useHandleTree = (): [FolderTree[]] => {
    const [storedValue, setStoredValue] = useLocalStorage("tree")
    const [storedFolderData, dispatch] = useReducer<FolderTree[]>(reducer, storedValue);


    const handleAddFolder = (folder: FolderTree) => {
    };

    const handleAddFile = (name) => {
        
    };
    const handleDeleteFolder = (folder: FolderTree) => {
    };
    const handleDeleteFile = (file: File) => {
    };


    return [storedFolderData];
};

export default useHandleTree;