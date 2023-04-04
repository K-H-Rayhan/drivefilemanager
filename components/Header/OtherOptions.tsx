import React from "react";
import { MdOutlineSettings, MdOutlineOfflinePin } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import IconButton from "../Ui/IconButton";
import styles from "../../styles/Base.module.scss";
type Props = {};

function OtherOptions({}: Props) {
  return (
    <div className={styles.otherOptions} style={{}}>
      <IconButton icon={MdOutlineOfflinePin} />
      <IconButton icon={AiOutlineQuestionCircle} size={23} />
      <IconButton icon={MdOutlineSettings} />
      <IconButton icon={IoApps} size={20} />
      <IconButton icon={CgProfile} />
    </div>
  );
}

export default OtherOptions;
