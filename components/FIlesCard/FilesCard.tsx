import { File, FolderTree } from "@/types/TreeNodeType";
import React from "react";
import { FILETYPE, Selected } from "../Ui/Viewer";
import FilesCardButton from "./FilesCardButton";
import styles from "../../styles/Base.module.scss";

type Props = {
  data: FolderTree[] | File[];
  handleFileClick: (id: string, type: FILETYPE) => void;
  handleFileSelect: (id: string, type: FILETYPE) => void;
  selected: Selected[];
  type: FILETYPE;
};

function FilesCard({
  data,
  handleFileClick,
  handleFileSelect,
  selected,
  type,
}: Props) {
  return (
    <div className={styles.filesCard}>
      <div className={styles.filesCardType}>{type}</div>
      <div className={styles.filesCardButtonGrid}>
        {data?.map((e) => (
          <div key={e.id}>
            <FilesCardButton
              type={type}
              selected={selected}
              handleFileClick={handleFileClick}
              handleFileSelect={handleFileSelect}
              file={e}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilesCard;
