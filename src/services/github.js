import api from "./api";

export const getUser = async username => {
  const user = await api.get(`/users/${username}`);
  return user;
};
