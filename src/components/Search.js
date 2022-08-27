import React from 'react'
import {Link} from 'react-router-dom'

export const Search = () => {
    return (

        <div className="row">
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
                        <li><Link to="/students" className="dropdown-item">List Students</Link></li>
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
                    <h1 className="h2">Search</h1>
                </div>

                <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>

            </main>
        </div>

    )
}
