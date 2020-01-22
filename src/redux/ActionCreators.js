import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// Contact
export const postFeedback = feedback => dispatch => {
  const data = {
    ...feedback,
    date: new Date()
  };

  return fetch(baseUrl + 'feedback', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .catch(error => {
      console.log('Post comments', error.message);
      alert(`Your comment could not be posted\nError: ${error.message}`);
    });
};

//Employees
export const fetchEmployees = () => dispatch => {
  dispatch(employeesLoading());
  return fetch(baseUrl + 'leaders')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(employees => dispatch(addEmployees(employees)))
    .catch(error => dispatch(employeesFailed(error.message)));
};

export const employeesLoading = () => ({
  type: ActionTypes.EMPLOYEES_LOADING
});

export const employeesFailed = errmess => ({
  type: ActionTypes.EMPLOYEES_FAILED,
  payload: errmess
});

export const addEmployees = employees => ({
  type: ActionTypes.ADD_EMPLOYEES,
  payload: employees
});

//Dishes
export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
