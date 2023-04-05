// Internal imports
import React, { useContext } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdFolder } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import Link from "next/link";

// External imports
import { FolderTree } from "@/types/TreeNodeType";
import { ResultContext } from "@/context/ResultsContext";
import styles from "../../styles/Base.module.scss";

type Props = {
  open: boolean;
  toggleOpen: () => void;
  depthLevel: number;
  storedFolderData: FolderTree;
  route: string;
  router: any;
};

function TreeMenuButton({
  open,
  toggleOpen,
  route,
  router,
  depthLevel,
  storedFolderData,
}: Props) {
  const { results } = useContext(ResultContext);

  return (
    <div
      onClick={() => {
        router.push(route == "" ? "/" : route);
      }}
      className={`${styles.TreeMenuButton} treeMenuButtonHover `}
      style={{
        backgroundColor:
          (results?.id == storedFolderData.id && router.asPath != "/") ||
          (router.asPath == "/" && storedFolderData.id == "root")
            ? "#C2E7FF"
            : "unset",
        padding: depthLevel > 0 ? "7px 20px" : "10px 10px",
      }}
    >
      <style jsx>{`
        .treeMenuButtonHover:hover {
          background-color: ${(results?.id != storedFolderData.id &&
            router.asPath != "/") ||
          (router.asPath == "/" && storedFolderData.id != "root")
            ? "rgb(218,220,224,0.6) !important"
            : ""};
        }
      `}</style>
      <div
        className={styles.TreeMenuButtonToggleIcon}
        onClick={(e) => {
          e.stopPropagation();
          toggleOpen();
        }}
      >
        {open ? (
          <IoMdArrowDropright
            color={"#444746"}
            style={{
              transform: "rotate(90deg)",
            }}
          />
        ) : (
          <IoMdArrowDropright color={"#444746"} />
        )}
      </div>
      <div className={styles.treeMenuButtonLink}>
        {depthLevel == 0 ? (
          <FiHardDrive size={18} />
        ) : (
          <MdFolder size={20} color={"#444746"} />
        )}
        {storedFolderData.name}
      </div>
    </div>
  );
}

export default TreeMenuButton;
