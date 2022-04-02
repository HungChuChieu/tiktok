import { useReducer, useState, useRef } from "react";

//----useState
// 1. Init data
// 2. Action: Up (state + 1) / Down (state -1)

//----useReducer
// 1. Init data
// 2. Action: Up (state + 1) / Down (state -1)
// 3. Reducer
// 4. Dispatch

// // Init Data
// const initState = 0;

// // Action
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// // Reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;

//     default:
//       throw new Error("Action not define...");
//   }
// };

// const MyReducer = () => {
//   const [count, dispatch] = useReducer(reducer, initState);
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           dispatch(DOWN_ACTION);
//         }}
//       >
//         Down
//       </button>
//       <button
//         onClick={() => {
//           dispatch(UP_ACTION);
//         }}
//       >
//         Up
//       </button>
//     </div>
//   );
// };

// Init data
const initState = {
    job: "",
    jobs : []
}

// Action
const INPUT_JOB = "input_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const inputJob = payload =>{
    return {
        type:INPUT_JOB,
        data: payload
    }
}
const addJob = payload =>{
    return {
        type:ADD_JOB,
        data: payload
    }
}

const deleteJob = payload =>{
    return {
        type: DELETE_JOB,
        data: payload
    }
}

// Reducer
const reducer = (state, action)=>{
    let newState = {...state};
    console.log(newState);
    switch (action.type) {
        case INPUT_JOB:
            newState = {
                ...state,
                job:action.data
            }
            break;
        case ADD_JOB:
            newState={
                ...state,
                jobs: [...state.jobs, action.data]
            }
            break
        case DELETE_JOB: 
            const newJobs = [...state.jobs ];
            newJobs.splice(action.data,1)
            newState={
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error("Invalid action.");
    }
    console.log(newState)
    return newState;
}

// Dispatch
const MyTodo =()=>{
    const [state, dispatch] = useReducer(reducer, initState);
    
    const handleAdd =()=>{
        dispatch(addJob(state.job))
        dispatch(inputJob(''))
        inputRef.current.focus();
    }

    const handleDelete = id =>{

    }

    const inputRef = useRef();

    return (
        <div style={{padding:20}}>
            <input
                ref={inputRef}
                value={state.job}
                onChange ={(e)=>{dispatch(inputJob(e.target.value))}}
            />
            <button
                onClick={handleAdd}
            >Add</button>
            <ul>
                {state.jobs.map((j, index)=>(
                    <li key={index}>{j}
                        <span 
                            onClick={()=>dispatch(deleteJob(index))}
                            style={{paddingLeft:20}}>
                            x
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MyTodo;
