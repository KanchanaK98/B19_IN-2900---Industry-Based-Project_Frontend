import * as api from "../index";

export const fetchEmployees = async () => {
  try {
    const { data } = await api.fetchEmployees();
    let employees = [];
    await Promise.all(
      data.data.map(async (employee) => {
        const { employeeID, employeeFirstName, employeeLastName, NIC } =
          employee;
        employee = {
          employeeID: employeeID,
          employeeName: employeeFirstName + " " + employeeLastName,
          NIC: NIC,
        };
        employees.push(employee);
      })
    );
    //console.log(employees);
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
    let interviewers = [];
    await Promise.all(
      Interviewers.map((interviewer) => (
        interviewers.push({ id: interviewer.employeeID })
      ))

    )
    const interviewData = {
      candidateID: candidate._id,
      InterviewType: InterviewType,
      InterviewDate: InterviewDate.toDateString(),
      InterviewTime: InterviewTime.toTimeString(),
      InterviewerID: interviewers,
    };
    console.log(interviewData);
    const response = await api.createInterview(interviewData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewList = async (employeeID) => {
  try {
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
      Interviewers.map((interviewer) => (
        interviewers.push({ id: interviewer.employeeID })
      ))

    )
    const interviewData = {
      candidateID,
      InterviewType: InterviewType,
      InterviewDate: new Date(InterviewDate).toDateString(),
      InterviewTime: new Date(InterviewTime).toTimeString(),
      InterviewerID: interviewers,
    };
    console.log(interviewData);
     const { data } = await api.updateInterview(interviewData, interviewID);
     return data;
  } catch (error) {
    console.log(error);
  }
};
