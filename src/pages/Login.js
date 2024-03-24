import React, { useContext } from "react";
import {AuthContext} from '../auth/AuthContex';
import MiPrimerComponente from '../components/MiPrimerComponente/MiPrimerComponente'

const Login = ()=>{
    const user = useContext(AuthContext)
    return(
        <div className='mt-10'>
              <h1 className="text-3xl font-bold underline text-lime-800">
        Hola nuevamente {user.user}!
      </h1>
            Página de login
            <MiPrimerComponente/>

        </div>
    )
}

export default Login