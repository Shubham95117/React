import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Buttons from "../UI/Buttons";
import StudentContext from "../store/student-context";
import logo from "../assets/logo.png";
const Header = (props) => {
  const studentCtx = useContext(StudentContext);
  return (
    <Container fluid className="bg-dark">
      <div className="d-flex justify-content-center pt-2 ">
        <img src={logo} alt="logo_img" className="rounded-1" />
      </div>

      <h1 className="text-center text-light">Student Manager</h1>
      {/* set dynamically  */}
      <h2 className="text-center text-info">
        Total Students:{studentCtx.totalStudents}
      </h2>
      <div className="d-flex justify-content-center ">
        {" "}
        <Buttons className="mb-2" onClick={props.onShowModal}>
          Add New Students
        </Buttons>
      </div>
    </Container>
  );
};

export default Header;
