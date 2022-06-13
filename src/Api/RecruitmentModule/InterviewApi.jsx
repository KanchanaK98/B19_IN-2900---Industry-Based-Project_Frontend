import * as api from "../index";

export const fetchEmployees = async () => {
  try {
    const { data } = await api.fetchEmployees();
    console.log(data.data);
    let employees = [];
    await Promise.all(
      data.data.map(async (employee) => {
        const {
          employeeID,
          employeeFirstName,
          employeeLastName,
          NIC,
          profilePic,
        } = employee;

        employees.push({
          employeeID,
          employeeName: employeeFirstName + " " + employeeLastName,
          NIC,
          profilePic,
        });
      })
    );
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

export const createInterview = async (interview) => {
  try {
    const {
      candidate,
      InterviewType,
      InterviewDate,
      InterviewTime,
      Interviewers,
    } = interview;
    // let interviewers = [];
    // await Promise.all(
    //   Interviewers.map((interviewer) => (
    //     interviewers.push({ id: interviewer.employeeID })
    //   ))

    // )
    const interviewData = {
      candidateID: candidate._id,
      InterviewType: InterviewType,
      InterviewDate: InterviewDate.toDateString(),
      InterviewTime: InterviewTime.toTimeString(),
      Interviewers,
      //: interviewers,
    };
    console.log(interviewData);
    const response = await api.createInterview(interviewData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewList = async () => {
  try {
    const employeeID = JSON.parse(sessionStorage.getItem("user")).employeeID;
    const { data } = await api.getInterviewList(employeeID);
    return data.Interviews;
  } catch (error) {
    console.log(error);
  }
};

export const updateInterview = async (interview, interviewID) => {
  try {
    console.log(interviewID);
    const {
      candidateID,
      InterviewType,
      InterviewDate,
      InterviewTime,
      Interviewers,
    } = interview;
    let interviewers = [];
    await Promise.all(
      Interviewers.map((interviewer) =>
        interviewers.push({ id: interviewer.employeeID })
      )
    );
    const interviewData = {
      candidateID,
      InterviewType: InterviewType,
      InterviewDate: new Date(InterviewDate).toDateString(),
      InterviewTime: new Date(InterviewTime).toTimeString(),
      InterviewerID: interviewers,
    };
    //console.log(interviewData);
    const { data } = await api.updateInterview(interviewData, interviewID);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const cancelInterview = async (interviewID) => {
  try {
    const { data } = await api.cancelInterview(interviewID);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const markedCandidate = async (marks, interviewID) => {
  try {
    const { data } = await api.markedCandidate(marks, interviewID);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewStats = async () => {
  try {
    console.log("hi1")
    const { data } = await api.getInterviewStats(
      JSON.parse(sessionStorage.getItem("user")).employeeID
    );
    console.log("hi2")
    console.log(data)
    return data.InterviewStats;
  } catch (error) {
    console.log(error);
  }
};
