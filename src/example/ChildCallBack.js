import { memo } from "react";

const ChildCallBack = ({onCallBack})=>{
    console.log("re-render");
    return(
        <>
            <h1>Chao Mung Den voi useCallBack</h1>
            <button onClick={onCallBack}>Start</button>

        </>
    )
}

export default memo(ChildCallBack);