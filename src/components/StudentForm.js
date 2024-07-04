import React, { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Modal from "../UI/Modal";
import Buttons from "../UI/Buttons";
import StudentContext from "../store/student-context";

const StudentForm = (props) => {
  const studentCtx = useContext(StudentContext);

  //setting multiple values
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  // load data into form for editing
  useEffect(() => {
    if (props.student) {
      setFormData(props.student);
    }
  }, [props.student]);

  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.student) {
      // edit student
      try {
        studentCtx.editStudent(formData);
      } catch (error) {
        console.error("Error updating student:", error);
      }
    } else {
      // add student
      try {
        await studentCtx.addStudent({
          ...formData,
          id: Date.now().toString(),
        });
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }

    //reset
    setFormData({
      id: "",
      name: "",
      age: "",
      address: "",
    });

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age :</Form.Label>
          <Form.Control
            type="number"
            min="0"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Buttons variant="primary" type="submit">
          {props.student ? "Update" : "Add"}
        </Buttons>
        <Buttons
          variant="secondary"
          type="button"
          className="mx-2"
          onClick={props.onClose}
        >
          Close
        </Buttons>
      </Form>
    </Modal>
  );
};

export default StudentForm;
