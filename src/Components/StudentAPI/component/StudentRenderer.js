import React from "react";
import axios from "axios";
import {
  Modal,
  Alert,
  Form,
  Button,
  Container,
  Row,
  InputGroup
} from "react-bootstrap";
import { Formik, ErrorMessage, Field } from "formik";

function FormModal(props) {
  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title>
          {props.formname} <br />
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: props.name,
            address: props.address,
            phoneNo: props.phoneNo,
            country: props.country
          }}
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
                .post("https://2cceed56.ngrok.io/api/Student", values)
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
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
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

function Apk(editStudentData) {
  const [modalShow, setModalShow] = React.useState(false);
  const formname = "Student Data";
  const studentId = editStudentData.studentId;
  const name = editStudentData.name;
  const address = editStudentData.address;
  const phoneNo = editStudentData.phoneNo;
  const country = editStudentData.country;
  return (
    <Container>
      <Button
        className="mb-2"
        variant="primary"
        onClick={() => setModalShow(true)}
        block
      >
        Form
      </Button>

      <FormModal
        show={modalShow}
        formname={formname}
        name={name}
        studentId={studentId}
        address={address}
        phoneNo={phoneNo}
        country={country}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Apk;
