import { ActionType } from "@/components/Ui/CreateNewModal";

export type File = {
    name: string;
    id: string;
    type?: ActionType;
};

export type FolderTree = {
    name: string;
    slug: string;
    id: string;
    children: FolderTree[];
    files?: File[];
};