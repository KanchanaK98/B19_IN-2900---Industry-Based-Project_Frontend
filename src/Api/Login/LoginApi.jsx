import axios from "axios";

export const LoginApi = async (user) => {
  try {
    const User = { userName: user.userName, password: user.password };

    const { data } = await axios.post("http://localhost:8070/login", User);

    if (data.success === true)
      localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  } catch (error) {
    console.log(error);
  }
};
