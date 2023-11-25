// #### Prototypal Inheritance 

function NikeProduct(n,p){
    this.name=n;
    this.price=p;
}

NikeProduct.prototype.promo=function (){
    if(this.price>10000){
        console.log("Promo is applicable");
    }
    else{
        return false;
    }
};

let p1=new NikeProduct("Shoes",80000);

console.log(p1);

//  ##### Object.create();
// Define the prototype object

let Adidas_Product = {
    type: "Sneaker",
    brand: "Adidas",
    seller: "Flipkart",
    price: 80000,
    coupen: function () {
        if (this.price > 50000) {
            console.log("Coupon Applied");
        } else {
            console.log("No Coupon Applied");
        }
    },
};

let n1 = Object.create(Adidas_Product);
n1.colour = "black";

console.log(n1);
n1.coupen(); 

///  #####  Array

let newar= new Array(1,2,3)
console.log(newar)

function MyArray(){    
    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }
    this.length=arguments.length;
    Object.defineProperty(this,"length",{
        enumerable:false,
    })
}

MyArray.prototype.naya_push=function(value){
    this[this.length]=value;
    this.length++;
}
let newray= new MyArray(1,2,3)
newray.naya_push(8)
console.log(Object.values(newray))
console.log(newray )


