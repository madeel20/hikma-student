import MyTutors from "../constants/MyTutors";
import { tutors } from "../../pages/dashboard/data";

const initialState = {
  tutors: tutors,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MyTutors.GET_STUDENTS_API:
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};
