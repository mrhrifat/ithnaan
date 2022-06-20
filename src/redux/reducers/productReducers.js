import { ActionTypes } from "../constants/actionType";
const initialState = [
  {
    id: 1,
    name: "Rifat",
    profession: "Programmer",
    company: "Pidex",
  },
];
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
