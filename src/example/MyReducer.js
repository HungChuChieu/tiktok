// Dùng useState
// Bài Tập:
// 1/ nhập vào job,
// 2/ click button add sẽ add vào list jobs
// 3/ focus lại ô nhập, clear data đã nhập
// 4/ click 'x' để xóa job đang chọn

import { useState, useRef } from "react";

const MyReducer = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const inputRef = useRef();

  const handleAdd = () => {
    setJobs([...jobs, job]);
    setJob("");
    inputRef.current.focus();
  };

  const handleDelete = (id) => {
    const newJobs = [...jobs];
    console.log(newJobs);
    newJobs.splice(id, 1);
    setJobs(newJobs);
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {jobs.map((j, index) => (
          <li key={index}>
            {j}
            <span onClick={()=>handleDelete(index)} style={{ paddingLeft: 20 }}>
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyReducer;
