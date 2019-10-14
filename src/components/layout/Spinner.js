import React from "react";
import styles from "../../Styles/Spinner.module.scss";
function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
}

export default Spinner;
