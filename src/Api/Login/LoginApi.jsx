import * as api from "../index";

export const LoginApi = async (user) => {
  try {
    const User = { userName: user.userName, password: user.password };

    const { data } = await api.userLogin(User);
    if (data.success === true)
      localStorage.setItem("profile", JSON.stringify(data.user));
    return data;
  } catch (error) {
    console.log(error);
  }
};
