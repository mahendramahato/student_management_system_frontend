import React from 'react'
import {Link} from 'react-router-dom'

export const Manager_Dashboard = () => {

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
                        <h1 className="h2">Dashboard</h1>
                    </div>

                    <h2>Section title</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                </main>
            </div>

        </div>
    )
}
