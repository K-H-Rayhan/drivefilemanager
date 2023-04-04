// Internal imports
import React from "react";

// External imports
import AddNewOptionsModal from "./AddNewOptionsModal";
import styles from "../../styles/Base.module.scss";

type Props = {
  children: React.ReactNode;
  backdrop?: boolean;
};

function AddNewOptions({ children, backdrop = false }: Props) {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className={styles.addNewOptions}
      onClick={() => {
        setShow(!show);
      }}
    >
      <div>{children}</div>
      <AddNewOptionsModal
        open={show}
        backdrop={backdrop}
        handleClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
}

export default AddNewOptions;
