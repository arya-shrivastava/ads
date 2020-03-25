import React, { useState, useContext } from "react";
import Student from "./Student";
import Name from "./Student";
import { StudentContext } from "./StudentContext";
const StudentList = () => {
  const [student, setStudent] = useContext(StudentContext);
  return (
    <div>
      {student.map(each => (
        <Student
          name={each.name}
          address={each.address}
          phoneNo={each.phoneNo}
          country={each.country}
        />
      ))}
    </div>
  );
};

export default StudentList;
