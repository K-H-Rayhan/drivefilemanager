// Internal imports
import React from "react";
import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

// External imports
import styles from "../../styles/Base.module.scss";

type Props = {};

function capitalizeFirstLetter(string: string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", " ");
}

function BreadCrumb({}: Props) {
  const router = useRouter();
  const paths = [
    ...router.asPath.split("/").map((e) => capitalizeFirstLetter(e)),
  ];
  paths[0] = "My Drive";
  return (
    <div className={styles.breadCrumb}>
      {paths.map((e, i) => (
        <span key={Math.random()}>
          {i != 0 && (
            <RiArrowRightSLine
              size={22}
              style={{
                marginInline: "8px",
              }}
            />
          )}{" "}
          {e}
        </span>
      ))}
    </div>
  );
}

export default BreadCrumb;
