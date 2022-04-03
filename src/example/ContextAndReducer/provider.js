import ContextJobs from "./context";
import { initState } from "./contants";
import   reducer   from "./reducer";
import { useReducer } from "react";
import logger from "../Todo/logger";

// dispatch
const ProviderJobs = ({children})=>{
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return(
        <ContextJobs.Provider value={[state, dispatch]}>
            {children}
        </ContextJobs.Provider>
    )
}

export default ProviderJobs;