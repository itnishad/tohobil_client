import React,{useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import {login} from '../../services/auth-service'
import AuthContext from '../../context-api/authContext';


const Login = ()=>{

  const navigate = useNavigate();
  
  const {state, dispatch} = useContext(AuthContext);

  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const [errorHandel, seterrorHandel] = useState(false);


  const handleChange = (event:any) =>{
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async(event:any)=>{
    event.preventDefault();
    
    try {
      const User:any = await login(user);
      if(User){
        dispatch({type: "USER", payload: User})
        navigate('/admin', {replace: true});
      }
      
    } catch (error:any) {
      console.log(error);
      if(!error.response.data){
        alert("No Server Response")
      }else{
        seterrorHandel(true);
      }
    }
    
    setUser({
      email:"",
      password:""
  })
}

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 p-5">
        <div className="col-5 bg-light p-5 custom-log">

        {errorHandel ?  <Alert  variant="danger" onClose={() => seterrorHandel(false)} dismissible>
          Incorrect username or password
          </Alert> : null}


          <form onSubmit={handleSubmit}>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label className='mb-2'>Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className='mb-2'>Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                  autoComplete="on"
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label ms-2" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
              <input className="btn btn-primary"  type="submit" value="LogIn" />
                {/* <button type="submit" className="btn btn-primary">
                  Submit
                </button> */}
              </div>
              <p className="forgot-password text-right mt-3">
                don't have account <a href="/registration">Registration?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login