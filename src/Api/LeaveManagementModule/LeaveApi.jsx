import * as api from '../index';

export const requestLeave =async (leave) => {
  try {
    const { leaveType, reason, startDate, endDate, leaveMethod } =
      leave;
    const leaveData = {
      leaveType,
      reason,
      startDate,
      endDate : (leaveMethod !=="multiple Day") ? startDate : endDate,
      leaveMethod,
      employeeId: JSON.parse(localStorage.getItem("user")).employeeID
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

export const getLeaveHistory = async () => {
  try {
    const {data} = await api.getLeaveList(JSON.parse(localStorage.getItem("user")).employeeID);
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


export const getRequestedLeaves= async() =>{
 
  const response =  await api.getRequestedLeave(JSON.parse(localStorage.getItem("user")).employeeID);
  //console.log(response);
  return response.data.requestedLeave;
}

export const responseRequestedLeave = async(id,reason) =>{
  try{
    const response = await api.responseRequestedLeave(id,{reason:reason});
    
    console.log(response);

    }

  
  catch(error){
    console.log(error);
  }
}
export const getTeamLead= async() =>{
 
  const response =  await api.getTeamLead(JSON.parse(localStorage.getItem("user")).employeeID);
  console.log(response);
  return response.data.teamLeader; 
}









