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
        <tbody>
          {props.studentApiData.map(each => (
            <tr key={each.studentId}>
              <td>{each.studentId}</td>
              <td>{each.name}</td>
              <td>{each.address}</td>
              <td>{each.phoneNo}</td>
              <td>{each.country}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => props.onEditApi(each.studentId)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => props.onDeleteApi(each.studentId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentShow;
