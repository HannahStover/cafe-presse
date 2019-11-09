import { EMPLOYEES } from '../shared/employees';
import { MENUS } from '../shared/menus';

export const initialState = {
    employees: EMPLOYEES,
    menus: MENUS
};

export const Reducer = (state = initialState, action) => {
    return state;
};