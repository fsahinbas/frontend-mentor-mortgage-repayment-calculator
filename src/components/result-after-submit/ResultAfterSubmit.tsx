import React from "react";
import styles from "./resultAfterSubmit.module.css";

const ResultAfterSubmit = ({
  monthlyPayment,
  totalPayment,
}: {
  monthlyPayment: string;
  totalPayment: string;
}) => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`text-preset-2 ${styles.title}`}>Your results</h2>
      <p className={`text-preset-4 ${styles.desc}`}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className={styles.result}>
        <p className={`text-preset-4 ${styles.label}`}>
          Your monthly repayments
        </p>
        <p className={`text-preset-1 ${styles.monthlyPayment}`}>
          £{monthlyPayment}
        </p>
        <div className={`${styles.line}`}></div>
        <p className={`text-preset-4 ${styles.label}`}>
          Total you'll repay over the term
        </p>
        <p className={`text-preset-2 ${styles.totalPayment}`}>
          £{totalPayment}
        </p>
      </div>
    </div>
  );
};

export default ResultAfterSubmit;
