import React from "react";
const FormRenderer = ({
  submitHandle,
  name,
  changeHandleName,
  changeHandleCity,
  city
}) => (
  <div>
    <form onSubmit={submitHandle}>
      <label>
        Name:
        <input type="text" value={name} onChange={changeHandleName} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={changeHandleCity} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default FormRenderer;
