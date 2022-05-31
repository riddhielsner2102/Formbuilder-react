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
  values:`/Values`
};

async function PostRequest(path) {
  let response = await axios.post(`${path}`);
  return response;
}

export { postapis, PostRequest };
