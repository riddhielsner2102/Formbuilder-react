import axios from "./axios";

const requests = {
  validateLogin: `/ValidateLogin`,
  getPermissionTemplate: `/GetPermissionTemplate`,
  getTemplateUserMapping: `/GetTemplateUserMapping`,
};

async function PrepareRequest(path) {
  let response = await axios.post(`${path}`);
  return response;
}

export { requests, PrepareRequest };
