import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const showModalHandler = () => {
    setModalShow(true);
  };
  const hideModalHandler = () => {
    setModalShow(false);
  };

  const editStudentHandler = (student) => {
    setEditingStudent(student);
    showModalHandler();
  };
  return (
    <div className="background">
      <Header onShowModal={showModalHandler} />
      {modalShow && (
        <StudentForm onClose={hideModalHandler} student={editingStudent} />
      )}
      <StudentList onEditStudent={editStudentHandler} />
    </div>
  );
}

export default App;
