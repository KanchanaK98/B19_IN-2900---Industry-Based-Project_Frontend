import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8070" });

export const createCandidate = (candidateData) =>
  API.post("/recruitment/candidate/create", candidateData);
export const searchCandidate = (NIC) =>
  API.get(`/recruitment/candidate/${NIC}`);
export const updateCandidate = (candidateData, candidateId) =>
  API.put(`/recruitment/candidate/${candidateId}`, candidateData);

export const userLogin = (user) => API.post("/login", user);

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
export const cancelLeave = (id) => API.delete("/leave/cancel/" + id);
export const getRequestedleave = (employeeId) =>
  API.get("/leave/requestedLeave/" + employeeId);
export const responseRequestedLeave = (id) =>
  API.post("/leave/requestedLeave/response/" + id);

export const getLeaveBalance = (employeeID) =>
  API.get(`/leave/leaveBalance/${employeeID}`);
