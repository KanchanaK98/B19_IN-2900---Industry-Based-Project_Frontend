import * as api from "../index";

export const createEmployee = async (employeesData) => {
  try {
    const employee = {
      employeeID: String(employeesData.employeeID),
      employeeFirstName: String(employeesData.employeeFirstName),
      employeeLastName: String(employeesData.employeeLastName),
      jobRole: String(employeesData.jobRole),
      NIC: String(employeesData.NIC),
      companyEmail: String(employeesData.companyEmail),
      status: String(employeesData.status),
      jobType: String(employeesData.jobType),
    };

    const response = await api.createEmployee(employee);
    //return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (employeeData) => {
  try {
    const empData = {
      employeeID: employeeData.employeeID,
      employeeFirstName: employeeData.employeeFirstName,
      employeeLastName: employeeData.employeeLastName,
      streetNo:employeeData.streetNo,
      phoneNumber: employeeData.phoneNumber,
      companyEmail: employeeData.companyEmail,
      profilePic: employeeData.profilePic,
      NIC: employeeData.NIC,
      city: employeeData.city,
      birthday: employeeData.birthday,
      ordinaryLevelResult: employeeData.ordinaryLevelResult.split(","),
      advancedLevelResults: employeeData.advancedLevelResults.split(","),
      achievements: employeeData.achievements.split(","),
      degree: employeeData.degree.split(","),
      language: employeeData.language.split(","),
      course: employeeData.course.split(","),
    };
    const { data } = await api.updateEmployee(empData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const viewAllEmployees = async (viewemployees) => {
  try {
    const { data } = await api.viewAllEmployees(viewemployees);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const recentEmployees = async (recentemployees) => {
  try {
    const { data } = await api.recentEmployees(recentemployees);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
