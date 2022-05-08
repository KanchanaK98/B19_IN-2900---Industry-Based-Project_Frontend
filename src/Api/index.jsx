import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8070" });
// candidate API
export const createCandidate = (candidateData) =>
  API.post("/recruitment/candidate/create", candidateData);
export const searchCandidate = (NIC) =>
  API.get(`/recruitment/candidate/${NIC}`);
export const updateCandidate = (candidateData, candidateId) =>
  API.put(`/recruitment/candidate/${candidateId}`, candidateData);
export const fetchCandidates = () => API.get(`/recruitment/candidates`);

// Interview API
export const fetchEmployees = () => API.get(`/employee/`);
export const createInterview = (interviewData) =>
  API.post(`/recruitment/interview/create`, interviewData);
export const getInterviewList = (employeeID) =>
  API.get(`/recruitment/interview/${employeeID}`);
export const updateInterview = (interview, interviewID) =>
  API.put(`/recruitment/interview/${interviewID}`, interview);
export const cancelInterview = (interviewID) =>
  API.delete(`/recruitment/interview/${interviewID}`);
export const markedCandidate = (marks, interviewID) => {
 return API.put(`/recruitment/interview/start/${interviewID}`, marks)
}
// LogIn API
export const userLogin = (user) => API.post("/login", user);

// Assets API

export const availableAssets = () => API.get("/assets/available");
export const nonavailableAssets = () => API.get("/assets/unavailable");
export const allAssets = () => API.get("/assets/");
export const eachAssetDetails = (id) => API.get("/assets/detail/" + id);
export const unassign = (id) => API.patch("/assets/unassign/" + id);
export const releaseFault = (id) => API.patch("/assets/releaseFault/" + id);
export const createFault = (id) => API.patch("/assets/fault/" + id);
export const assignAsset = (assignAsset, employee) =>
  API.patch("/assets/assign/" + assignAsset, employee);
export const searchAssetCategory = (assetCategory) =>
  API.get("/assets/category/" + assetCategory);
export const insertAsset = (asset) => API.post("/assets/add", asset);


export const requestLeave = (leaveDetail) =>
  API.post("/leave/request", leaveDetail);
export const getLeaveList = (employeeId) => API.get("/leave/" + employeeId);
export const cancelLeave = (id, reason, employeeId) => API.post(`/leave/cancel/${id}`, {reason, employeeId});
export const getRequestedleave = (employeeId) =>
  API.get("/leave/requestedLeave/" + employeeId);
export const responseRequestedLeave = (id) =>
  API.post("/leave/requestedLeave/response/" + id);


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
export const getLeaveBalance = (employeeID) =>
  API.get(`/leave/leaveBalance/${employeeID}`);

