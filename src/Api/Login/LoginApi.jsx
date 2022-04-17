import * as api from "../index";

export const LoginApi = async (user) =>
{
    try
    {
        const userName = user.userName;
        const password = user.password;
        user = { userName, password };

        const {data} = await api.userLogin(user)
        return data;

    }catch(error)
    {
        console.log(error);
    }
};