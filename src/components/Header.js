import React from "react";
import { Container } from "react-bootstrap";
import ButtonUI from "./UI/ButtonUI";

const Header = (props) => {
  return (
    <Container className=" text-center text-bg-dark pt-1 pb-2">
      <h2>Student Manager</h2>
      <h4>All Students:0</h4>
      <ButtonUI className=" rounded-2 bg-primary-subtle" onClick={props.onShow}>
        Add New Student
      </ButtonUI>
    </Container>
  );
};

export default Header;
