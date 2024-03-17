import React from "react";
import { Button } from "@mui/material";
import { Income } from "./Incomewrapper";
import { Expense } from "./Expensewrapper";

type ListItemProps = {
  items: Income[] | Expense[];
  handleDelete: (id: number) => void;
};

export function ListItems({ items, handleDelete }: ListItemProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p>{item.source}</p>
          <p>{item.amount}</p>
          <p>{item.date}</p>
          <Button onClick={() => handleDelete(item.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
}
