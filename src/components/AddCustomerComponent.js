import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import CustomerService from '../services/CustomerService'

export const AddCustomerComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [account, setAccount] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('') 
  const [phoneNumber, setPhonenumber] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const customer = {firstName, lastName, gender, account, dob, address, email, phoneNumber}
      
    if(id){
      CustomerService.updateCustomer(id, customer).then((response) =>{
        navigate('/customers')
      }).catch(error =>{
        console.log(error)
      })
    }else{
      CustomerService.createCustomer(customer).then((response) =>{

        console.log(response.data)
        navigate('/customers')
  
      }).catch(error =>{
        console.log(error)
      })
    }  
  }

  useEffect(() => {

      CustomerService.getCustomerById(id).then((response) =>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setGender(response.data.gender)
        setDob(response.data.dob)
        setAddress(response.data.address)
        setAccount(response.data.account)
        setEmail(response.data.email)
        setPhonenumber(response.data.phoneNumber)

      }).catch(error => {
        console.log(error)
      })
  }, [])
  
  const title = ()=>{

    if(id){
      return <h1 className="h2">Update Customer</h1>
    }else{
      return <h1 className="h2">Add Client</h1>
    }
  }
  return (
    <div>
        <div className="row" style={{marginBottom: 20}}>
          <header className="navbar sticky-top bg-info flex-md-nowrap p-0 shadow" style={{marginTop: 10}}>
          <Link to="/manager_dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">Admin</Link>
          <button className="navbar-toggler position-relative d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
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
                  <Link to="/manager_dashboard" className="nav-link" aria-current="page">
                  <span data-feather="home" className="align-text-bottom"></span>
                  Dashboard
                  </Link>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-feather="file" className="align-text-bottom"></span>
                  Cashier Menu
                  </a>
                  <ul class="dropdown-menu dropdown-menu-light">
                      <li><Link to="/add-cashier" className="dropdown-item">Add Cashier</Link></li>
                      <li><Link to="/cashiers" className="dropdown-item">List Cashiers</Link></li>
                  </ul>
              </li>
              <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-feather="shopping-cart" className="align-text-bottom"></span>
                  Client Menu
                  </a>
                  <ul class="dropdown-menu dropdown-menu-light">
                      <li><Link to="/add-customer" className="dropdown-item">Add Client</Link></li>
                      <li><Link to="/customers" className="dropdown-item">List Clients</Link></li>
                  </ul>
              </li>
              </ul>
          </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  {title()}
              </div>
              <div className="container">
                      <div className="card">
                      <div className="card-body">
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
                              placeholder="Account type(Checkings / Savings)"
                              name="address"
                              className="form-control"
                              value={account}
                              onChange={(e) => setAccount(e.target.value)}
                              >
                              </input>
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

                          <div className="container" style={{marginTop: 20}}>
                            <button className="btn btn-success" style={{marginRight: 20}} onClick={(e) => saveOrUpdateCustomer(e)} >Save</button>
                            <Link to="/manager_dashboard" className="btn btn-danger">Cancel</Link>
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
