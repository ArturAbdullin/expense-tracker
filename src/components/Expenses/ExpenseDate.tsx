import React from "react";
import "./ExpenseDate.css";

interface ExpenseDateProps extends React.HTMLAttributes<JSX.Element> {
  date?: Date
}

function ExpenseDate(props: ExpenseDateProps): JSX.Element {
  const month: string =
    props.date?.toLocaleString("en-US", {
      month: "long",
    }) || "";
  const year: string = props.date?.getFullYear().toString() || "";
  const day: string =
    props.date?.toLocaleString("en-US", {
      day: "2-digit",
    }) || "";

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
