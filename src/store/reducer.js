const INITIAL_STATE = {
  profile: {
    genre: undefined,
    name: undefined,
    order: undefined
  },
  data: [],
  loading: false,
  error: false
};

export default function sw(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_ACTIVITY_FETCH":
      return { ...state, loading: true };
    case "SUCCESS_ACTIVITY_FETCH":
      return {
        ...state,
        data: [...state.data, action.payload.activity],
        loading: false,
        error: false
      };
    case "FAILURE_ACTIVITY_FETCH":
      return { ...state, data: [], loading: false, error: true };
    case "REMOVE_ACTIVITY":
      return {
        ...state,
        data: state.data.filter(d => d.key !== action.payload.key)
      };
    case "SET_MAIN":
      return {
        ...state,
        profile: { genre: action.payload.genre, name: action.payload.name }
      };
    case "SET_ORDER":
      return {
        ...state,
        profile: { ...state.profile, order: action.payload.order }
      };
    case "REST_PROFILE":
      return { ...state, profile: INITIAL_STATE.profile };
    default:
      return state;
  }
}
