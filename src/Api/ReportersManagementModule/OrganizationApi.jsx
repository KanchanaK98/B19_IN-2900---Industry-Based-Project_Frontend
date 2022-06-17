import * as api from "../index";
export const createOrganization = async (levelData) => {
    console.log(levelData)
  try {
  

    const { data } = await api.createOrganization(levelData);
    console.log(data);
    return data;
  } catch (err) {
    return err.response;
    // console.log(err);
  }
};

export const updateOrganization = async (updateorg, id) => {
  try {
    const updateOrg = {
      // level: updateorg.level,

      jobRole: updateorg.jobRole.map((job) => job),
    };
    const { data } = await api.updateOrganization(updateOrg, id);
    return data;
  } catch (error) {
    return error.response;
    //   console.log(error);
  }
};
