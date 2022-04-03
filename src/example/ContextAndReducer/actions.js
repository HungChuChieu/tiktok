import { ADD_JOB, DELETE_JOB, INPUT_JOB } from "./contants";

export const inputJob = (payload)=>({
    type: INPUT_JOB,
    data: payload
})

export const addJob = (payload)=>({
    type: ADD_JOB,
    data: payload
})

export const deleteJob =(payload)=>({
    type: DELETE_JOB,
    data: payload
})