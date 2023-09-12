
import React from "react"

let element=<h1>Hello mine</h1>
let element2=React.createElement("h1",{id:"mee2"},"Hello Bro")

let root=documtment.getElementById("mine");
let rootRender=ReactDOM.createRoot(root);
rootRender.render(element)