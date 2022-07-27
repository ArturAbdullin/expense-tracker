import React from "react";
import "./ExpenseItem.css";

interface ExpenseItemProps extends React.HTMLAttributes<JSX.Element> {
  title?: string;
  amount?: string;
  date?: Date;
}

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <div className="expense-item">
      <div>{props.date?.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
