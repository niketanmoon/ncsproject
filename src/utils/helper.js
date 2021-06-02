export const apiUrl = "http://localhost:8000";
export const setToken = (token) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem("access_token", token);
};
export const setRefreshToken = (token) => {
  localStorage.setItem("refresh_token", token);
};

export const setExpiresAt = (expires_in) => {
  let current_time = new Date();
  const expires_at = current_time.setSeconds(
    current_time.getSeconds() + expires_in - 60
  );
  localStorage.setItem("expires_at", expires_at);
};
// eslint-disable-next-line no-undef
export const getToken = () => localStorage.getItem("access_token");

export const getRefreshToken = () => localStorage.getItem("refresh_token");

export const getExpiryTime = () => localStorage.getItem("expires_at");
export const removeToken = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem("access_token");
};
