import React from "react";
const APIRenderer = ({
  submitHandle,
  backButton,
  changeHandleName,
  changeHandleSalary,
  changeHandleAge,
  employee_name,
  employee_salary,
  employee_age,
  formname
}) => (
  <div>
    <table>
      <tr>
        <td colSpan="2" align="center">
          <strong>{formname}</strong>
        </td>
      </tr>
      <tr>
        <td>
          <label>Name: </label>
        </td>
        <td>
          <input
            type="text"
            value={employee_name}
            onChange={changeHandleName}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Salary: </label>
        </td>
        <td>
          <input
            type="text"
            value={employee_salary}
            onChange={changeHandleSalary}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>Age: </label>
        </td>
        <td>
          <input type="text" value={employee_age} onChange={changeHandleAge} />
        </td>
      </tr>
      <tr>
        <td align="center">
          <input type="button" value="Back" onClick={backButton} />
        </td>
        <td align="center">
          <input type="button" value="Submit" onClick={submitHandle} />
        </td>
      </tr>
    </table>
  </div>
);

export default APIRenderer;
