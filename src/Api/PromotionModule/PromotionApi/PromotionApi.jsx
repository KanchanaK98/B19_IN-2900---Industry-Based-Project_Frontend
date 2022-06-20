import * as api from "../../index";

export const getEvaluationDetails = async () => {
  try {
    const { data } = await api.getEvaluationData();
    return data.evaluationDetails;
  } catch (error) {
    console.log(error);
  }
};

export const promoteEmployee = async (employeeID, promotionData) => {
  try {
    const { data } = await api.promoteEmployees(employeeID, promotionData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPromotionHistory = async () => {
  try {
    const { data } = await api.getPromotionHistory();
    return data.promotionHistory;
  } catch (error) {
    console.log(error);
  }
};
