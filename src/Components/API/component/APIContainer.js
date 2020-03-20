import React from "react";
import axios from "axios";
import { getApiData } from "../selector";
import { apiDatas, employeeEdit, employeeDelete, employeeAdd } from "../action";
import { connect } from "react-redux";
import APIDetails from "./APIDetails";
import APIRenderer from "./APIRenderer";
import DemoHook from "./DemoHook";
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
      apidatashow: true,
      formname: ""
    };
  }

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
    this.setState({ apidatashow: false, formname: "Edit Form" });
    // alert(this.state.apidatashow);
    // const selectedEmployee1 = this.props.apiData.find(each => each.id === id);
    // const employee_name1 = selectedEmployee1.employee_name;
    // const employee_salary1 = selectedEmployee1.employee_salary;
    // const employee_age1 = selectedEmployee1.employee_age;
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

    this.props.employeeEdit(eData);
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
    this.setState({ apidatashow: true });
  };

  addEmployee = () => {
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
      this.setState({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        employee_id: undefined
      });
      alert("New employee added!!!");
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
      this.setState({ apidatashow: false });
    }
  };

  render() {
    return (
      <div>
        <DemoHook />
        <input type="button" onClick={this.addEmployee} value="Add Employee" />
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
