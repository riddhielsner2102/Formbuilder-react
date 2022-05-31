import axios from "./axios";

const requests = {
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

async function PrepareRequest(path,payload) {
  let response = await axios.post(`${path}`,payload);
  return response;
}

export { requests, PrepareRequest };
