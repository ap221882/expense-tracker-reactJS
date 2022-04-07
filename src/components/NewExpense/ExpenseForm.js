import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const titleChangeHandler = (e) => {
    // setuserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
    setenteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    // setuserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    setenteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    // setuserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2024-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
