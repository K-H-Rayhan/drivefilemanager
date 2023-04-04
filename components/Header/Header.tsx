import React from "react";
import SearchBar from "./SearchBar";
import OtherOptions from "./OtherOptions";
import styles from "../../styles/Base.module.scss";
type Props = {};

function Header({}: Props) {
  return (
    <div className={styles.header}>
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
      <SearchBar />
      <OtherOptions />
    </div>
  );
}

export default Header;
