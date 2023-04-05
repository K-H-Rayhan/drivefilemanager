// Internal imports
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdPersonAddAlt,
  MdLink,
  MdDriveFileMoveOutline,
  MdAddToDrive,
  MdDriveFileRenameOutline,
  MdOutlineColorLens,
  MdOutlineSearch,
  MdInfoOutline,
  MdOutlineFileDownload,
  MdStarOutline,
} from "react-icons/md";
import { RxMove } from "react-icons/rx";
import { HiOutlineTrash } from "react-icons/hi";

// External imports
import styles from "../../styles/Base.module.scss";

type Props = {
  children: React.ReactNode;
  openFolderOptions: boolean;
  handleFolderOptions: () => void;
  handleRemove: () => void;
  handleRename: () => void;
};

function FolderOptions({
  children,
  openFolderOptions,
  handleFolderOptions,
  handleRemove,
  handleRename,
}: Props) {
  const modalPos = React.useRef<HTMLDivElement>(null);
  const [openFromLeft, setOpenFromLeft] = useState(false);

  // Folder or File edit options
  const folderOptionAction = (action: string) => {
    switch (action) {
      case "RENAME":
        handleRename();
        break;
      case "REMOVE":
        handleRemove();
        break;
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleFolderOptions();

        // Get ref position from screen and decide if it should open from left or right
        const left = modalPos?.current?.getBoundingClientRect().left || 0;
        const right = modalPos?.current?.getBoundingClientRect().right || 0;
        const viewportWidth =
          window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth - right < left) {
          setOpenFromLeft(true);
        } else {
          setOpenFromLeft(false);
        }
      }}
      ref={modalPos}
      className={styles.folderOptions}
    >
      {children}
      <>
        {openFolderOptions && (
          <div>
            <div
              onClick={() => {
                handleFolderOptions();
              }}
              className={styles.folderOptionsBackground}
            ></div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={styles.folderOptionsModal}
              style={{
                right: openFromLeft ? "0" : "auto",
                left: openFromLeft ? "auto" : "0",
              }}
            >
              {options.map((e, i) => {
                return (
                  <div
                    className={styles.folderOptionsMenus}
                    style={{
                      borderBottom:
                        i != options.length - 1 ? "1px solid #e8eaed" : "",
                    }}
                  >
                    {e.map((item, index) => {
                      return (
                        <div
                          className={styles.folderOptionsMenu}
                          onClick={() => {
                            item.action && folderOptionAction(item.action);
                          }}
                        >
                          <div className={styles.folderOptionsMenuLeft}>
                            <div className={styles.folderOptionsMenuIcon}>
                              {item.icon && <item.icon size={20} />}
                            </div>
                            <div className={styles.folderOptionsMenuName}>
                              {item.name}
                            </div>
                          </div>
                          {item.arrow && (
                            <div className={styles.folderOptionsMenuArrowIcon}>
                              <MdOutlineKeyboardArrowRight
                                size={20}
                                color={"#1d1d1d9f"}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default FolderOptions;

const options = [
  [
    {
      name: "Open with",
      arrow: true,
      icon: RxMove,
    },
  ],
  [
    {
      name: "Share",
      arrow: false,
      icon: MdPersonAddAlt,
    },
    {
      name: "Get a link",
      arrow: false,
      icon: MdLink,
    },
    {
      name: "Add shortcut to drive",
      arrow: false,
      icon: MdStarOutline,
    },
    {
      name: "Move to",
      arrow: false,
      icon: MdDriveFileMoveOutline,
    },
    {
      name: "Add to starred",
      arrow: false,
      icon: MdAddToDrive,
    },
    {
      name: "Rename",
      arrow: false,
      icon: MdDriveFileRenameOutline,
      action: "RENAME",
    },
    {
      name: "Change color",
      arrow: true,
      icon: MdOutlineColorLens,
    },
    {
      name: "Search within All commands",
      arrow: false,
      icon: MdOutlineSearch,
    },
  ],
  [
    {
      name: "View details",
      arrow: false,
      icon: MdInfoOutline,
    },
    {
      name: "Download",
      arrow: false,
      icon: MdOutlineFileDownload,
    },
  ],
  [
    {
      name: "Remove",
      arrow: false,
      icon: HiOutlineTrash,
      action: "REMOVE",
    },
  ],
];
