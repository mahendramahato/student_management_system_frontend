import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import CashierService from '../services/CashierService'

export const AddCashier = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [cpass, setCashierpwd] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('') 
    const [phoneNumber, setPhonenumber] = useState('')
    const navigate = useNavigate();

    const saveCashier = (e) => {
      e.preventDefault();
  
      const cashier = {firstName, lastName, username, cpass, address, email, phoneNumber}
  
      CashierService.createCashier(cashier).then((response) =>{
  
        console.log(response.data)
        navigate('/cashiers')
  
      }).catch(error =>{
        console.log(error)
      })
    }

    return (
        <div>
            <div className="row">
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
                        <h1 className="h2">Add Cashier</h1>
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

                                <div className="form-group mb-2">
                                    <label className="form-label"></label>
                                    <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"></label>
                                    <input
                                    type="text"
                                    placeholder="Cashier's pass number"
                                    name="cpass"
                                    className="form-control"
                                    value={cpass}
                                    onChange={(e) => setCashierpwd(e.target.value)}
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

                                <button className="btn btn-success" style={{marginRight: 10}} onClick={(e) => saveCashier(e)} >Save</button>
                                <Link to="/manager_dashboard" className="btn btn-danger">Cancel</Link>

                                </form>
                            </div>
                            </div>
                        
                        </div>
                </main>
            </div>
        </div>
    )
}
