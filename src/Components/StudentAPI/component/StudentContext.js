import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = props => {
  const [student, setStudent] = useState([
    {
      studentId: 1,
      name: "Tiger Nixon",
      address: "Saint Lucia",
      phoneNo: "1234567890",
      country: "Caribbean"
    },
    {
      studentId: 2,
      name: "Garrett Winters",
      address: "Bora Bora",
      phoneNo: "0123456789",
      country: "French Polynesia"
    },
    {
      studentId: 3,
      name: "Ashton Cox",
      address: "Fiji",
      phoneNo: "3958695836",
      country: "Oceania"
    },
    {
      studentId: 4,
      name: "Ashton Cox",
      address: "Maui",
      phoneNo: "1462687920",
      country: "Hawaii"
    }
  ]);
  return (
    <StudentContext.Provider value={[student, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
};
