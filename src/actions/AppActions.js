export const LOADING = "APP/LOADING";
export const IS_LOGGED_IN = "APP/IS_LOGGED_IN";
export const RESET_STORE = "APP/RESET_STORE";
export const SAVE_USER_DETAILS = "APP/SAVE_USER_DETAILS";


export const actions = {
  setLoader: (value = false) => ({
    type: LOADING,
    loading: value
  }),
  setLoggedIn: (value = false) => ({
    type: IS_LOGGED_IN,
    data: value,
    storage: 'local'
  }),
  setUserDetails: (value = {}) => ({
    type: SAVE_USER_DETAILS,
    data: value,
    storage: 'local'
  }),
  resetStore: (value = {}) => ({
    type: RESET_STORE,
    data: value,
    storage: 'local'
  })
};
