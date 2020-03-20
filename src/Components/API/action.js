export const apiDatas = data => {
  return {
    type: "API_DATA",
    payload: data
  };
};
export const employeeEdit = data => {
  return {
    type: "EMPLOYEE_EDIT",
    payload: data
  };
};
export const employeeDelete = data => {
  return {
    type: "EMPLOYEE_DELETE",
    payload: data
  };
};
export const employeeAdd = data => {
  return {
    type: "EMPLOYEE_ADD",
    payload: data
  };
};
