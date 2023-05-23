import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_DATA,
} from "./dataTypes";
import axios from "axios";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}
export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
}
export function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
}
export function updateData(data) {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
}
