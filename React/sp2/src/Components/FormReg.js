import React from 'react'

let initial={
    name:"",
    username:"",
    email:"",
    country:"",
    imagesrc:"",
    password:"",
    isMarried:false,

}
const FormReg = () => {
    let [info,setInfo]=React.useState(initial);
    const [imagePreview, setImagePreview] = React.useState('');
    let {name,username,email,country,imagesrc,password,isMarried}=info;

    const handleChange=(e)=>{
        const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.type === "file") {
        setInfo({ ...info, imagesrc: e.target.files[0] });

        // Optional: Display a preview of the selected image
        const reader = new FileReader();
        reader.onload = (event) => {
          setImagePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    } else {
      setInfo({ ...info, [e.target.name]: val });
    }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(info)
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name : 
                <input 
                value={name}
                name="name"
                placeholder='Name'
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Username : 
                <input 
                value={username}
                name="username"
                placeholder='Username'
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Email : 
                <input 
                value={email}
                name="email"
                placeholder='Email'
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Country :
            <select name='country' value={country} onChange={handleChange}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="russia">Russia</option>
                <option value="england">England</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
            </select>
            </label>
            <br/>            
            <label>
                Password : 
                <input 
                type="file"
                value={imagesrc}
                name="imagesrc"
                placeholder='Image'
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Password : 
                <input 
                value={password}
                name="password"
                placeholder='Password'
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Married : 
                <input 
                type="checkbox"
                checked={isMarried}
                name="isMarried"
                placeholder='Married'
                onChange={handleChange}
                />
            </label>
            <br/>
            {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
          />
        )}
        <br />
            <input type="submit" value="Submit"/>
        </form>
      
    </div>
  )
}

export default FormReg
