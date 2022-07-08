import axios from "axios";

const register = async (user) => {
  const API_URL = "http://localhost/api/v1/auth/register";

  try {
    const response = await axios.post(API_URL, user);

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

const useRegister = () => {
  return register;
};

export default useRegister;
