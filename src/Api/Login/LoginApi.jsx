import axios from "axios";

export const LoginApi = async (user) => {
  try {
    const User = { userName: user.userName, password: user.password };

    const {data} = await axios.post("http://localhost:8070/login", User);
    console.log(data);
    if (data.success === true) {
      console.log("first")
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("access", JSON.stringify(data.accessToken));
      sessionStorage.setItem("refresh", JSON.stringify(data.refreshToken));
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
