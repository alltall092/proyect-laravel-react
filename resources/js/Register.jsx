import React,{useState} from 'react';
import axios from 'axios';
import Header from './Header';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import '../css/register.css';
const Register=()=>{
    const headers = { 'Authorization': 'Bearer api-token',
    'Content-Type': 'application/json' };
const { register, handleSubmit } = useForm();

const onSubmit = data =>{ 
    const datos={name:data.name,email:data.email,password:data.password};
    
 axios.post('http://localhost:8000/api/store',JSON.stringify(datos),{headers}).then((result)=>{
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
 if (result.isConfirmed) {
    Swal.fire(' guardado con exito', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
}
).catch((err)=>console.log(err.response));   
    
    console.log(datos);

}


return(<>
<Header/>
<div className="container container-register">
<div className="row row-item">
<div className="col-md-6">
    <h2>formularios de Registro</h2>
<form  onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
<label>fullName</label>
<input type="text"  {...register("name", { required: true})} className="form-control" />
    </div>
    <div className="form-group">
<label>Email</label>
<input type="text" {...register("email", { required: true})} className="form-control"/>

    </div>
    <div className="form-group">
<label>Password</label>
<input type="text" className="form-control" {...register("password", { required: true})}/>

    </div>
    <div className="form-group">
<label>Confimar Password</label>
<input type="text" className="form-control" {...register("ConfirmPassword", { required: true})}/>

    </div>
<button type="submit" className="btn btn-success">Registrarse</button>

</form>




    </div>
    </div>
    </div>
</>)

}
export default Register;