export const INPUT_JOB = "input_job";
export const ADD_JOB = "add_job";
export const DELETE_JOB = "delete_job";

export const inputJob =(payload)=>{
    return {  
        type: INPUT_JOB,
        data: payload
    }
}

export const addJob =(payload)=>{
    return {  
        type: ADD_JOB,
        data: payload
    }
}

export const deleteJob =(payload)=>{
    return {  
        type: DELETE_JOB,
        data: payload
    }
}