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
  values:`/Values`
};

async function PrepareRequest(path) {
  let response = await axios.post(`${path}`);
  return response;
}

export { requests, PrepareRequest };
