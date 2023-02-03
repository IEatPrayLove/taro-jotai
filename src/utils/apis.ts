import { api } from "./apiRequest";

export const getHomeAction = async data => {
  const res = await api({
    url: "",
    data: data
  });
};
