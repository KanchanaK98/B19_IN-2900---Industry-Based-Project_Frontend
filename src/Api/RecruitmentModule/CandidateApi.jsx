import * as api from "../index";

export const createCandidate = async (candidateData) => {
  try {
    const { firstName, lastName, NIC, phoneNumber, email, cv } = candidateData;
    const candidateName = firstName + " " + lastName;
    candidateData = {
      candidateName,
      NIC,
      phoneNumber,
      email,
      cv,
    };
    const { data } = await api.createCandidate(candidateData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchCandidate = async (NIC) => {
  try {
    if (NIC) {
      const { data } = await api.searchCandidate(NIC);
      return data.candidate;
    } else {
      return null;
    }
    //console.log( data.candidate[0]);
  } catch (error) {
    console.log(error);
  }
};

export const updateCandidate = async (candidateData, candidateId) => {
  try {
    const { firstName, lastName, NIC, phoneNumber, email, cv } = candidateData;
    const candidateName = firstName + " " + lastName;
    candidateData = {
      candidateName,
      NIC,
      phoneNumber,
      email,
      cv,
    };
    const { data } = await api.updateCandidate(candidateData, candidateId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
