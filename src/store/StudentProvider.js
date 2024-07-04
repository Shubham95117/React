import React, { useEffect, useState } from "react";
import StudentContext from "./student-context";
import axios from "axios";
const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);

  // Fetching students from Firebase
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://student-manager-3f25c-default-rtdb.firebaseio.com/students.json`
        );
        const fetchedStudents = [];
        for (const key in response.data) {
          fetchedStudents.push({
            id: key,
            ...response.data[key],
          });
        }
        setStudents(fetchedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  const addStudentHandler = async (student) => {
    try {
      const response = await axios.post(
        `https://student-manager-3f25c-default-rtdb.firebaseio.com/students.json`,
        student
      );
      const newStudent = { id: response.data.name, ...student };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteStudentHandler = async (id) => {
    try {
      await axios.delete(
        `https://student-manager-3f25c-default-rtdb.firebaseio.com/students/${id}.json`
      );
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  const editStudentHandler = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };
  return (
    <StudentContext.Provider
      value={{
        students: students,
        totalStudents: students.length,
        addStudent: addStudentHandler,
        removeStudent: deleteStudentHandler,
        editStudent: editStudentHandler,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
