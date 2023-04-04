import { ActionType } from "@/components/Ui/CreateNewModal";
import { FolderTree } from "./TreeNodeType";

export type HandleTree = {
  storedFolderData: FolderTree[];
  handleAddFolder: (name: string, parentId: string) => void;
  handleEditFolder: (name: string, id: string) => void;
  handleDeleteFolder: (id: string) => void;
  handleAddFile: (name: string, type: ActionType, parentId: string) => void;
  handleEditFile: (id: string, name: string, parentId: string) => void;
  handleDeleteFile: (id: string, parentId: string) => void;
};

export type INITACTION = {
  type: "INIT";
  payload: FolderTree[];
};

export type ADDFOLDERACTION = {
  type: "ADD_FOLDER";
  payload: {
    name: string;
    parentId: string;
  };
};

export type DELETEFOLDER = {
  type: "DELETE_FOLDER";
  payload: {
    id: string;
  };
};

export type EDITFOLDER = {
  type: "EDIT_FOLDER";
  payload: {
    id: string;
    name: string;
  };
};

export type ADDFILEACTION = {
  type: "ADD_FILE";
  payload: {
    name: string;
    parentId: string;
    type: ActionType;
  };
};

export type EDITFILE = {
  type: "EDIT_FILE";
  payload: {
    id: string;
    name: string;
    parentId: string;
  };
};

export type DELETEFILE = {
  type: "DELETE_FILE";
  payload: {
    id: string;
    parentId: string;
  };
};

export type FOLDEROPTIONS = ADDFOLDERACTION | DELETEFOLDER | EDITFOLDER;

export type FILEOPTIONS = ADDFILEACTION | DELETEFILE | EDITFILE;

export type HandleTreeAction = INITACTION | FOLDEROPTIONS | FILEOPTIONS;

export type AddNode = {
  name: string;
  parentId: string;
};
export type AddFile = {
  name: string;
  parentId: string;
  type: ActionType;
};

export type EditNode = {
  name: string;
  id: string;
};
export type DeleteFile = {
  id: string;
  parentId: string;
};
export type EditFile = {
  id: string;
  name: string;
  parentId: string;
};
