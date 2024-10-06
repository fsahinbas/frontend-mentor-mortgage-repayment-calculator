import React from "react";
import styles from "./form.module.css";

const Form = ({
  handleCalc,
}: {
  handleCalc: ({
    monthlyPayment,
    totalPayment,
  }: {
    monthlyPayment: number;
    totalPayment: number;
  }) => void;
}) => {
  const [amount, setAmount] = React.useState(0);
  const [term, setTerm] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [type, setType] = React.useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleClick = () => {
    setIsSubmit(false);
    setAmount(0);
    setTerm(0);
    setRate(0);
    setType("");
    handleCalc({ monthlyPayment: 0, totalPayment: 0 });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    if (amount === 0 || term === 0 || rate === 0 || type === "") return;

    const P = amount;
    const n = term * 12;
    const r = rate / 100 / 12;
    let monthlyPayment = 0;
    let totalPayment = 0;
    if (type === "repayment") {
      monthlyPayment =
        (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      totalPayment = monthlyPayment * n;
    }
    if (type === "interest") {
      monthlyPayment = amount * r;
      totalPayment = monthlyPayment;
    }
    handleCalc({
      monthlyPayment,
      totalPayment,
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`text-preset-2 ${styles.title}`}>Mortgage Calculator</h1>
        <a
          href="#"
          className={`text-preset-4 ${styles.clrLink}`}
          onClick={handleClick}
        >
          Clear All
        </a>
      </header>
      <form onSubmit={handleSubmit} method="POST" noValidate>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="amount" className="text-preset-4">
              Mortgage Amount
            </label>
            <div className={styles.inputGroup}>
              <span className={`text-preset-3 ${styles.posLeft}`}>&pound;</span>
              <input
                type="number"
                id="amount"
                name="amount"
                min="1"
                required
                className={`text-preset-3 ${styles.input}`}
                value={amount === 0 ? "" : amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            {amount === 0 && isSubmit && (
              <span className={`text-preset-5 ${styles.error}`}>
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className={styles.row + " " + styles.sameRow}>
          <div className={styles.col}>
            <label htmlFor="term" className="text-preset-4">
              Mortgage term
            </label>
            <div className={styles.inputGroup}>
              <span className={`text-preset-3 ${styles.posRight}`}>years</span>
              <input
                type="number"
                id="term"
                name="term"
                min="1"
                max="100"
                required
                className={`text-preset-3 ${styles.input}`}
                value={term === 0 ? "" : term}
                onChange={(e) => setTerm(Number(e.target.value))}
              />
            </div>
            {term === 0 && isSubmit && (
              <span className={`text-preset-5 ${styles.error}`}>
                This field is required
              </span>
            )}
          </div>
          <div className={styles.col}>
            <label htmlFor="rate" className="text-preset-4">
              Interest Rate
            </label>
            <div className={styles.inputGroup}>
              <span className={`text-preset-3 ${styles.posRight}`}>%</span>
              <input
                type="number"
                id="rate"
                name="rate"
                min="1"
                max="100"
                required
                className={`text-preset-3 ${styles.input}`}
                value={rate === 0 ? "" : rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            {rate === 0 && isSubmit && (
              <span className={`text-preset-5 ${styles.error}`}>
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <label className="text-preset-4">Mortgage Type</label>
            <div className={styles.inputGroup}>
              <input
                type="radio"
                name="type"
                id="repayment"
                value="repayment"
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "var(--clr-lime)",
                }}
                onChange={(e) => setType(e.target.value)}
                checked={type === "repayment"}
              />
              <label
                htmlFor="repayment"
                className={`text-preset-3 ${styles.radioLabel}`}
              >
                Repayment
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="radio"
                name="type"
                id="interest"
                value="interest"
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "var(--clr-lime)",
                }}
                onChange={(e) => setType(e.target.value)}
                checked={type === "interest"}
              />
              <label
                htmlFor="interest"
                className={`text-preset-3 ${styles.radioLabel}`}
              >
                Interest Only
              </label>
            </div>
            {type === "" && isSubmit && (
              <span className={`text-preset-5 ${styles.error}`}>
                This field is required
              </span>
            )}
          </div>
        </div>
        <button className={`text-preset-3 ${styles.btn}`}>
          <img src="./assets/images/icon-calculator.svg" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default Form;
