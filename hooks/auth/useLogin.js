const login = async (user) => {
  const API_URL = "http://localhost/api/v1/auth/login";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(user),
    });

    return response;
  } catch (err) {
    console.log(err.message);
  }
};

const useLogin = () => {
  return login;
};

export default useLogin;
