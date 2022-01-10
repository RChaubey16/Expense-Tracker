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

  let expensesContent = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      //  Map function takes every element in the expenses array and passes it to the expense-item compo dynamically. 
      <ExpenseItem
        key={expense.key}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onfilterYearHandlerr={filterYearHandler}
        />

       {expensesContent}
       
      </Card>
    </div>
  );
}

export default Expenses;
