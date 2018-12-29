import { GET_PROFILE, PROFILE_LOADING } from "../actions/profileActions";

const intialState = {
  profile: null,
  profiles: null,
  loading: false
};
export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
