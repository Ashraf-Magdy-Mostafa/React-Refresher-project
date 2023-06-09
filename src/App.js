import { List } from "./newList";
import { useState } from "react";
import { NewExpense } from "./comp/NewExpense/NewExpense";
import { Card } from "./comp/card";
import { FilteredExpenses } from "./comp/filteredExpenses";
import ExpenseChart from "./comp/Chart/ExpenseChart";
export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 12),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 6, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 8, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  /* 
    YEAR FILTER SECTION //*
      */
  const [year, setYear] = useState("2019");
  function yearHandler(event) {
    // sets the year based on selected value
    console.log(event.target.value);
    setYear(event.target.value);
  }

  const filteredExpensesArray = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year; //2021
    //return (filtered array where checks to be true the give condition above)
  });

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>Let's get star2ted!</h2>
      <FilteredExpenses selected={year} onChangeYear={yearHandler} />
      <ExpenseChart expenses={filteredExpensesArray} />
      <List onlist={filteredExpensesArray} />
    </Card>
  );
}

export default App;
