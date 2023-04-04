import React, { HTMLAttributes } from "react";
import styles from "../../styles/Base.module.scss";

type Props = {
  icon: React.FC<{ size: number }>;
  size?: number;
  otherProps?: HTMLAttributes<HTMLDivElement>;
  color?: string;
  onClick?: (e: any) => void;
};

function IconButton({ icon, size = 24, ...otherProps }: Props) {
  const Icon = icon;
  return (
    <div className={styles.iconButton}>
      <Icon size={size} {...otherProps} />
    </div>
  );
}

export default IconButton;
