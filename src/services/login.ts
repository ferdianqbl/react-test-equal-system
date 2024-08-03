import callAPI from "@/lib/api";

export const login = async (email: string, password: string) => {
  const data = {
    grant_type: "password",
    client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    client_id: "e78869f77986684a",
    username: email,
    password: password,
  };

  const res = await callAPI({
    method: "POST",
    url: "/oauth/token",
    data,
  });

  return res;
};
