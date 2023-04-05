// Internal imports
import React, { useContext } from "react";
import { BsTrash, BsPeople, BsStar } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

// External imports
import { FolderTree } from "@/types/TreeNodeType";
import { MenuContext } from "@/context/MenuContext";
import TreeMenu from "./TreeMenu";
import AddNewButton from "./AddNewButton";
import OtherMenus from "./OtherMenus";
import ShowStorageStat from "./ShowStorageStat";
import styles from "../../styles/Base.module.scss";
import HeaderIcon from "../Header/HeaderIcon";
import OtherOptions from "../Header/OtherOptions";

type Props = {
  mobile: boolean;
};

function Sidebar({ mobile }: Props) {
  const { storedFolderData } = useContext(MenuContext);
  console.log(mobile);

  return (
    <div
      onBlur={() => {
        console.log("outman");
      }}
      className={` ${styles.sidebar} ${
        !mobile ? styles.sidebarDesktop : styles.sidebarMobile
      }`}
    >
      <div>
        <AddNewButton />
        {storedFolderData?.map((e: FolderTree) => (
          <TreeMenu
            storedFolderData={e}
            depthLevel={0}
            route={e.slug}
            key={e.id}
          />
        ))}
        <div className={styles.treeAlign}>
          {otherMenus?.map((e, i) => (
            <OtherMenus
              icon={e.icon}
              name={e.name}
              showarrow={i == 0 && true}
              key={e.name}
            />
          ))}
          <ShowStorageStat />
        </div>
      </div>
      <div>
        {mobile && <HeaderIcon />}
        {mobile && <OtherOptions />}
      </div>
    </div>
  );
}

export default Sidebar;

const otherMenus = [
  {
    name: "Computers",
    icon: HiOutlineComputerDesktop,
  },
  {
    name: "Shared with me",
    icon: BsPeople,
  },
  {
    name: "Recent",
    icon: BiTimeFive,
  },
  {
    name: "Starred",
    icon: BsStar,
  },
  {
    name: "Trash",
    icon: BsTrash,
  },
  {
    name: "Storage",
    icon: AiOutlineCloud,
  },
];
