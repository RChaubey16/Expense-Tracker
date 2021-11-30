import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Method 1 : Multiple slices of state
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Method 2 : one single state for storing all the 3 values.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Method 1 :
    setEnteredTitle(event.target.value);

    // Method 2 A: Using one state:
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // Method 2 B: Using one state (the correct approach)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }; // New state snapshot
    // });
  };

  const amountChangeHandler = (event) => {
    // Method 1 :
    setEnteredTitle(event.target.value);

    // Method 2 A: Using one state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // Method 2 B: Using one state (the correct approach, dependant on previous state)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value};  // New state snapshot
    // });
  };

  const dateChangeHandler = (event) => {
    // Method 1 :
    setEnteredTitle(event.target.value);

    // Method 2 A: Using one state
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // Method 2 B: Using one state (the correct approach)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };  // New state snapshot
    // })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          <h2>{enteredTitle}</h2>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2021"
            max="31-12-2023"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
