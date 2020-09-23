export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addNewFeature = new_feature => {
  return {
    type: ADD_NEW_FEATURE,
    payload: new_feature
  };
};


export const removeFeature = old_feature => {
  return {
    type: REMOVE_FEATURE,
    payload: old_feature
  }
}