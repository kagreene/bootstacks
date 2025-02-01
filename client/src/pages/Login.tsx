import { useState } from "react";
import { Link } from "react-router";
import { login } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";
import Auth from '../utils/auth';
import { useNavigate } from "react-router";

export const Login = () => {
	const navigate = useNavigate();

    const [ inputs, setInputs ] = useState <UserLogin> ({
        username:"",
        password:""
    });

    const onHandleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const name = event.target.name;
        const value = event.target.value;
       setInputs( (prevFormData ) => ({ ...prevFormData, [name]:value }))
    }

    const handleSubmit = async ( event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const data = await login(inputs);
        console.log(data);
        Auth.login(data.token, navigate);
      } catch (err) {
        console.log(err);
      }
    }


    return (
      
      <div className='container-fluid mt-5' id='contact'>
          
        <div className='row p-0 justify-content-center'>
          
          <div className='col-sm-9 col-md-6 col-lg-9 col-xl-6 col-xxl-6'>
              <div>
                  <h1 style={{ textAlign:"center" }} className='intro-h1'>Login</h1>
              </div>

              <form onSubmit={ handleSubmit }>
                  <div>
                      <label className='contact-label mt-5'> Username </label>
                      <input 
                          type='text' 
                          name='username'
                          className="form-control" 
                          value={ inputs.username }
                          onChange={ onHandleChange }
                      />
                  </div>

                  <div>
                      <label className='contact-label mt-4'> Password </label>
                      <input 
                          type='password' 
                          name='password'
                          className="form-control" 
                          value = { inputs.password }
                          onChange={ onHandleChange }
                      />
                  </div>

                  <div>
                    <p>Don't you have an account? <Link to={'/register'}> Signup</Link></p>
                  </div>

                  <div className='mt-4'> 
                      <button type='submit' className='btn btn-dark w-lg-25'>Submit</button>
                  </div>
              </form>
          </div> 
          
      </div>
    </div>
  )
}

