
export const IncreaseAction=(value)=>{
    return {type:"Increase",payload:value}
}
export const DecreaseAction=(value)=>{
    return {type:"Decrease",payload:value}
}
export const ResetAction=()=>{
    return {type:"Reset"}
}