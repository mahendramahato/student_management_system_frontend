import React, { useState, useEffect } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import UserService from '../services/UserService'

export const AdminLogin = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  var e = "";
  var p = "";

  useEffect(() => {
    UserService.getAllUsers().then((response) =>{
      setUsers(response.data)
      // console.log(response.data)

    }).catch(error=>{
      console.log(error)
    })
  }, [])

  const handleSubmit = event=>{
    event.preventDefault()
    {
      users.map(usr=>{
        e = usr.email;
        p = usr.password;
        if(e === email && p === password){
          navigate('/admin_dashboard')
        }else{
          console.log("wrong email and password");
          // console.log(e, p)
          setError("Username or Password is incorrect. Try Again!")
          
        }
      })
    }
  }
  
  return (
    <section className="vh-75">
      <div className="container-fluid h-custom mt-4">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="" />
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">         
              <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="h1 fw-bold mb-0 me-3">Admin Login</p>
              </div>

              <div className="divider d-flex align-items-center my-4">
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline">
                <input type="email" id="form3Example3" className="form-control form-control-small"
                  placeholder="Enter a valid email" onChange={(event) => setEmail(event.target.value)}/>
                <label className="form-label" htmlFor="form3Example3"></label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline">
                <input type="password" id="form3Example4" className="form-control form-control-small"
                  placeholder="Enter a valid password" onChange={(event) => setPassword(event.target.value)}/>
                <label className="form-label" htmlFor="form3Example4"></label>
              </div>

              {/* Error display message */}
              {(error != "") ? (<div className="error text-center text-danger">{error}</div>) : ""}

              <div className="text-center text-lg-start pt-2">
                {/* <button type="button" className="btn btn-primary"
                  style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button> */}
                  <div className="col text-center">
                    <button className="btn btn-primary" type="submit" >Login</button>
                  </div> 
                  <p className="small fw-bold mt-2 pt-1 mb-0 text-center">Don't have an account? <Link to="/registration"
                  className="link-danger">Register</Link></p>
              </div>
              </form>

          </div>
        </div>
      </div>
      <br />
    </section>
  )
}
