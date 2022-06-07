import * as api from "../../index";

export const scheduleExamApi = async (EmployeeID, examDetails) => {
  try {
    const { data } = await api.scheduleExam(EmployeeID, examDetails);
    console.log("scheduleExamApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
