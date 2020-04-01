import React from "react";
import { Container, Table, Button } from "react-bootstrap";
const StudentShow = props => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone No.</th>
            <th>Country</th>
          </tr>
        </thead>
        {props.apiData.map(each => (
          <tr key={each.id}>
            <td>{each.studentId}</td>
            <td>{each.name}</td>
            <td>{each.address}</td>
            <td>{each.phoneNo}</td>
            <td>{each.country}</td>
            <td>
              <Button variant="outline-secondary">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
        ))}
      </Table>
    </Container>
  );
};

export default StudentShow;
