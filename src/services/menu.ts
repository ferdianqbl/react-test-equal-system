import callAPI from "@/lib/api";

export const menu = async (token: string) => {
  const res = await callAPI({
    method: "POST",
    url: "/api/menu",
    token,
    data: {
      show_all: 1,
    },
  });
  return res;
};
