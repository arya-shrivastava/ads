import axios from "axios";
import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import {
  Container,
  Row,
  Button,
  InputGroup,
  Alert,
  Modal
} from "react-bootstrap";
import StudentShow from "./StudentShow";
import StudentUpdate from "./StudentUpdate";
import StudentDelete from "./StudentDelete";
import { getApiData } from "../selector";
import { apiDatas } from "../action";
import { connect } from "react-redux";

export class StudentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      studentId: "",
      name: "",
      address: "",
      phoneNo: "",
      country: ""
    };
  }

  componentDidMount() {
    axios.get(`https://d20b3d8f.ngrok.io/api/Student`).then(res => {
      if (!res) {
        alert("No response from API");
      } else {
        console.log(res.data);
        this.props.apiDatas(res);
      }
    });
  }

  render() {
    return (
      <Container>
        <Apk />
        <StudentShow
          apiData={this.props.apiData}
          onEditApi={this.onEditApi}
          onDeleteApi={this.onDeleteApi}
        />
        <StudentUpdate />
        <StudentDelete />
      </Container>
    );
  }
}

function FormModal(props) {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ name: "", address: "", phoneNo: "", country: "" }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = <Alert variant="info">Please enter name!</Alert>;
            } else if (!values.address) {
              errors.address = (
                <Alert variant="info">Please enter address!</Alert>
              );
            } else if (!values.phoneNo) {
              errors.phoneNo = (
                <Alert variant="info">Please enter phone number</Alert>
              );
            } else if (!values.country) {
              errors.country = (
                <Alert variant="info">Please select country</Alert>
              );
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              axios
                .post("https://d20b3d8f.ngrok.io/api/Student", values)
                .then(res => {
                  if (res.data === 1) {
                    alert("Data you have entered is saved successfully");
                  }
                });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Container>
              <Form>
                <Row>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Name: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Field type="text" name="name" />
                  </InputGroup>
                  <ErrorMessage name="name" component="div" />
                </Row>
                <Row>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Address: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Field type="text" name="address" />
                  </InputGroup>
                  <ErrorMessage name="address" component="div" />
                </Row>
                <Row>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Phone No: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Field type="tel" name="phoneNo" />
                  </InputGroup>
                  <ErrorMessage name="phoneNo" component="div" />
                </Row>
                <Row>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Country: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Field as="select" name="country">
                      <option value="India">India</option>
                      <option value="Caribbean">Caribbean</option>
                      <option value="Oceania">Oceania</option>
                      <option value="Hawaii">Hawaii</option>
                    </Field>
                  </InputGroup>
                  <ErrorMessage name="country" component="div" />
                </Row>
                <Row>
                  <Button variant="dark" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Row>
              </Form>
            </Container>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Apk() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Button
        size="lg"
        className="mb-2"
        variant="primary"
        onClick={() => setModalShow(true)}
        block
      >
        Form
      </Button>

      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

const mapStateToProps = state => ({
  apiData: getApiData(state)
});

const mapDispatchToProps = {
  apiDatas
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
