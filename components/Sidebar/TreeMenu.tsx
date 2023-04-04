// Internal imports
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// External imports
import { FolderTree } from "@/types/TreeNodeType";
import { ResultContext } from "@/context/ResultsContext";
import TreeMenuButton from "./TreeMenuButton";

function TreeMenu({ storedFolderData, depthLevel, route }: any) {
  const { handleResults } = useContext(ResultContext);
  const router = useRouter();
  let paths = router.asPath.split("/");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (paths[depthLevel] == storedFolderData.slug) {
      // Results are sent to the parent component
      if (
        depthLevel == paths.length - 1 ||
        (router.pathname == "/" && router.isReady)
      ) {
        handleResults(storedFolderData);
      }
      setOpen(true);
    }
  }, [router.asPath]);

  return (
    <div
      style={{
        marginLeft: depthLevel * 10,
      }}
    >
      <TreeMenuButton
        depthLevel={depthLevel}
        route={route}
        router={router}
        storedFolderData={storedFolderData}
        open={open}
        toggleOpen={() => {
          setOpen(!open);
        }}
      />
      {open &&
        storedFolderData?.children?.map((e: FolderTree) => (
          <TreeMenu
            storedFolderData={e}
            key={e.id}
            depthLevel={depthLevel + 1}
            route={route + "/" + e.slug}
          />
        ))}
    </div>
  );
}

export default TreeMenu;
