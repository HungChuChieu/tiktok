import { memo, useState, useCallback } from "react";
import ChildCallBack from "./ChildCallBack";

const CallBack = () => {
  const [count, setCount] = useState(0);

  const handleCallBack = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <ChildCallBack onCallBack={handleCallBack}></ChildCallBack>
      <h1>{count}</h1>
    </div>
  );
};

export default memo(CallBack);
