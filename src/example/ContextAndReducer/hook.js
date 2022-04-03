import { useContext } from "react";
import ContextJobs from "./context";

export const useStore = ()=>{
    const [state, dispatch] = useContext(ContextJobs);
   return  [state,dispatch] 
}
