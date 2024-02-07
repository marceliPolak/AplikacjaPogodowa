import React from "react";
import "./Form.scss";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.change}
      />
      <button disabled={!props.value}>Wyszukaj miasta</button>
    </form>
  );
};

export default Form;
