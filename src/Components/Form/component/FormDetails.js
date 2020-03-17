import React from "react";

const FormDetails = props => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>City</td>
        </tr>
      </thead>
      <tbody>
        {props.users.map(each => (
          <tr key={each.id}>
            <td>{each.name}</td>
            <td>{each.city}</td>
            <td>
              <button onClick={() => props.onEdit(each.id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => props.onDelete(each.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FormDetails;
