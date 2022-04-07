import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter.js';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [year, setYear] = useState('2022');

  const yearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={year} year={yearHandler} />
        {/* [<El1/>,<El2/>] */}
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </>
  );
};

export default Expenses;
