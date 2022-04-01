import React,{useState} from 'react';
import Content from './Content';
import Preview from './Preview';
import Chat from './FakeChat';

const Mount =()=>{
    const [show, setShow] = useState(false);
    return (
        <div style={{padding:10}}>
            <button  onClick={()=>setShow(!show)}>Togger</button>
            {show && <Chat/>}
        </div>
    )
}

export default Mount;