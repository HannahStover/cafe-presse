import * as ActionTypes from './ActionTypes';

export const Employees = (
  state = {
    isLoading: true,
    errMess: null,
    employees: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.EMPLOYEES_LOADING:
      return { ...state, isLoading: true, errMess: null, employees: [] };

    case ActionTypes.EMPLOYEES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        employees: []
      };

    case ActionTypes.ADD_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        employees: action.payload
      };

    default:
      return state;
  }
};
