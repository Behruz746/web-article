const setItem = (key, data, userKey, userData) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Error saving data");
  }
};

const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error saving data");
  }
};
export { setItem, getItem };
