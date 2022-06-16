import * as api from "../../index";

export const viewSalaryRatesApi = async () => {
  try {
    const { data } = await api.viewSalaryRates();
    return data;
  } catch (error) {
    console.log(error);
  }
};
