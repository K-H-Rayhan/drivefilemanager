// Internal imports
import React from "react";
import { MdMenu } from "react-icons/md";

// External imports
import SearchBar from "./SearchBar";
import OtherOptions from "./OtherOptions";
import styles from "../../styles/Base.module.scss";
import HeaderIcon from "./HeaderIcon";
import IconButton from "../Ui/IconButton";

type Props = {
  toggleMobileMenu: () => void;
};

function Header({ toggleMobileMenu }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
        <IconButton icon={MdMenu} />
      </div>
      <HeaderIcon />
      <SearchBar />
      <OtherOptions />
    </div>
  );
}

export default Header;
