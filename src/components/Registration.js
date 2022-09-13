import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import UserService from '../services/UserService'

export const Registration = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const saveUser = (e) => {
        e.preventDefault();

        const user = {firstName, lastName, email, password}
        UserService.createUser(user).then((response) =>{
            console.log(response.data)
            navigate('/admin_login')
        }).catch(error =>{
            console.log(error)
        })
    }

    return (
        <section className="" style={{backgroundColor: 'white'}}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: 25}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold">Sign up</p>

                            <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example1c" className="form-control" 
                                placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                                <label className="form-label" htmlFor="form3Example1c"></label>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example2c" className="form-control" 
                                placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                                <label className="form-label" htmlFor="form3Example1c"></label>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" className="form-control" 
                                placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                                <label className="form-label" htmlFor="form3Example3c"></label>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="password" id="form3Example4c" className="form-control" 
                                placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                                <label className="form-label" htmlFor="form3Example4c"></label>
                                </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <label className="form-check-label" htmlFor="form2Example3">
                                Already registered? <Link to="/admin_login">Login Here</Link>
                                </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                onClick={(e) => saveUser(e)}>Register</button>
                            </div>

                            </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            style={{width: "80%"}} alt=" "/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
