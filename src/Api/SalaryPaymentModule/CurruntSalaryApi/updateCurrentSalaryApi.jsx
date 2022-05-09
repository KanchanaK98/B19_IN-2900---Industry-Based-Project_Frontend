import * as api from "../../index";

export const updateCurruntSalaryApi = async (EmployeeID, currentData) => {
  try {
    const { data } = await api.updateCurrentSalarySheet(
      EmployeeID,
      currentData
    );
    console.log("createCurruntSalaryApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
