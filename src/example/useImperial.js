import { useEffect, useRef } from "react";
import Videos from "./videos";

const MyImpe = () => {
  const videoRef = useRef();

  const handlePlay =()=>{
      videoRef.current.MyPlay();
      console.log(videoRef)
  }
  const handlePause =()=>{
      videoRef.current.MyPause();
  }

  return (
    <div style={{ padding: 10 }}>
      <Videos ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default MyImpe;
