import React, {Fragment} from "react";

const Login = ()=>{
    return(
             <Fragment>
            <form className="form-contenedor"
         
            >   <div className="title"> 
                    <h1> Login </h1>
                </div>

                <div className="form-item">
                    <label> Correo </label>
                    <input 
                        type="email"
                        name="correo"
                    />
                </div>

                
                <div className="form-item">
                    <label> Contraseña </label>
                    <input 
                        type="email"
                        name="contrasena"
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

export default Login;