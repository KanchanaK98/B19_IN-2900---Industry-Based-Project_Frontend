import * as api from "../../index";

export const viewAllExamsApi = async () => {
  try {
    const { data } = await api.viewAllExams();
    console.log("viewAllExamsApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
