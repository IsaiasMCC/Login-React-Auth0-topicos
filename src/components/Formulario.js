import React,{Fragment, useState} from 'react';
import axios from 'axios';
const Formulario = () =>{
    
    //state


    const [user, createUser] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        genero: '',
        contrasena: '',
        confir_contra: ''
    });


    const verficarUser = () =>{
        return (user.nombre.trim() !=='' && user.telefono.trim() !=='' &&  user.correo.trim() !=='' && user.direccion.trim() &&
        user.genero.trim() !=='' && user.contrasena.trim() !== '', user.confir_contra.trim());
    }

    const submitUser = (e)=>{
      e.preventDefault();  

        if(verficarUser){
            
            const url = "http://localhost:3050/api/usuarios";

            axios({
                method: 'post',
                url: url,
                data: user
            })
            .then( (res) =>{
                console.log(res);
            });
        } 
    }

    const getUser = (e) =>{
        createUser(
            {   
                ...user,
                [e.target.name]: e.target.value,
            }
        )
    }
   //limpiar
    
   
    return(
        <Fragment>
            <form className="form-contenedor"
            onSubmit = { submitUser}
            >   <div className="title"> 
                    <h1> Crear Cuenta </h1>
                </div>
                <div className="form-item">
                    <label> Nombre</label>
                    <input 
                        onChange= {getUser}
                        type ="text"
                        name="nombre"
                        value = {user.nombre}
                    />
                </div>

                <div className="form-item">
                    <label> Telefono </label>
                    <input 
                        onChange = {getUser}
                        type="text"
                        name="telefono"
                        value = {user.telefono}
                    />
                </div>

                <div className="form-item">
                    <label> Correo </label>
                    <input 
                        onChange = {getUser}
                        type="email"
                        name="correo"
                        value = {user.correo}
                    />
                </div>

                <div className="form-item">
                    <label> Direccion </label>
                    <input 
                        onChange = {getUser}
                        type="text"
                        name="direccion"
                        value = {user.direccion}
                    />
                </div>

                <div className="form-item">
                <label id="name"> Genero </label>
                     <br/>
                </div>

                             <input onChange={getUser} type="radio" name="genero" value="true"/>
                            <label  >
                                Masculino
                            </label>
                        
                            <input onChange={getUser}  type="radio" name="genero"  value="false" />
                            <label >
                                Femenino
                            </label>

                <div className="form-item">
                    <label> Contraseña </label>
                    <input 
                        onChange = {getUser}
                        type="password"
                        name="contrasena"
                        value = {user.contrasena}
                    />
                </div>

                <div className="form-item">
                    <label> Confirmar Contraseña </label>
                    <input 
                        onChange = {getUser}
                        type="password"
                        name="confir_contra"
                        value = {user.confir_contra}
                    />
                </div>
            
                    <input
                    className="boton" 
                        type="submit"
                        value="Guardar"
                    />

       
            </form>
        </Fragment>
    );
}

export default Formulario;