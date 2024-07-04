import React from "react";
const StudentContext = React.createContext({
  totalStudents: 0,
  students: [],
  addStudent: (student) => {},
  removeStudent: (id) => {},
  editStudent: (student) => {},
});
export default StudentContext;
