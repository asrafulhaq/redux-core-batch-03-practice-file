import {
  ADD_STUDENT_FULFILLED,
  ADD_STUDENT_PENDING,
  ADD_STUDENT_REJECTED,
  DELETE_STUDENT_FULFILLED,
  DELETE_STUDENT_PENDING,
  DELETE_STUDENT_REJECTED,
  GET_STUDENT_FULFILLED,
  GET_STUDENT_PENDING,
  GET_STUDENT_REJECTED,
  UPDATE_STUDENT_FULFILLED,
  UPDATE_STUDENT_PENDING,
  UPDATE_STUDENT_REJECTED,
} from "./actionTypes";
import { initialState } from "./initialState";

// create reducer
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case GET_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        students: action.payload,
        message: "Student data get success",
      };

    case GET_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Student data failed",
      };

    case DELETE_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        students: state.students.filter((data) => data.id !== action.payload),
        message: "Student data deleted",
      };

    case DELETE_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Student delete failed",
      };

    case ADD_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case ADD_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        message: "Student created successful",
        students: [...state.students, action.payload],
      };

    case ADD_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Student create failed",
      };

    case UPDATE_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        message: "Student update successful",
        students: state.students.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    case UPDATE_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Student update failed",
      };

    default:
      return state;
  }
};

// export default
export default studentReducer;
