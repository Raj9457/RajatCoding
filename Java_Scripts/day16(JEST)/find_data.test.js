import find_data from "./find_data.js"
let data=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
]

test("find the data",()=>{
    expect(find_data(data,1)).toEqual({id:1});
})