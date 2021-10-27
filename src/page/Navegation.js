import React, {Fragment} from "react";
import { Link } from "react-router-dom";
const Navegation = ()=>{
    return(
        <Fragment>
            <div className="">
                <nav className="nav">
                   <Link className="" to="/"> Inicio </Link>
                   <Link className="" to="/Login"> Login </Link>
                   <Link className="" to="/create"> Crear Cuenta</Link>
                </nav>
            </div>
        </Fragment>
    );
}

export default Navegation;