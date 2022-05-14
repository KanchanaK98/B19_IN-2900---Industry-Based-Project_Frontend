import * as api from "../../index";

export const createPaperApi = async (currentData) => {
  try {
    const { data } = await api.createPaper(currentData);
    console.log("createPaperApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
