export const userSelector = () => {
  const logged_in = localStorage.getItem("access_token");
  return logged_in;
};
