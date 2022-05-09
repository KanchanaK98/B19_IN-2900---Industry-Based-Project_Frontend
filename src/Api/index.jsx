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

//Current Salary API
export const viewCurrentSalarySheet = () => API.get("/salary/currentSalary");
export const createCurrentSalarySheet = (newCurruntSalarySheet) =>
  API.post("/salary/currentSalary/create", newCurruntSalarySheet);
export const findCurrentSalarySheet = (EmployeeID) =>
  API.get(`/salary/currentSalary/${EmployeeID}`);
export const updateCurrentSalarySheet = (updatedData, EmployeeID) =>
  API.patch(`/salary/currentSalary/update/${EmployeeID}`, updatedData);
export const deleteCurrentSalarySheet = (EmployeeID) =>
  API.delete(`/salary/currentSalary/delete/${EmployeeID}`);

//Summary salary payment API
export const viewSummarySalarySheet = () => API.get("/salary/summarySalary");
export const findSummarySalarySheetByEid = (EmployeeID) =>
  API.get(`/salary/${EmployeeID}`);

//Employee salary sheet API
export const viewCurrentEmployeeSalarySheet = (EmployeeID) =>
  API.get(`/salary/employeeSalary/${EmployeeID}`);
export const findEmployeeSalarySheetByMonth = (EmployeeID, Month) =>
  API.get(`/salary/employeeSalary/${EmployeeID}/${Month}`);

//Questions API
export const viewAllQuestions = () => API.get("/promotion/Questions/");
export const createQuestions = (newQuestion) =>
  API.post("/promotion/Questions/create", newQuestion);

//Paper API
export const viewAllPapersList = () => API.get("/promotion/Paper");
export const createPaper = (newPaper) =>
  API.post("/promotion/Paper/createPaper", newPaper); //check
export const addMoreQuestions = (PaperID, [Questions]) =>
  API.get(`/promotion/Paper/addMoreQuestions/${PaperID}`, [Questions]); //check
export const updatePaperDetails = (PaperID, updatedData) =>
  API.get(`/promotion/Paper/updatePaperDetails/${PaperID}`, updatedData); //check
export const deletePaper = (PaperID) =>
  API.get(`/promotion/Paper/delete/${PaperID}`); //check

// employee's paper API
export const displayPaper = (EmployeeID) =>
  API.get(`/promotion/Paper/${EmployeeID}`);

//ratings  for employee API
export const submitPaper = (EmployeeID) =>
  API.post(`/promotion/submitPaper/${EmployeeID}`); //check
export const displayFeedback = (EmployeeID) =>
  API.get(`/promotion/evaluation/mySubmissions/${EmployeeID}`);

//team leads API
export const allSubmissions = () =>
  API.get("/promotion/evaluation/allSubmissions");
export const displayTeamMemberSubmissions = (TeamLeadID) =>
  API.get(`/promotion//evaluation/allSubmissions/${TeamLeadID}`);
export const evaluatePaper = (EmployeeID, PaperID) =>
  API.patch(`/promotion/evaluation/evaluatePaper/${EmployeeID}/${PaperID}`); //check
