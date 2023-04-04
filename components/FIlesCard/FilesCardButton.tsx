// Internal imports
import React, { useContext } from "react";
import { MdFolder, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";

// External imports
import { File, FolderTree } from "@/types/TreeNodeType";
import { ResultContext } from "@/context/ResultsContext";
import { MenuContext } from "@/context/MenuContext";
import { FILETYPE, Selected } from "../Ui/Viewer";
import CreateNewModal, { ActionType } from "../Ui/CreateNewModal";
import IconButton from "../Ui/IconButton";
import FolderOptions from "../Ui/FolderOptions";
import styles from "../../styles/Base.module.scss";

type Props = {
  file: File | FolderTree;
  handleFileClick: (id: string, type: FILETYPE) => void;
  handleFileSelect: (id: string, type: FILETYPE) => void;
  selected: Selected[];
  type: FILETYPE;
};

function FilesCardButton({
  file,
  handleFileClick,
  handleFileSelect,
  selected,
  type,
}: Props) {
  const [selecting, setSelecting] = React.useState(false);
  const isSelected = selected.some((e) => e.id === file.id);
  const [openFolderOptions, setOpenFolderOptions] = React.useState(false);
  const { handleDeleteFolder, handleDeleteFile } = useContext(MenuContext);
  const { results } = useContext(ResultContext);
  const [actionType, setActionType] = React.useState<ActionType | null>(null);

  const getIcon = (type: ActionType) => {
    switch (type) {
      case ActionType.CREATE_DOC:
        return FcAddressBook;
      case ActionType.CREATE_SHEET:
        return FcDataSheet;
      case ActionType.CREATE_SLIDE:
        return FcPicture;
      case ActionType.CREATE_FORM:
        return FcNews;
      default:
        return MdFolder;
    }
  };
  const Icon = getIcon((file as any).type);

  return (
    <div
      onMouseEnter={() => setSelecting(true)}
      onMouseLeave={() => setSelecting(false)}
      onClick={(e) => {
        e.stopPropagation();
        handleFileClick(file.id, type);
      }}
      className={styles.filesCardButton}
      style={{
        backgroundColor: isSelected
          ? "#C2E7FF"
          : selecting
          ? "#E1E5E9"
          : "#F7F9FC",
        aspectRatio: type == FILETYPE.FILE ? 1 : "auto",
      }}
    >
      <div className={styles.fileCardButtonAlign}>
        <div className={styles.fileCardButtonIcon}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleFileSelect(file.id, type);
            }}
          >
            {selecting || isSelected ? (
              <>
                {isSelected ? (
                  <IconButton icon={MdCheckBox} size={20} />
                ) : (
                  <IconButton icon={MdCheckBoxOutlineBlank} size={20} />
                )}
              </>
            ) : type == FILETYPE.FOLDER ? (
              <IconButton icon={MdFolder} size={20} />
            ) : (
              <IconButton icon={Icon} size={20} />
            )}
          </div>
          <span>{file.name}</span>
        </div>
        <FolderOptions
          openFolderOptions={openFolderOptions}
          handleRemove={() => {
            if ((file as File).type) {
              handleDeleteFile(file.id, results.id);
            } else {
              handleDeleteFolder(file.id);
            }
          }}
          handleRename={() => {
            if ((file as File).type) {
              setActionType(ActionType.EDIT_FILE);
            } else {
              setActionType(ActionType.EDIT_FOLDER);
            }
          }}
          handleFolderOptions={() => {
            if (selected.length < 2) {
              setSelecting(false);
              setOpenFolderOptions(!openFolderOptions);
            }
          }}
        >
          <IconButton
            icon={BsThreeDotsVertical}
            size={16}
            color={selected.length > 1 ? "#1d1d1d5f" : "#1d1d1d"}
          />
        </FolderOptions>
      </div>
      {type == FILETYPE.FILE && (
        <div className={styles.filesCardButtonBigIconPadding}>
          <div className={styles.filesCardButtonBigIcon}>
            <Icon size={65} />
          </div>
        </div>
      )}

      {actionType && (
        <CreateNewModal
          edit={true}
          file={file}
          action={actionType}
          handleClose={() => {
            setActionType(null);
            setOpenFolderOptions(!openFolderOptions);
          }}
        />
      )}
    </div>
  );
}

export default FilesCardButton;
