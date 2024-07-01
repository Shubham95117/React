import React from "react";

const StudentForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" />
        <br />
        <input type="number" />
        <br />
        <input type="text" />
        <br />
        <button onClick={props.hideModal}>Close</button>
      </form>
    </div>
  );
};

export default StudentForm;
