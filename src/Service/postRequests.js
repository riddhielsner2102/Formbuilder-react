import axios from "./axios";

const requests = {
  postDataSourceSetting: `/PostDataSourceSetting`,
  postImportForm: `/PostImportForm`,
  saveOfflineData: `/SaveOfflineData`,
  setMasterFieldIActive: `/SetMasterFieldIActive`,
  saveMasterField:`/SaveMasterField`,
  postFormDesign:`/PostFormDesign`,
  postForm:`/PostForm`,
  postFormSubmit:`/PostFormSubmit`,
  PostFormSaveSubmit:`/PostFormSaveSubmit`,
  PostInfoPromptForm:`/PostInfoPromptForm`,
  PostMasterChecklist:`/PostMasterChecklist`




};

async function PrepareRequest(path) {
  let response = await axios.post(`${path}`);
  return response;
}

export { requests, PrepareRequest };
