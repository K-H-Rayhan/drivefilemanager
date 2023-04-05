// Internal imports
import { createContext, useState } from "react";

// External imports
import { FolderTree } from "@/types/TreeNodeType";

type Props = {
  children: React.ReactNode;
};
type Results = {
  results: FolderTree;
  handleResults: (data: FolderTree) => void;
};

const ResultContext = createContext<Results>({
  results: {
    name: "",
    slug: "",
    id: "",
    children: [],
  },
  handleResults: () => {},
});
export const initialResultData = {
  name: "",
  slug: "",
  id: "",
  children: [],
  files: [],
};
const ResultProvider = ({ children }: Props) => {
  const [results, setResults] = useState<FolderTree>(initialResultData);

  // Save the results to the context
  const handleResults = (data: FolderTree) => {
    setResults(data);
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        handleResults,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultProvider };
