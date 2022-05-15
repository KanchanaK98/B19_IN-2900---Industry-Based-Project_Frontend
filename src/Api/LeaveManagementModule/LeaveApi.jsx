import * as api from '../index';

export const requestLeave =async (leave) => {
  try {
    const { leaveType, reason, startDate, endDate, leaveMethod, employeeID } =
      leave;
    const leaveData = {
      leaveType,
      reason,
      startDate,
      endDate : (leaveMethod !=="multiple Day") ? startDate : endDate,
      leaveMethod,
      employeeId: "E003",
    };
   const response = await api.requestLeave(leaveData);
  return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLeaveBalance = async (employeeID) => {
  try {
    const {data} = await api.getLeaveBalance(employeeID);
    return data.remainingLeaves;
  } catch (error) {
    console.log(error);
  }
};

export const getLeaveHistory = async (employeeID) => {
  try {
    const {data} = await api.getLeaveList(employeeID);
    //console.log(data.leaveHistory);
    return data.leaveHistory;
  } catch (error) {
    console.log(error);
  }
}

export const cancelLeave = async (reason, leaveID, employeeID) => {
  try {
    const {data} = await api.cancelLeave(leaveID,reason, employeeID);
   
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const getRequestedLeaves= async(employeeID) =>{
 
  const response =  await api.getRequestedLeave(employeeID);
  console.log(response);
  return response.data.requestedLeave;
}








