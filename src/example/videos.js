import { forwardRef , useImperativeHandle, useRef} from 'react';
import MyVideo from '../videos/video-1.mp4';

const Videos =(props, ref)=>{
    const videoRef = useRef();

    useImperativeHandle(ref, ()=>({
        MyPlay(){
            videoRef.current.play();
        },
        MyPause(){
            videoRef.current.pause();
        }

    }))
    return (
        <video
        ref={videoRef}
        width="200px" 
        src={MyVideo}
        />
    )
}

export default forwardRef(Videos);