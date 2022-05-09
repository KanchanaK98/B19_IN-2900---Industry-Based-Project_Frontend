import * as api from "../../index";

export const createCurruntSalaryApi = async (currentData) => {
  try {
    const { data } = await api.createCurrentSalarySheet(currentData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
