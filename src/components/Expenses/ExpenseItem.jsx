import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";


function ExpenseItem(props) {
  const [btnValue, setBtnValue] = useState(294.67);
  

  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
     
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div
          className="expense-item__price">
          ${props.amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;


