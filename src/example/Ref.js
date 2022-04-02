import { useRef, useState, useEffect } from "react"; 
const Count = () => {
  const [count, setCount] = useState(60);

  const timeId = useRef();
  const prevCount =useRef();
  const h1ref = useRef();

  useEffect(()=>{
      const rect = h1ref.current.getBoundingClientRect();
    console.log(rect);
  },[count])

  useEffect(()=>{
      prevCount.current = count;
  },[count])

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log(`Start -> ${timeId.current}`)
  };

  const handleStop = () => {
      clearInterval(timeId.current);
      console.log(`Stop -> ${timeId.current}`)
  };

  console.log(count, prevCount.current)

  return (
    <div style={{ padding: 10 }}>  
      <h1 ref={h1ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Count;
