import React from "react";
import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const filterYearHandler = (year) => {
    setYear(year);
  };

  // filter array method always returns a new array and does not modify the array it is filtering
  // Hence we are storing the new array in filteredExpenses.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onfilterYearHandlerr={filterYearHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
