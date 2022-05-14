import * as api from "../../index";

export const evaluatePaperApi = async (EmployeeID, PaperID) => {
  try {
    const { data } = await api.displayTeamMemberSubmissions(
      EmployeeID,
      PaperID
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
