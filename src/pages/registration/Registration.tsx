import React, { FC,useState } from 'react'
import {registration} from '../../services/auth-service'

import { useNavigate } from 'react-router-dom';

const Registration:FC<{}> = ()=>{

  const navigate = useNavigate();

  const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:""
  });

  const [validationError, setValidationError] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleSubmit = async(event:any)=>{
      event.preventDefault();
      try {
        const User:any = await registration(user);
        if(User){
          navigate('/', {replace: true});
        }
        setUser({
          name:"",
          email:"",
          password:"",
          confirmPassword:""
      })
      } catch (error:any) {
        if(!error.response){
          //"No Server Response"
        }else if(error.response.status === 403){
          // console.log(error.response.data.errorObject)
          setValidationError({
            ...error.response.data.errorObject
          })
          console.log(validationError)
        }
        else if(error.response.status === 500){
            //"Missing Username or password"
        }else{
          /**Login failed */
        }
      }
  }

  const handleChange = (event:any) =>{
      setUser({
        ...user,
        [event.target.name]: event.target.value
      })
  }

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 mx-auto bg-light p-5 custom-reg">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3 form-group">
            <label className='mb-2'>First name</label>
            <input
              type="text"
              className={validationError.name ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
              placeholder="Name"
              name='name'
              value={user.name}
              onChange={handleChange}
            />
              <div className="invalid-feedback">
                {validationError.name}
              </div>
          </div>

          <div className="mb-3">
            <label className='mb-2'>Email address</label>
            <input
              type="email"
              className={validationError.email ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
              placeholder="Enter email"
              name='email'
              value={user.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
                {validationError.email}
              </div>
          </div>
          <div className="mb-3">
            <label className='mb-2'>Password</label>
            <input
              type="password"
              className={validationError.password ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
              placeholder="Enter password"
              name='password'
              value={user.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
                {validationError.password}
              </div>
          </div>
          <div className="mb-3">
            <label className='mb-2'>Confirm Password</label>
            <input
              type="password"
              className={validationError.confirmPassword ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
              placeholder="Confirm password"
              name='confirmPassword'
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
                {validationError.confirmPassword}
              </div>
          </div>
          <div className="d-grid">
          <input className="btn btn-primary"  type="submit" value="Registration" />
            {/* <button type="submit" className="btn btn-primary">
              Sign Up
            </button> */}
          </div>
          <p className="forgot-password text-right mt-3">
            Already registered <a href="/login">Login?</a>
          </p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Registration