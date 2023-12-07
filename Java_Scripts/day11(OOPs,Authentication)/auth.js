class User{
    constructor(n){
        this.name=n
    }
    
    #checkUserName(username){
        let value=username.includes("#")?false:true;
        return value;
    }
    #checkPassword(password){
        let value=password.length>=8?true:false;
        return value;
    }

    async Signup(n,u,e,p,m,d){
        console.log("in")
        let isValidated=this.#checkUserName(n)&&this.#checkPassword(p);
        if(isValidated){
            this.username = u;
            this.name = n;
            this.email = e;
            this.password = p;
            this.mobile = m;
            this.description = d;

            let actual_data = JSON.stringify(this);
            console.log(actual_data)
            try {
                let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
                    method: 'POST',
                    body: actual_data,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (res.ok) {
                    let resdata = await res.json();
                    console.log(resdata);
                } else {
                    console.error('Failed to register. Status:', res.status);
                }
            } catch (error) {
                console.error('An error occurred during the registration:', error);
            }

        }


    }
}

let u1=new User();

document.getElementById("signup").addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let description=document.getElementById("description").value;
    u1.Signup(name,username,email,password,mobile,description);

})