import * as api from "../../index";

// export const updateCurruntSalaryApi = async (
//   currentDataRecords,
//   EmployeeID
// ) => {
//   try {
//     const currentData = {
//       EmployeeID: currentDataRecords.EmployeeID,
//       BasicSalary: currentDataRecords.BasicSalary,
//       VehicleAllowance: currentDataRecords.VehicleAllowance,
//       InternetAllowance: currentDataRecords.InternetAllowance,
//     };
//     const { data } = await api.updateCurrentSalarySheet(
//       currentData,
//       EmployeeID
//     );
//     return data;
//   } catch (error) {
//     console.log({ error: error.message });
//   }
// };

export const updateCurruntSalaryApi = async (currentDataRecords) => {
  try {
    const currentData = {
      EmployeeID: currentDataRecords.EmployeeID,
      BasicSalary: currentDataRecords.BasicSalary,
      VehicleAllowance: currentDataRecords.VehicleAllowance,
      InternetAllowance: currentDataRecords.InternetAllowance,
    };
    const { data } = await api.updateCurrentSalarySheet(currentData);
    return data;
  } catch (error) {
    console.log({ error: error.message });
  }
};
