// Dùng  useReducer thay vì dùng useState (đã làm file MyReducer.js)
// Bài Tập:
// 1/ nhập vào job,
// 2/ click button add sẽ add vào list jobs
// 3/ focus lại ô nhập, clear data đã nhập
// 4/ click 'x' để xóa job đang chọn

import { useState, useRef, useReducer } from "react";
import {initState, ADD_JOB, INPUT_JOB, DELETE_JOB} from "./constanst";
import {addJob, inputJob, deleteJob} from "./action";
import reducer from "./reducer";
import logger from "./logger"

// 4. Dispatch
const MyReducer = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const inputRef = useRef();

  const handleAddJob = () => {
    dispatch(addJob(state.job));
    dispatch(inputJob(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        ref={inputRef}
        value={state.job}
        onChange={(e) => {
          dispatch(inputJob(e.target.value));
        }}
      />
      <button onClick={handleAddJob}>Add</button>
      <ol>
        {state.jobs.map((j, index) => (
          <li key={index}>
            {j}
            <span
              style={{ paddingLeft: 20 }}
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyReducer;
