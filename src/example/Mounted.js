import React,{useState} from 'react';
import Content from './Content';
 

const Mount =()=>{
    const [show, setShow] = useState(false);
    return (
        <div style={{padding:10}}>
            <button  onClick={()=>setShow(!show)}>Togger</button>
            {show && <Content/>}
        </div>
    )
}

export default Mount;