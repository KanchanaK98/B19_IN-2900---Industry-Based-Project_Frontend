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
      // status: String(employeesData.status),
      // jobType: String(employeesData.jobType),
    };

    const {data} = await api.createEmployee(employee);
    return data;
    
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
      streetNo: employeeData.streetNo,
      phoneNumber: employeeData.phoneNumber,
      companyEmail: employeeData.companyEmail,
      profilePic: employeeData.profilePic,
      NIC: employeeData.NIC,
      city: employeeData.city,
      birthday: employeeData.birthday,
      status: employeeData.status,
      jobRole: employeeData.jobRole,
      jobType: employeeData.jobType,
      ordinaryLevelResult: String(employeeData.ordinaryLevelResult).split(","),
      advancedLevelResults: String(employeeData.advancedLevelResults).split(
        ","
      ),
      achievements: String(employeeData.achievements).split(","),
      degree: String(employeeData.degree).split(","),
      language: String(employeeData.language).split(","),
      course: String(employeeData.course).split(","),
    };
    const { data } = await api.updateEmployee(empData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const viewAllEmployees = async () => {
  try {
    const { data } = await api.viewAllEmployees();
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

export const getUser = async () => {
  try {
    console.log("hi");
    const { data } = await api.getUser(JSON.parse(localStorage.getItem("profile")).employeeID);
    return data.userInfo;
  } catch (err) {
    console.log(err);
  }
};
