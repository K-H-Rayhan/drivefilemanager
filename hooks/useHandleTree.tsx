import { useState, useReducer, useEffect } from "react";
import useLocalStorage, { FolderTree } from "@/hooks/useLocalStorage";

type HandleTree = {
    storedFolderData: FolderTree[],
    handleAddFolder: (name: string, parentId: string) => void,
    handleEditFolder: (name: string, id: string) => void,
    handleDeleteFolder: (id: string) => void,
    handleAddFile: (name: string, parentId: string) => void,
    handleEditFile: (name: string, id: string, parentId: string) => void,
    handleDeleteFile: (id: string, parentId: string) => void,
}

type INITACTION = {
    type: "INIT";
    payload: FolderTree[];
};

type ADDFOLDERACTION = {
    type: "ADD_FOLDER";
    payload: {
        name: string,
        parentId: string,
    };
};

type DELETEFOLDER = {
    type: "DELETE_FOLDER";
    payload: {
        id: string,
    };
};

type EDITFOLDER = {
    type: "EDIT_FOLDER";
    payload: {
        id: string,
        name: string,
    };
};

type ADDFILEACTION = {
    type: "ADD_FILE";
    payload: {
        name: string,
        parentId: string,
    };
};

type EDITFILE = {
    type: "EDIT_FILE";
    payload: {
        id: string,
        name: string,
        parentId: string,
    };
};

type DELETEFILE = {
    type: "DELETE_FILE";
    payload: {
        id: string,
        parentId: string,
    };
};

type FOLDEROPTIONS = ADDFOLDERACTION | DELETEFOLDER | EDITFOLDER

type FILEOPTIONS = ADDFILEACTION | DELETEFILE | EDITFILE

type HandleTreeAction = INITACTION | FOLDEROPTIONS | FILEOPTIONS

type AddNode = {
    name: string,
    parentId: string,
}

type EditNode = {
    name: string,
    id: string,
}

const generateSlug = (data: string) => data.replace(/\s/g, "-").toLowerCase()


// Add node
const addNode = (data: AddNode, initData: FolderTree[]): FolderTree[] => {
    const newData = [...initData]
    for (let i = 0; i < newData.length; i++) {
        // If parent id found
        if (newData[i].id == data.parentId) {
            const slug = generateSlug(data.name)
            // If slug doesn't exist on that child add item
            if (newData[i].children.some(item => item.slug == slug))
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

//  Edit node
const editNode = (data: EditNode, initData: FolderTree[]): FolderTree[] => {
    const newData = [...initData]
    for (let i = 0; i < newData.length; i++) {
        //  Find index of element
        const findElementIndex = newData[i].children.findIndex(item => item.id == data.id)
        // If element found
        if (findElementIndex >= 0) {
            const slug = generateSlug(data.name)
            // If slug doesn't exist on that child allow edit item with that slug
            if (!newData[i].children.some(item => item.slug == slug)) {
                newData[i].children[findElementIndex] = {
                    name: data.name,
                    slug: slug,
                    id: data.id,
                    children: newData[i].children[findElementIndex].children,
                }
                return newData
            }
        }
        if (newData[i].children.length > 0) {
            editNode(data, newData[i].children)
        }
    }
    return newData
}

// Delete node
const deleteNode = (id: string, initData: FolderTree[]): FolderTree[] => {
    const newData = [...initData]
    for (let i = 0; i < newData.length; i++) {
        // If delete node id found
        if (newData[i].children.some(item => item.id == id)) {
            // Filter out that node
            newData[i].children = newData[i].children.filter(item => item.id != id)
            return newData
        }
        if (newData[i].children.length > 0) {
            deleteNode(id, newData[i].children)
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
        case "EDIT_FOLDER":
            return editNode({
                name: action.payload.name,
                id: action.payload.id,
            }, storedFolderData)
        case "DELETE_FOLDER":
            return deleteNode(action.payload.id, storedFolderData)
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

    // Edit a folder from the tree
    const handleEditFolder = (name: string, id: string) => {
        dispatch({
            type: "EDIT_FOLDER",
            payload:
            {
                id: id,
                name: name,
            }
        });
    };

    // Delete a folder from the tree
    const handleDeleteFolder = (id: string) => {
        dispatch({
            type: "DELETE_FOLDER",
            payload:
            {
                id: id
            }
        });
    };

    // Add a new file to the tree
    const handleAddFile = (name: string, parentId: string) => {
        dispatch({
            type: "ADD_FILE",
            payload:
            {
                name: name,
                parentId: parentId,
            }
        });
    };
    // Edit a new file to the tree, parent id to make it efficient
    const handleEditFile = (id: string, name: string, parentId: string) => {
        dispatch({
            type: "EDIT_FILE",
            payload:
            {
                id: id,
                name: name,
                parentId: parentId,
            }
        });
    };


    // Delete a file from the tree, parent id to make it efficient
    const handleDeleteFile = (id: string, parentId: string) => {
        dispatch({
            type: "DELETE_FILE",
            payload:
            {
                id: id,
                parentId: parentId,
            }
        });
    };


    return {
        storedFolderData,
        handleAddFolder,
        handleEditFolder,
        handleDeleteFolder,
        handleAddFile,
        handleEditFile,
        handleDeleteFile,
    };
};

export default useHandleTree;