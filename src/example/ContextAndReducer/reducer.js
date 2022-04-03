import { ADD_JOB, DELETE_JOB, INPUT_JOB } from "./contants";

const reducer =( state, action )=>{
    switch (action.type) {
        case INPUT_JOB:
            return {
                ...state,
                job: action.data
            } 
        case ADD_JOB:
            return{
                ...state,
                jobs: [...state.jobs, action.data]
            }
        case DELETE_JOB:
            let newJobs = state.jobs;
            newJobs.splice(action.data, 1);
            return{
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error("Invalid action.");
    }
}

export default reducer;