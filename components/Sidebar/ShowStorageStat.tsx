// Internal imports
import React from "react";

// External imports
import styles from "../../styles/Base.module.scss";

type Props = {};

function ShowStorageStat({}: Props) {
  return (
    <div className={styles.showStorageStat}>
      <div className={styles.progress}>
        <div className={styles.progressDone}></div>
      </div>

      <div className={styles.storage}>
        <div>7.5 GB of 15 GB used</div>
      </div>
      <div className={styles.storageButton}>Buy storage</div>
    </div>
  );
}

export default ShowStorageStat;
