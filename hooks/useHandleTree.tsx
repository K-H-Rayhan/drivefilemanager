import { useState, useReducer, useEffect } from "react";
import useLocalStorage, { FolderTree } from "@/hooks/useLocalStorage";

type HandleTree = {
    storedFolderData: FolderTree[],
    handleAddFolder: (name: string, parentId: string) => void,
}

type ADDFOLDERACTION = {
    type: "ADD_FOLDER";
    payload: {
        name: string,
        parentId: string,
    };

};
type INITACTION = {
    type: "INIT";
    payload: FolderTree[];
};

type HandleTreeAction = ADDFOLDERACTION | INITACTION

type AddNode = {
    name: string,
    parentId: string,
}

const generateSlug = (data: string) => data.replace(/\s/g, "-").toLowerCase()

const addNode = (data: AddNode, initData: FolderTree[]): any => {
    const newData = [...initData]
    for (let i = 0; i < newData.length; i++) {
        // If parentId found and slug doesn't exist on that child add item
        const slug = generateSlug(data.name)
        if (newData[i].id == data.parentId && !newData[i].children.some(item => item.slug == slug)) {
            newData[i].children.push({
                name: data.name,
                slug: slug,
                id: self.crypto.randomUUID(),
                children: [],
            })
            return newData
        }
        if (newData[i].children.length > 0) {
            addNode(data, newData[i].children)
        }
    }
    return newData
}

const reducer = (storedFolderData: FolderTree[], action: HandleTreeAction): FolderTree[] => {
    switch (action.type) {
        case "INIT":
            return action.payload;
        case "ADD_FOLDER":
            return addNode({
                name: action.payload.name,
                parentId: action.payload.parentId,
            }, storedFolderData)
        default:
            return storedFolderData;
    }
};

const useHandleTree = (): HandleTree => {
    const [storedValue, setStoredValue] = useLocalStorage("tree")
    const [storedFolderData, dispatch] = useReducer(reducer, []);

    // Initialize the state with the stored value from localStorage using useeffect to avoid the warning
    useEffect(() => {
        dispatch({
            type: "INIT",
            payload: storedValue
        })
    }, []);

    // Update the stored value when the state changes to keep the localStorage in sync
    useEffect(() => {
        setStoredValue(storedFolderData);
    }, [storedFolderData]);

    // Add a new folder to the tree 
    const handleAddFolder = (name: string, parentId: string) => {
        dispatch({
            type: "ADD_FOLDER",
            payload:
            {
                name: name,
                parentId: parentId,
            }
        });
    };

    // Add a new file to the tree
    const handleAddFile = (name: string) => {
        let id = self.crypto.randomUUID();
    };

    // Delete a folder from the tree
    const handleDeleteFolder = (slug: string) => {
    };

    // Delete a file from the tree
    const handleDeleteFile = (id: File) => {
    };


    return {
        storedFolderData,
        handleAddFolder,
    };
};

export default useHandleTree;