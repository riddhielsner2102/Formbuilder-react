import axios from "./axios";

const requests = {
  validateLogin: `/ValidateLogin`,
  getPermissionTemplate: `/GetPermissionTemplate`,
  getTemplateUserMapping: `/GetTemplateUserMapping`,
};

async function PrepareRequest(path) {
  let response = await axios.get(`${path}`);
  return response;
}

export { requests, PrepareRequest };
