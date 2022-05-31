
const userSessionStorage = (data) => {
    if (data.UserID > 0) {
        sessionStorage.setItem('UserID', data.UserID.toString());
        sessionStorage.setItem('UserName', data.UserName.toString());
        sessionStorage.setItem('IsAdmin', data.IsAdmin.toString());
        sessionStorage.setItem('SubsystemID', data.SubSystemID);
        sessionStorage.setItem('Subsystem', data.SubSystemName);
    }
}

export {userSessionStorage}



export const getSessionStorage = (key, defaultValue = '') => {
  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
  return defaultValue;
};

// export const setSessionStorage = (key, value) => {
//   if (typeof window !== "undefined") {
//     sessionStorage.setItem(key, JSON.stringify(value));
//   }
// };

export const deleteSessionStorage = (key) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};
