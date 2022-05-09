import * as api from "../../index";

export const updatePaperDetailsApi = async (currentData) => {
  try {
    const { data } = await api.updatePaperDetails(currentData);
    console.log("updatePaperDetailsApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
