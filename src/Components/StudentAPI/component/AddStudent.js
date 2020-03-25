import React, { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");

  const [student, setStudent] = useContext(StudentContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateAddress = e => {
    setAddress(e.target.value);
  };

  const updatePhoneNo = e => {
    setPhoneNo(e.target.value);
  };

  const updateCountry = e => {
    setCountry(e.target.value);
  };

  const addStudent = e => {
    e.preventDefault();
    setStudent(prevStudents => [
      ...prevStudents,
      { name: name, address: address, phoneNo: phoneNo, country: country }
    ]);
  };

  return (
    <div>
      <form onSubmit={addStudent}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={updateAddress}
        />
        <label>Phone No.:</label>
        <input
          type="text"
          name="phoneNo"
          value={phoneNo}
          onChange={updatePhoneNo}
        />
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={updateCountry}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
