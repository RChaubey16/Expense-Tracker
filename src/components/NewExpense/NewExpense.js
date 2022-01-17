import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

    const [flag, setFlag] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setFlag(false);
    }

    const addNewExpenseHandler = () => {
        setFlag(true);
    }

    const onCancelExpense = () => {
        setFlag(false);
    }

    return (
        <div className = "new-expense">
            {!flag && <button type = "button" onClick = {addNewExpenseHandler}>Add New Expense</button>}
            {flag && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {onCancelExpense} />}   
        </div>
    )
}

export default NewExpense
