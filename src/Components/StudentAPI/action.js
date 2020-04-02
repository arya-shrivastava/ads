export const studentApiDatas = data => {
  return {
    type: "STUDENT_API_DATA",
    payload: data
  };
};

export const studentEdit = data => {
  return {
    type: "STUDENT_EDIT",
    payload: data
  };
};

export const studentDelete = data => {
  return {
    type: "STUDENT_DELETE",
    payload: data
  };
};

export const studentAdd = data => {
  return {
    type: "STUDENT_ADD",
    payload: data
  };
};
