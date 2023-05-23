import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_DATA,
} from "./dataTypes";

const initialState = {
  loading: true,
  data: {
    pagination: {},
    data: [],
  },
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export default dataReducer;
