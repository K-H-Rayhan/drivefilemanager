import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../../styles/Base.module.scss";

type Props = {
  icon: React.FC<{ size: number }>;
  name: string;
  size?: number;
  showarrow?: boolean;
};

function OtherMenus({ icon, name, size = 18, showarrow = true }: Props) {
  const Icon = icon;

  return (
    <div className={styles.otherMenus}>
      {showarrow && <IoMdArrowDropright style={{}} />}
      <div
        style={{
          marginLeft: showarrow ? "0px" : "14px",
        }}
      >
        <Icon size={size} />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default OtherMenus;
