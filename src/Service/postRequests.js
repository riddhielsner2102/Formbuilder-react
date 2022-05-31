import axios from "./axios";

const postapis = {
  postDataSourceSetting: `/PostDataSourceSetting`,
  postImportForm: `/PostImportForm`,
  saveOfflineData: `/SaveOfflineData`,
  setMasterFieldIActive: `/SetMasterFieldIActive`,
  saveMasterField: `/SaveMasterField`,
  postFormDesign: `/PostFormDesign`,
  postForm: `/PostForm`,
  postFormSubmit: `/PostFormSubmit`,
  postFormSaveSubmit: `/PostFormSaveSubmit`,
  postInfoPromptForm: `/PostInfoPromptForm`,
  postMasterChecklist: `/PostMasterChecklist`,
  postChecklistItems: `/PostChecklistItems`,
  postChecklistRatings: `/PostChecklistRatings?SubmissionID={SubmissionID}`,
  postMasterChecklistGroup: `/PostMasterChecklistGroup`,
  postMasterAssessment: `/PostMasterAssessment`,
  postAssesmentTypeOptions: `/PostAssesmentTypeOptions`,
  postPassword: `/PostPassword`,
  postTemplate: `/PostTemplate`,
  postTemplateDesign: `/PostTemplateDesign`,
  saveMasterGroups: `/SaveMasterGroups`,
  postMasterReasonCode: `/PostMasterReasonCode`,
  postMasterReasonCodeOptions: `/PostMasterReasonCodeOptions`,
  postMasterVersion: `/PostMasterVersion`,
  postMasterModuleMapping: `/PostMasterModuleMapping`,
  postFormStatus: `/PostFormStatus`,
  postMasterItemRepository: `/PostMasterItemRepository`,
  postMasterGeneralRepository: `/PostMasterGeneralRepository`,
  postMasterMultiGeneralRepository: `/PostMasterMultiGeneralRepository`,
  postMasterGeneralItemDashboard: `/PostMasterGeneralItemDashboard`,
  postPermissionTemplate: `/PostPermissionTemplate`,
  values:`/Values`,
  PostMasterMultipleItemRepository:`/PostMasterMultipleItemRepository`
};

<<<<<<< HEAD
async function PostRequest(path) {
  let response = await axios.post(`${path}`);
=======
async function PrepareRequest(path,payload) {
  let response = await axios.post(`${path}`,payload);
>>>>>>> 2a58a5c91978edfb8188fdafec78b0c97486fbc3
  return response;
}

export { postapis, PostRequest };
