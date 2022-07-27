import React from "react";
import "./ExpenseItem.css";

interface ExpenseItemProps extends React.HTMLAttributes<JSX.Element> {
  title?: string;
  amount?: string;
  date?: Date;
}

function ExpenseItem(props: ExpenseItemProps) {
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
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
