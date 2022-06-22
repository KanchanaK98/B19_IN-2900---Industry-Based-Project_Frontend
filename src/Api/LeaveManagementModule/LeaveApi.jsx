import * as api from "../index";

export const requestLeave = async (leave) => {
  try {
    const { leaveType, reason, startDate, endDate, leaveMethod } = leave;
    const leaveData = {
      leaveType,
      reason,
      startDate,
      endDate: leaveMethod !== "multiple Day" ? startDate : endDate,
      leaveMethod,
      employeeId: JSON.parse(sessionStorage.getItem("user")).employeeID,
    };
    const response = await api.requestLeave(leaveData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLeaveBalance = async (employeeID) => {
  try {
    const id = employeeID
      ? employeeID
      : JSON.parse(sessionStorage.getItem("user")).employeeID;

    const { data } = await api.getLeaveBalance(id);

    return data.remainingLeaves;
  } catch (error) {
    console.log(error);
  }
};

export const getLeaveHistory = async () => {
  try {
    const { data } = await api.getLeaveList(
      JSON.parse(sessionStorage.getItem("user")).employeeID
    );
    //console.log(data.leaveHistory);
    return data.leaveHistory;
  } catch (error) {
    console.log(error);
  }
};

export const cancelLeave = async (reason, leaveID) => {
  try {
    const { data } = await api.cancelLeave(
      leaveID,
      reason,
      JSON.parse(sessionStorage.getItem("user")).employeeID
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRequestedLeaves = async () => {
  console.log("first")
  const response = await api.getRequestedLeave(
    JSON.parse(sessionStorage.getItem("user")).employeeID
  );
  //console.log(response);
  return response.data.requestedLeave;
};

export const responseRequestedLeave = async (id, reason) => {
  try {
    const response = await api.responseRequestedLeave(id, { reason: reason });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const getTeamLead = async () => {
  const response = await api.getTeamLead(
    JSON.parse(sessionStorage.getItem("user")).employeeID
  );

  //const TeamLead = object.assign(response.data.teamLeader,response.data.teamName);
  console.log(response.data.teamLeader);
  return response.data.teamLeader;
};

export const getEmployees = async () => {
  try {
    const response = await api.getEmployees();

    console.log(response);
    return response.data.NonHrEmployees;
  } catch (error) {
    console.log(error);
  }

  
};
export const increaseLeaves = async (employeeID, leaveType, data) =>{
 
  try{
    const response = await api.increaseLeaves(employeeID,leaveType,data);
    

  }catch(error){
    console.log(error);
  }

    
}
