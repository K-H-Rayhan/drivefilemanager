import React from "react";
import styles from "../../styles/Base.module.scss";

type Props = {};

function HeaderIcon({}: Props) {
  return (
    <div className={styles.headerIcon}>
      <img
        src={
          "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
        }
        alt=""
        width={40}
      />
      <div>Drive</div>
    </div>
  );
}

export default HeaderIcon;
