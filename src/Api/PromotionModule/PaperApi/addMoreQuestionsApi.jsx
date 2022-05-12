import * as api from "../../index";

export const addMoreQuestionsApi = async ([Questions]) => {
  try {
    const { data } = await api.addMoreQuestions([Questions]);
    console.log("addMoreQuestionsApi executed");
    return data;
  } catch (error) {
    console.log(error);
  }
};
