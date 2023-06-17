import React from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import {BiLockAlt} from 'react-icons/bi'

const Login = () => {
    const loginHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div className='login-container'>
        <div className='login'>
            <h2>Login</h2>
            <hr/>

            <form className='form' onSubmit={loginHandler}>
                <div className='form-control'>
                    <FaRegEnvelope color='#ababab' size={28} />
                    <input type='text' name='email' placeholder='Enter email address'/>
                </div>

                <div className='form-control'>
                    <BiLockAlt color='#ababab' size={32}/>
                    <input type='password' name='password' placeholder='Enter password'/>
                </div>

                <div className='other-content'>
                    <span className='first'><input type='checkbox'/>Remember me</span>
                    <span className='second'>Forget password?</span>
                </div>  
                <div className='form-control'> 
                    <button className='log'>Sign In</button>
                </div>

                <div className='signup-message'>
                    <span>Don't have an account? 
                        <a href="#singUp">Signup</a>
                    </span>
                </div>

            </form>
        </div>

    </div>
  )
}

export default Login