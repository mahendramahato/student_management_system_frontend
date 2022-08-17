import React from 'react'
import {Link} from 'react-router-dom'

export const Manager_login = () => {
  return (
    <section className="vh-75">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="h1 fw-bold mb-0 me-3">Admin Login</p>
              </div>
    
              <div className="divider d-flex align-items-center my-4">
              </div>
    
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-small"
                  placeholder="Enter a valid username" />
                <label className="form-label" for="form3Example3"></label>
              </div>
    
              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-small"
                  placeholder="Enter a valid password" />
                <label className="form-label" for="form3Example4"></label>
              </div>
    
              <div className="text-center text-lg-start mt-4 pt-2">
                {/* <button type="button" className="btn btn-primary"
                  style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button> */}
                <Link to="/manager_dashboard" className="btn btn-primary">Login</Link>
              </div>
    
            </form>
          </div>
        </div>
      </div>
      <br />
    </section>
  )
}
