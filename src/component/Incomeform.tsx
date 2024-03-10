// rfc - to generate the template react functional component

import React from "react";
import { Button } from "./Button";
// import { Button } from "./component/Button";
export default function Incomeform({
  handleChangeSource,
  handleSubmit,
  handleChangeAmount,
  handleChangeDate,
}: any) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="resourse"
        placeholder="Salary"
        onChange={handleChangeSource}
      />
      <input
        type="text"
        name="amount"
        placeholder="how much?"
        onChange={handleChangeAmount}
      />
      <input type="Date" name="Date" onChange={handleChangeDate} />
      <Button label="add income" />
    </form>
  );
}
