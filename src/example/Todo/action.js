// 2. action
import {ADD_JOB, DELETE_JOB, INPUT_JOB} from "./constanst";

export const inputJob = (payload) => {
  return {
    type: INPUT_JOB,
    data: payload,
  };
};

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    data: payload,
  };
};

export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    data: payload,
  };
};
