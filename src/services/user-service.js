const USER_KEY = "user";

export const getStoredUser = () => {
  const storedUserJson = sessionStorage.getItem(USER_KEY) || "";
  let storedUser;
  try {
    storedUser = JSON.parse(storedUserJson);
  } catch (e) {
    storedUser = null;
  }

  return storedUser;
};
