import {INPUT_JOB, ADD_JOB, DELETE_JOB} from "./constanst"
// 3. Reducer
const reducer = (state, action) => {
    switch (action.type) {
      case INPUT_JOB:
        return  {
          ...state,
          job: action.data,
        };
        break;
      case ADD_JOB:
          return {
              ...state,
              jobs: [...state.jobs, action.data]
          }
        break;
      case DELETE_JOB:
          let newJobs = [...state.jobs];
          newJobs.splice(action.data, 1);
          return {
              ...state,
              jobs: newJobs
          }
        break;
      default:
        throw new Error("Invalid action.");
    }
  };
  
  export default reducer;