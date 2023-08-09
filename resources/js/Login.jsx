import { useState } from 'react';
import '../css/login.css';
import Header from './Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Login=()=>{
    const headers = { 'Authorization': 'Bearer api-token',
    'Content-Type': 'application/json' };
const { register, handleSubmit } = useForm();

const onSubmit = data =>{ 
 axios.post('http://localhost:8000/api/login',JSON.stringify(data),{headers}).then(res=>{
    const token = res.data.token;
    const message=res.data.message;
    localStore.setItem("api-token",token);
    if(token==true){
return(<><div className="alert alert-success" role="alert">
  {message}
</div></>)

    }else{
return(<><div className="alert alert-danger" role="alert">
  {message}
</div></>)

    }


 })
 .catch(err=>console.log(err.response));
 console.log(data);
}

return(<>
<Header/>
<div className="container container-login">
    <div className="row">
    <div className="col-md-6 register">
    <h2 className="login login1">Login</h2>
<form onSubmit={handleSubmit(onSubmit)}> 
<div className="form-group">
<label className="login">Nombre de usuario o correo electronico</label>
<input type="text" {...register("email", { required: true})} className="form-control login"/>

</div>

<div className="form-group">
<label className="login" >Contraseña</label>
<input type="password" {...register("password", { required: true})} className="form-control login"/>
</div>

<div className="form-group">
<button type="submit" className="btn btn-success boton ">Acceder</button>
<input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label className="form-check-label checkbox " for="flexCheckIndeterminate">
    Recuerdame
  </label>
<a href="#"className="login" > Loss your Password</a>
</div>
</form>     
</div>

<div className="col-md-6 registrar">

<h2 className="login">Register</h2>
<p className="login" >dont have an account? register one!</p>
<button type="button" className="btn btn-light login">Register am Account</button>
    </div>

</div>
</div>

</>)

}
    export default Login;