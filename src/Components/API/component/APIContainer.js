import React, { useState, useEffect } from "react";
import axios from "axios";
import { getApiData } from "../selector";
import { apiDatas, employeeEdit, employeeDelete, employeeAdd } from "../action";
import { connect } from "react-redux";
import APIDetails from "./APIDetails";
import APIRenderer from "./APIRenderer";
import DemoHook from "./DemoHook";
import { BrowserRouter as Router } from "react-router-dom";

export class APIContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      employee_id: "",
      employee_name: "",
      employee_salary: "",
      employee_age: "",
      eData: [],
      formname: "",
      apidatashow: true
    };
  }

  hooks_API = () => {
    const [apidatashow, apidatashowValue] = useState(true);
    const [employee_id, employee_id_value] = useState("");
    const [employee_name, employee_name_value] = useState("");
    const [employee_salary, employee_salary_value] = useState("");
    const [employee_age, employee_age_value] = useState("");
    const [formname, formnameValue] = useState("");
  };

  componentDidMount() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`).then(res => {
      this.props.apiDatas(res.data);
    });
  }

  changeHandleName = event => {
    this.setState({ employee_name: event.target.value });
  };

  changeHandleSalary = event => {
    this.setState({ employee_salary: event.target.value });
  };

  changeHandleAge = event => {
    this.setState({ employee_age: event.target.value });
  };

  onEditApi = id => {
    //hooks

    //this.hooks_API.apidatashowValue(false);
    //this.hooks_API.formnameValue("Edit Form")

    //this.setState({ apidatashow: false, formname: "Edit Form" });
    //alert(this.state.apidatashow);
    //const selectedEmployee1 = this.props.apiData.find(each => each.id === id);
    //const employee_name1 = selectedEmployee1.employee_name;
    //const employee_salary1 = selectedEmployee1.employee_salary;
    //const employee_age1 = selectedEmployee1.employee_age;
    // axios
    //   .put(
    //     `http://dummy.restapiexample.com/api/v1/update/` +
    //       {
    //         employee_name: employee_name1,
    //         employee_salary: employee_salary1,
    //         employee_age: employee_age1
    //       }
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //     this.props.employeeEdit(response.data);
    //   });

    /*

    expected output

      {
        "status": "success",
        "data": {
          "name": "test",
          "salary": "123",
          "age": "23",
          "id": 25
        }
      }

    */

    const selectedEmployee = this.props.apiData.find(each => each.id === id);
    //this.employee_id_value(selectedEmployee.id);

    //hooks

    //this.employee_id_value(selectedEmployee.id);
    //this.employee_name_value(selectedEmployee.employee_name);
    //this.employee_salary_value(selectedEmployee.employee_salary);
    //this.employee_age_value(selectedEmployee.employee_age);

    this.setState({
      employee_id: selectedEmployee.id,
      employee_name: selectedEmployee.employee_name,
      employee_salary: selectedEmployee.employee_salary,
      employee_age: selectedEmployee.employee_age
    });

    const employee_id = selectedEmployee.id;
    const employee_name = selectedEmployee.employee_name;
    const employee_salary = selectedEmployee.employee_salary;
    const employee_age = selectedEmployee.employee_age;
    const eData = { employee_id, employee_name, employee_salary, employee_age };

    this.props.employeeEdit(eData); //useredit
  };

  onShowDetailsApi = id => {
    const selectedEmployee = this.props.apiData.find(each => each.id === id);
    alert(
      "Employee Details:" +
        "\n\n        Name: " +
        selectedEmployee.employee_name +
        "\n\n        Age: " +
        selectedEmployee.employee_age +
        "\n\n        Salary: " +
        selectedEmployee.employee_salary
    );
  };

  onDeleteApi = id => {
    // const selectedEmployee = this.props.apiData.find(each => each.id === id);
    // const eid = selectedEmployee.id;
    // axios
    //   .delete(`http://dummy.restapiexample.com/api/v1/delete/${eid}`)
    //   .then(res => {
    //     //this.props.employeeDelete(res.data);
    //     console.log(res.data);
    //   });
    /*
    
    expected output

    {
      "status": "success",
      "message": "successfully! deleted Records"
    }
    
    */

    const selectedEmployee = this.props.apiData.find(each => each.id === id);
    const employee_id = selectedEmployee.id;
    const employee_name = selectedEmployee.employee_name;
    const employee_salary = selectedEmployee.employee_salary;
    const employee_age = selectedEmployee.employee_age;
    const eData = { employee_id, employee_name, employee_salary, employee_age };
    this.props.employeeDelete(eData);
    alert("Employee Deleted!!!");
  };

  backButton = () => {
    //hooks

    //this.apidatashowValue(true);

    this.setState({ apidatashow: true });
  };

  addEmployee = () => {
    // hooks

    //this.apidatashowValue(false);
    //this.employee_id_value(undefined)
    //thhis.employee_name_value("");
    //thhis.employee_salary_value("");
    //tis.employee_age_value("");
    //this.formnameValue("Add Employee Form");

    this.setState({
      apidatashow: false,
      employee_id: undefined,
      employee_name: "",
      employee_salary: "",
      employee_age: "",
      formname: "Add Employee Form"
    });
  };

  submitHandle = event => {
    event.preventDefault();
    const {
      employee_name,
      employee_salary,
      employee_age,
      employee_id
    } = this.state;
    if (employee_id === undefined) {
      const newEmployee = {
        employee_name,
        employee_salary,
        employee_age,
        id: Math.random()
      };
      this.props.employeeAdd(newEmployee);

      //hooks

      //this.employee_name_value("");
      //this.employee_salary_value("");
      //this.employee_age_value("");
      //this.employee_id_value(undefined);

      this.setState({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        employee_id: undefined
      });
      alert("New employee added!!!");

      //hooks

      //this.apidatashowValue(true);

      this.setState({ apidatashow: true });
    } else {
      const employeeData = {
        employee_id,
        employee_name,
        employee_salary,
        employee_age
      };

      this.props.employeeEdit(employeeData);
      alert("Employee Details Updated!!!");

      //hooks

      //this.apidatashowValue(false);

      this.setState({ apidatashow: false });
    }
  };

  render() {
    console.log(this.hooks_API.apidatashow);
    return (
      <Router>
        <div>
          <DemoHook />
          <input
            type="button"
            onClick={this.addEmployee}
            value="Add Employee"
          />

          {this.state.apidatashow === true ? (
            <APIDetails
              apiData={this.props.apiData}
              onEditApi={this.onEditApi}
              onDeleteApi={this.onDeleteApi}
              onShowDetailsApi={this.onShowDetailsApi}
            />
          ) : (
            <APIRenderer
              submitHandle={this.submitHandle}
              backButton={this.backButton}
              changeHandleName={this.changeHandleName}
              changeHandleSalary={this.changeHandleSalary}
              changeHandleAge={this.changeHandleAge}
              employee_name={this.state.employee_name}
              employee_salary={this.state.employee_salary}
              employee_age={this.state.employee_age}
              formname={this.state.formname}
            />
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  apiData: getApiData(state)
});

const mapDispatchToProps = {
  apiDatas,
  employeeEdit,
  employeeDelete,
  employeeAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(APIContainer);
