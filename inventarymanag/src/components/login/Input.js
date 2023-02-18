import React, { Componenet } from 'react';
import avatar from '../../assets/img/avatar.png';


export default function Input (){
    return (
        <div className='container box__login'>
            <div className='box'>
                <div className='form__body'>
                    <img src={avatar} alt="user_login" />
                    <p className="text">Bienvenido</p>                    
                    <form className='login__form'>
                        <input type="text" placeholder="email o nombre de usuario"></input>
                        <input type="password" placeholder='Constraseña'></input>
                        <button type="submit" className="">Iniciar sesión</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}