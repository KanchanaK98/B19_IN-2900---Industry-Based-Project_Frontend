import * as api from "../../index";

export const findEmployeeSalaryApi = async (EmployeeID, Month) => {
  try {
    const { data } = await api.findEmployeeSalarySheetByMonth(
      EmployeeID,
      Month
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
