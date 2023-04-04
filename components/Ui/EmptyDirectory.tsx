// Internal imports
import React from "react";
import {
  FcAddressBook,
  FcDataSheet,
  FcPicture,
  FcNews,
  FcAudioFile,
  FcNook,
} from "react-icons/fc";

// External imports
import styles from "../../styles/Base.module.scss";

type Props = {};

function EmptyDirectory({}: Props) {
  return (
    <div className={styles.emptyDirectory}>
      <div className={styles.headerText}>A place for all of your files</div>
      <div className={styles.middleAlign}>
        <div>
          <div>Google Docs, Sheets, Slides, and more</div>
          <div className={styles.leftIcons}>
            {leftIcons.map((e, i) => {
              const Icon = e.icon;
              return <Icon key={i} size={20} />;
            })}
          </div>
        </div>
        <img
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_my_drive.png"
          width={96}
          height={96}
        />
        <div>
          <div>Microsoft Office files and hundreds more</div>

          <div className={styles.rightIcons}>
            {rightIcons.map((e, i) => {
              const Icon = e.icon;
              return <Icon key={i} size={20} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerText}>
        Drag files and folders here to add them to Drive
      </div>
    </div>
  );
}

export default EmptyDirectory;

const leftIcons = [
  {
    icon: FcAddressBook,
  },
  {
    icon: FcDataSheet,
  },
  {
    icon: FcPicture,
  },
];
const rightIcons = [
  {
    icon: FcNews,
  },
  {
    icon: FcAudioFile,
  },
  {
    icon: FcNook,
  },
];
