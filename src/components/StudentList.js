import React, { useContext } from "react";
import StudentContext from "../store/student-context";
import Buttons from "../UI/Buttons";
import { Container, Table } from "react-bootstrap";

const StudentList = (props) => {
  const studentCtx = useContext(StudentContext);

  const deleteHandler = (id) => {
    studentCtx.removeStudent(id);
  };

  return (
    <Container>
      <h2 className="text-center my-4 text-info">Student List</h2>
      {studentCtx.totalStudents ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentCtx.students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>
                  <Buttons
                    className="btn btn-primary mx-2"
                    onClick={() => props.onEditStudent(student)}
                  >
                    Edit
                  </Buttons>
                  <Buttons
                    className="btn btn-danger"
                    onClick={() => deleteHandler(student.id)}
                  >
                    Delete
                  </Buttons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3 className="text-center my-4">No Students Found...</h3>
      )}
    </Container>
  );
};

export default StudentList;
