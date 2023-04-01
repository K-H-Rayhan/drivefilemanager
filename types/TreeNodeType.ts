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