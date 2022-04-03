import { useContext, useRef } from "react";
import Context from "./Store/Context";
import { inputJob, addJob, deleteJob } from "./Store/Action";

const App = () => {
  const inputRef = useRef();
  const contextStore = useContext(Context);
  const handleAddJob = () => {
    contextStore.dispatch(addJob(contextStore.state.job));
    contextStore.dispatch(inputJob(""));

    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 10 }}>
      <h3>Hello, hướng dẫn tạo global state bằng useContext vs useReducer</h3>
      <input
        ref={inputRef}
        value={contextStore.state.job}
        onChange={(e) => contextStore.dispatch(inputJob(e.target.value))}
      />

      <button onClick={handleAddJob}>Add Job</button>
      <ul>
        {contextStore.state.jobs.map((j, index) => (
          <li key={index}>
            {j}
            <span
              onClick={() => contextStore.dispatch(deleteJob(index))}
              style={{ padding: 10 }}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
