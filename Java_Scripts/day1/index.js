// var angad=15
// function named(){
//     console.log(this)
//     let nike_product={
//         Name:"Shoes",
//         Price:2999,
//         Type:"Sports",
//     }
//     return nike_product
// }
// console.log(this);

// -- constructor function --

// function nike(n,p){
//     let nike_product={     
//     }
//     nike_product.name=n;
//     nike_product.price=p
//     return nike_product
// }
// console.log(nike("Shoes",2999))

//with constructor function

// function Nike_Product(n,p){
//     this.name=n;
//     this.price=p;
// }

// let n1=new Nike_Product("Shoes",2999);
// let n2=new Nike_Product("Shoes",7878);
// n2.color="blue"
// console.log(n1,n2)
// let Nike=[]
// function addProduct(e){
//     e.preventDefault();
//     let form=document.getElementById("product_form");
//     let name=form.name.value;
//     let price=form.price.value;
//     let n1=new Nike_Product(name,price)
//     Nike.push(n1)
//     console.log(Nike)
// }

// CALL APPLY BIND  -----


// ::::::::::CALL------

let kitchen={
    name:"Kitchen",
    purpose:"cook",
    cookfood(order){
        console.log(`Serving ${order} in ${this.name}`)
    }
}

let bedroom={
    name:"Bedroom",
    purpose:"Sleep",
}
kitchen.cookfood("Maggie")

kitchen.cookfood.call(bedroom,"Biryani");

function ringbell(day,action){
    console.log(`${this.name} rang the bell on ${day} and ${action}. `);
}
let person1={
    name:"Rajat",
}
let person2={
    name:"Yash",
}

ringbell.call(person1,"Thursday","ranaway")

// --------------------------------------Apply------
ringbell.apply(person2,["Monday","beaten by sticks"])

//--------------------------------------BIND-----
let x=ringbell.bind(person2,"Sunday","ran on bike");
x();


