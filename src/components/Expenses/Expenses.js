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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onfilterYearHandlerr={filterYearHandler}
        />
        {/* Map function takes every element in the expenses array and passes it to the expense-item compo dynamically. */}
        {props.items.map((expense) => (
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
