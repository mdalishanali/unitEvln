import { LOGIN } from "./action";
const initialState = { user: [null] };

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    // add your login reducer functionalities here
    case LOGIN:
    //   localStorage.setItem("userLoginDetails",  s );
      return { payload };
    default:
      return store;
  }
};
