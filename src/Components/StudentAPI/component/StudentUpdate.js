import React, { Component } from "react";
import axios from "axios";

class StudentUpdate extends Component {
  update = () => {
    const values = {
      StudentId: 39,
      Name: "hello",
      Address: "ajsldfls",
      PhoneNo: "546479",
      Country: "ipipip"
    };
    axios
      .put(`https://384bb24e.ngrok.io/api/Student/${values.StudentId}`, values)
      .then(res => {
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.update()}>Update</button>
      </div>
    );
  }
}

export default StudentUpdate;
