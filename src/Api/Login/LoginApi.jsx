import * as api from "../index";

export const LoginApi = async (user) => {
  try {
    const userName = user.userName;
    const password = user.password;
    user = { userName, password };

    const { data } = await api.userLogin(user);
    if (data.success === true) 
      localStorage.setItem("profile", JSON.stringify(data.user));
    return data;
  } catch (error) {
    console.log(error);
  }
};
