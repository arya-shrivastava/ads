import React from "react";

const APIDetails = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.apiData.map(each => (
            <tr key={each.id}>
              <td>
                <a onClick={() => props.onShowDetailsApi(each.id)}>
                  {each.employee_name}
                </a>
              </td>
              <td>
                <button onClick={() => props.onEditApi(each.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => props.onDeleteApi(each.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIDetails;
