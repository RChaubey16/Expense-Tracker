import React from "react";
import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
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

        {/* Map function takes every element in the expenses array and passes it to the expense-item compo dynamically. */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
