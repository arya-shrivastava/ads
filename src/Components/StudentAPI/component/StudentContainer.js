import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import StudentShow from "./StudentShow";
import { getstudentApiData } from "../selector";
import {
  studentApiDatas,
  studentAdd,
  studentEdit,
  studentDelete
} from "../action";
import Apk from "./StudentRenderer";
import { connect } from "react-redux";

export class StudentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentApiData: [],
      studentId: "",
      name: "",
      address: "",
      phoneNo: "",
      country: "",
      editStudentData: []
    };
  }

  componentDidMount() {
    axios.get(`https://2cceed56.ngrok.io/api/Student`).then(res => {
      this.props.studentApiDatas(res);
    });
  }

  onEditApi = studentId => {
    alert(studentId);

    const selectedStudent = this.props.studentApiData.find(
      each => each.studentId === studentId
    );

    this.setState({
      studentId: selectedStudent.studentId,
      name: selectedStudent.name,
      address: selectedStudent.address,
      phoneNo: selectedStudent.phoneNo,
      country: selectedStudent.country
    });

    const sId = selectedStudent.studentId;
    const sName = selectedStudent.name;
    const sAddress = selectedStudent.address;
    const sPhoneNo = selectedStudent.phoneNo;
    const sCountry = selectedStudent.country;
    const editStudentData = { sId, sName, sAddress, sPhoneNo, sCountry };
    this.props.studentEdit(editStudentData);
  };

  onDeleteApi = studentId => {
    const selectedStudent = this.props.studentApiData.find(
      each => each.studentId === studentId
    );
    const sId = selectedStudent.studentId;
    axios.delete(`https://2cceed56.ngrok.io/api/Student/${sId}`).then(res => {
      if (res.data === 1) {
        this.props.studentDelete(sId);
        alert("Data deleted successfully!");
      }
    });
  };

  render() {
    return (
      <Container>
        <Apk editStudentData={this.props.editStudentData} />
        <StudentShow
          studentApiData={this.props.studentApiData}
          onEditApi={this.onEditApi}
          onDeleteApi={this.onDeleteApi}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  studentApiData: getstudentApiData(state)
});

const mapDispatchToProps = {
  studentApiDatas,
  studentAdd,
  studentEdit,
  studentDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
