import React,{useState} from 'react'

const SignUp = () => {


//initial states of the input feilds
const [inputs, setInputs] = useState({
    name:"",
    mobile:"",  
    email:"",
    address:"",
    password:""
  })

  const handleChange = (e) =>{

    setInputs((prev) =>({
      ...prev,
      [e.target.name]:e.target.value,
    }));


  };

   //send form data and refreshing the page
   const handleSubmit =(e) =>{
    e.preventDefault();

    //sendRequest().then(()=>navigate("/user"));
    //console.log(inputs)
  };

  return (
    <div>
        <form onSubmit={()=>handleSubmit}>
  <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" name="name" onChange={handleChange} value={inputs.name} class="form-control" id="exampleInputName"  placeholder="Enter your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputMobile">Mobile No</label>
    <input type="tel" name="mobile" onChange={handleChange} value={inputs.mobile} class="form-control" id="exampleInputmobile" placeholder="07xxxxxxxx"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">E-mail</label>
    <input type="email" name="email" onChange={handleChange} value={inputs.email} class="form-control" id="exampleInputEmail" placeholder="abc@gmail.com"/>
  </div>

  <div class="form-group">
    <label for="exampleInputAddress">Address</label>
    <input type="text" name="address" onChange={handleChange} value={inputs.address} class="form-control" id="exampleInputPassword1" placeholder="Address"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" onChange={handleChange} value={inputs.password} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    <small id ="smallName"  className = "smallName">We never share your password with anyone</small>
  </div>


  <br/>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>

  )
}

export default SignUp