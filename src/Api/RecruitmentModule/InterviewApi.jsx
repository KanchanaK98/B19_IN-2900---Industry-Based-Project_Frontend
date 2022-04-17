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

    const interviewData = {
        candidateID : candidate._id,
      InterviewType : InterviewType,
      InterviewDate : InterviewDate.toDateString(),
      InterviewTime : InterviewTime.toTimeString(),
      InterviewerID : Interviewers.map((interviewer) =>  interviewer.employeeID)
    }
    const response = await api.createInterview(interviewData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
