import { EMAIL_CHANGED, PASSWORD_CHANGED, EMPLOYEE_UPDATE } from "../actions/types";

const INITIAL_STATE = { email: "" };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED: //what will happen here?????
    return { ...state, email: action.payload};
    
    case PASSWORD_CHANGED: //what will happen here?????
    return { ...state, password: action.payload};

   
    case EMPLOYEE_UPDATE: //what will happen here?????
    return { ...state, name: action.payload.name, phone: action.payload.phone, shift1:action.payload.shift1};


    default:
      return state;
  }
};

