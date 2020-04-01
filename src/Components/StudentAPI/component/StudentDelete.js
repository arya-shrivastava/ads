import React, { Component } from "react";
import axios from "axios";

class StudentDelete extends Component {
  delete = () => {
    axios.delete(`https://d20b3d8f.ngrok.io/api/Student/${1}`).then(res => {
      console.log(res);
      if (res.data === 1) {
        alert("Data deleted successfully!");
      }
    });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.delete()}>Delete</button>
      </div>
    );
  }
}

export default StudentDelete;
