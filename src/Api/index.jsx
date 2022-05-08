import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8070" });

export const createCandidate = (candidateData) =>
  API.post("/recruitment/candidate/create", candidateData);
export const searchCandidate = (NIC) =>
  API.get(`/recruitment/candidate/${NIC}`);
export const updateCandidate = (candidateData, candidateId) =>
  API.put(`/recruitment/candidate/${candidateId}`, candidateData);

export const userLogin = (user) => API.post("/login", user);

//employee api
export const createEmployee = (employee) =>
  API.post(`/employee/add/`, employee);

export const updateEmployee = (employeeData) =>
  API.put(`/employee/update/${employeeData.employeeID}`, employeeData);

export const viewAllEmployees = () => {
  return API.get(`http://localhost:8070/employee/`);
};

export const recentEmployees = () => {
  return API.get(`http://localhost:8070/employee/recentSection`);
};
//teams api
export const createTeams = (teamcreate) =>
  API.post(`http://localhost:8070/employee/teamAdd`, teamcreate);

export const updateTeam = (updateteam, id) => {
  API.put(`http://localhost:8070/employee/updateTeam/${id}`, updateteam);
};

export const getEmployeesWithoutTeam = () => {
  return API.get(`http://localhost:8070/employee/get`);
};

export const viewAllTeams = () => {
  return API.get(`http://localhost:8070/employee/viewTeam`);
};

export const getAllTeams = () => {
  return API.get(`http://localhost:8070/employee/getTeam`);
};
//product api

export const createProduct = (productcreate) => {
  API.post(`http://localhost:8070/employee/addProduct`, productcreate);
};

export const updateProduct = (updateProdData, id) => {
  API.put(`http://localhost:8070/employee/updateProduct/${id}`, updateProdData);
};

export const viewPProducts=(viewproduct)=>{
  return API.get(`http://localhost:8070/employee/viewProducts`);
}