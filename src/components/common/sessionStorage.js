
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