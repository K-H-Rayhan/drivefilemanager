// Internal imports
import React from "react";
import {
  MdOutlineCreateNewFolder,
  MdUploadFile,
  MdOutlineDriveFolderUpload,
} from "react-icons/md";
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from "react-icons/fc";

// External imports
import AddNewOptionsButton from "./AddNewOptionsButton";
import CreateNewModal, { ActionType } from "../Ui/CreateNewModal";
import styles from "../../styles/Base.module.scss";

type Props = {
  open: boolean;
  handleClose: () => void;
  backdrop?: boolean;
};
type OptionButtonProps = {
  name: string;
  icon?: React.FC<{ size: number }>;
  action?: ActionType;
};
function AddNewOptionsModal({ open, handleClose, backdrop = false }: Props) {
  const [actionType, setActionType] = React.useState<ActionType | null>(null);
  return (
    <>
      {open && (
        <div className={styles.addNewOptionsModal}>
          <div
            className={styles.addNewOptionsModalBackground}
            onClick={() => {
              handleClose();
            }}
            style={{
              backgroundColor: backdrop ? "rgba(0,0,0,.1)" : "transparent",
            }}
          ></div>
          <div
            className={styles.addNewOptionsModalButtons}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {options.map((option, i) => {
              return (
                <div
                  key={i}
                  className={styles.addNewOptionsModalButtonOptions}
                  style={{
                    borderTop: i != 0 ? "1px solid #dadce0" : "none",
                  }}
                >
                  {option.map((item: OptionButtonProps, index) => {
                    return (
                      <AddNewOptionsButton
                        key={index}
                        index={index}
                        item={item}
                        i={i}
                        handleClick={() => {
                          item.action && setActionType(item.action);
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {actionType && (
        <CreateNewModal
          action={actionType}
          handleClose={() => {
            setActionType(null);
            handleClose();
          }}
        />
      )}
    </>
  );
}
export default AddNewOptionsModal;

const options: {
  name: string;
  icon?: React.FC<{ size: number }>;
  action?: ActionType;
}[][] = [
  [
    {
      name: "New folder",
      icon: MdOutlineCreateNewFolder,
      action: ActionType.CREATE_FOLDER,
    },
  ],
  [
    {
      name: "File upload",
      icon: MdUploadFile,
    },
    {
      name: "Folder upload",
      icon: MdOutlineDriveFolderUpload,
    },
  ],
  [
    {
      name: "Gooogle Docs",
      icon: FcAddressBook,
      action: ActionType.CREATE_DOC,
    },
    {
      name: "Gooogle Sheets",
      icon: FcDataSheet,
      action: ActionType.CREATE_SHEET,
    },
    {
      name: "Gooogle Slides",
      icon: FcPicture,
      action: ActionType.CREATE_SLIDE,
    },
    {
      name: "Gooogle Forms",
      icon: FcNews,
      action: ActionType.CREATE_FORM,
    },
    {
      name: "More",
    },
  ],
];
