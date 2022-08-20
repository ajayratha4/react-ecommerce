export const setUser = (value: number) => {
  localStorage.setItem("user", value.toString());
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const clearUser = () => {
  localStorage.clear();
  window.location.reload();
};
