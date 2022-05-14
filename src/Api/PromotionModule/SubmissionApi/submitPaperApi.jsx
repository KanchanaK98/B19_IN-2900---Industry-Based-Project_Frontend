import * as api from "../../index";

export const submitPaperApi = async (EmployeeID) => {
  try {
    const { data } = await api.submitPaper(EmployeeID);
    return data;
  } catch (error) {
    console.log(error);
  }
};
