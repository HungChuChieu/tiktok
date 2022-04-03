import {useRef} from 'react';
import  {useStore}  from "./ContextAndReducer";
import { inputJob, addJob, deleteJob } from "./ContextAndReducer/actions";

const MyContextAndReducer =()=>{
    const [state, dispatch] = useStore();

    const iRef = useRef();

    const handleAddJob =()=>{
        dispatch(addJob(state.job));
        dispatch(inputJob(''));

        iRef.current.focus();
    }
    return (
        <div style={{padding:20}}>
            <h3>Cách tạo biến toàn cục bằng Context and useReducer</h3>
            <input
                ref={iRef}
                value={state.job}
                onChange={e=>{dispatch(inputJob(e.target.value))}}
            />
            <button
                onClick={handleAddJob}
            >Add</button>
            <ul>
                {state.jobs.map((j,index)=>(
                    <li key={index}>
                        {j}
                        <span
                            onClick={()=>{dispatch(deleteJob(index))}}
                            style={{paddingLeft:10}}>x</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyContextAndReducer;