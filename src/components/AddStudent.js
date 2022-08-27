import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import StudentService from '../services/StudentService'

export const AddStudent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [g_name, setGname] = useState('')
  const [g_email, setGemail] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('') 
  const [phoneNumber, setPhonenumber] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();

    const student = {firstName, lastName, gender, dob, g_name, g_email, address, email, phoneNumber}
      
    if(id){
      StudentService.updateStudent(id, student).then((response) =>{
        navigate('/students')
      }).catch(error =>{
        console.log(error)
      })
    }else{
      StudentService.createStudent(student).then((response) =>{

        console.log(response.data)
        navigate('/students')
  
      }).catch(error =>{
        console.log(error)
      })
    }  
  }

  useEffect(() => {

      StudentService.getStudentById(id).then((response) =>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setGender(response.data.gender)
        setDob(response.data.dob)
        setAddress(response.data.address)
        setEmail(response.data.email)
        setPhonenumber(response.data.phoneNumber)
        setGname(response.data.g_name)
        setGemail(response.data.g_email)

      }).catch(error => {
        console.log(error)
      })
  }, [])
  
  const title = ()=>{

    if(id){
      return <h1 className="h2">Update Student</h1>
    }else{
      return <h1 className="h2">Add Student</h1>
    }
  }
  return (
    <div>
        <div className="row" style={{marginBottom: 20}}>
          <header className="navbar sticky-top bg-info flex-md-nowrap p-0 shadow" style={{marginTop: 10}}>
          <Link to="/admin_dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">Admin</Link>
          <button className="navbar-toggler position-relative d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="navbar-nav">
              <div className="nav-item text-nowrap">
              <Link to="/home" className="nav-link px-3">Sign Out</Link>
              </div>
          </div>
          </header>

          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
              <li className="nav-item">
                  <Link to="/admin_dashboard" className="nav-link" aria-current="page">
                  <span data-feather="home" className="align-text-bottom"></span>
                  Dashboard
                  </Link>
              </li>

              <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-feather="shopping-cart" className="align-text-bottom"></span>
                  Student Menu
                  </a>
                  <ul className="dropdown-menu dropdown-menu-light">
                      <li><Link to="/add-student" className="dropdown-item">Add Student</Link></li>
                      <li><Link to="/students" className="dropdown-item">List Student</Link></li>
                  </ul>
              </li>

              <li className="nav-item">
                  <Link to="/search" className="nav-link" aria-current="page">
                  <span data-feather="home" className="align-text-bottom"></span>
                  Search
                  </Link>
              </li>

              <li className="nav-item">
                  <Link to="/events" className="nav-link" aria-current="page">
                  <span data-feather="home" className="align-text-bottom"></span>
                  Events
                  </Link>
              </li>

              </ul>
          </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  {title()}
              </div>
              <div className="container">
                      <div className="card bg-light">
                      <div className="card-body">
                      <h5>Personal Details</h5>
                      <hr className="mt-0 mb-0"/>
                        <form>
                        <div className="row">
                            <div className="col">
                                <div className="form-group mb-2">
                                    <label className="form-label"></label>
                                    <input
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group mb-2">
                                    <label className="form-label"></label>
                                    <input
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div className="form-group mb-2">
                              <label className="form-label"></label>
                              <input
                                type="text"
                                placeholder="Gender"
                                name="gender"
                                className="form-control"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                              >
                              </input>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group mb-2">
                              <label className="form-label"></label>
                              <input
                                type="text"
                                placeholder="Date of birth"
                                name="dob"
                                className="form-control"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                              >
                              </input>
                            </div>
                          </div>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label"></label>
                            <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label"></label>
                            <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label"></label>
                            <input
                            type="text"
                            placeholder="Phone number"
                            name="phoneNumber"
                            className="form-control"
                            value={phoneNumber}
                            onChange={(e) => setPhonenumber(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div className="form-group mb-2">
                              <label className="form-label"></label>
                              <input
                              type="text"
                              placeholder="Guardian name"
                              name="guardian_name"
                              className="form-control"
                              value={g_name}
                              onChange={(e) => setGname(e.target.value)}
                              >
                              </input>
                            </div>
                          </div>

                          <div className="col">
                            <div className="form-group mb-2">
                              <label className="form-label"></label>
                              <input
                              type="text"
                              placeholder="Guardian email"
                              name="guardian_email"
                              className="form-control"
                              value={g_email}
                              onChange={(e) => setGemail(e.target.value)}
                              >
                              </input>
                            </div>
                          </div>
                        </div>  

                        {/* <h5>Course Details</h5>
                        <hr className="mt-0 mb-0"/> */}

                        <div className="container text-center" style={{marginTop: 20}}>
                          <button className="btn btn-success" style={{marginRight: 10}} onClick={(e) => saveOrUpdateStudent(e)} >Save</button>
                          <Link to="/admin_dashboard" className="btn btn-danger">Cancel</Link>
                        </div>

                        </form>
                      </div>
                      </div>                         
                  </div>
          </main>
        </div>
    </div>
  )
}
