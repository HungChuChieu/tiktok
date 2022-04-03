import { ADD_JOB, INPUT_JOB, DELETE_JOB } from "./Action";
const initState = {
  job: "",
  jobs: [],
};

const Reducer = ( state, action ) => {
  // code handler
  switch (action.type) {
    case INPUT_JOB:
      return {
        ...state,
        job: action.data,
      };
      break;
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs,action.data],
      };
      break;
    case DELETE_JOB:
        let newJobs =  state.jobs ;
        newJobs.splice(action.data,1)
      return {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action.")
  }
  return state;
};

export { initState };
export default Reducer;
