

const find_data=(data,id)=>{
 let item=data.find((ele)=>ele.id==id);
 return item;
}

export default find_data;