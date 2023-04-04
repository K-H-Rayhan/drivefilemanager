import React from "react";
import { GrAdd } from "react-icons/gr";
import AddNewOptions from "../AddNewOptions/AddNewOptions";
import styles from "../../styles/Base.module.scss";

type Props = {};

function AddNewButton({}: Props) {
  return (
    <AddNewOptions>
      <div className={styles.addNewButton}>
        <GrAdd size={20} />
        New
      </div>
    </AddNewOptions>
  );
}

export default AddNewButton;
