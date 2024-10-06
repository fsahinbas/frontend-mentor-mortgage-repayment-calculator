import React from "react";
import styles from "./resultBeforeSubmit.module.css";

const ResultBeforeSubmit = () => {
  return (
    <div className={`${styles.container}`}>
      <img src="./assets/images/illustration-empty.svg" alt="" />
      <h2 className={`text-preset-2 ${styles.title}`}>Results shown here</h2>
      <p className={`text-preset-4 ${styles.desc}`}>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default ResultBeforeSubmit;
