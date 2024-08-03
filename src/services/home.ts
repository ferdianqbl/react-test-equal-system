import callAPI from "@/lib/api";

export const home = async (token: string) => {
  const res = await callAPI({
    method: "GET",
    url: "/api/home",
    token,
  });
  return res;
};
