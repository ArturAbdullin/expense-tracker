import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

interface ExpenseItemProps extends React.HTMLAttributes<JSX.Element> {
  title?: string;
  amount?: string;
  date?: Date;
}

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
