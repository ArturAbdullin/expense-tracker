import React from "react";
import './Card.css';

interface CardProps extends React.HTMLAttributes<JSX.Element> {

}

function Card(props: CardProps):JSX.Element {
  const classes: string = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;