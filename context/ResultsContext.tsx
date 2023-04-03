import { createContext, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { FolderTree } from "@/types/TreeNodeType";



type Props = {
    children: React.ReactNode;
}
type Results = {
    results: FolderTree,
    handleResults: (data: FolderTree) => void
}

const ResultContext = createContext<Results>({
    results: {
        name: "",
        slug: "",
        id: "",
        children: []
    },
    handleResults: () => { }
});
export const initialResultData = {
    name: "",
    slug: "",
    id: "",
    children: [],
    files: []
}
const ResultProvider = ({ children }: Props) => {
    const [results, setResults] = useState<FolderTree>(initialResultData)

    const handleResults = (data: FolderTree) => {
        setResults(data)
    }

    return (
        <ResultContext.Provider
            value={{
                results,
                handleResults
            }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export { ResultContext, ResultProvider };

