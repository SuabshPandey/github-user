import React from "react";
// import Skeleton from "react-loading-skeleton";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
