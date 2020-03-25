import React from "react";

const Name = ({ name, address, phoneNo, country }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phoneNo}</td>
            <td>{country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Name;
