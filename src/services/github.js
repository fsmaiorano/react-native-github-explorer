import api from "./api";

export const getUser = async username => {
  const user = await api.get(`/users/${username}`);
  console.tron.log("getUser: ", user);
  return user;
};

export const getRepositories = async username => {
  const repos = await api.get(`/users/${username}/repos`);
  console.tron.log("getRepositories: ", repos);
  return repos.data;
};

export const getOrganizations = async username => {
  const orgs = await api.get(`/users/${username}/orgs`);
  console.tron.log("getOrganizations: ", orgs);
  return orgs.data;
};
