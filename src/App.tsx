import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ResultBeforeSubmit from "./components/result-before-submit/ResultBeforeSubmit";
import ResultAfterSubmit from "./components/result-after-submit/ResultAfterSubmit";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleCalc = ({
    monthlyPayment,
    totalPayment,
  }: {
    monthlyPayment: number;
    totalPayment: number;
  }) => {
    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
  };
  return (
    <>
      <main>
        <Form handleCalc={handleCalc} />
      </main>
      {monthlyPayment === 0 && totalPayment === 0 && <ResultBeforeSubmit />}
      {monthlyPayment > 0 && totalPayment > 0 && (
        <ResultAfterSubmit
          monthlyPayment={monthlyPayment.toFixed(2)}
          totalPayment={totalPayment.toFixed(2)}
        />
      )}
    </>
  );
}

export default App;
