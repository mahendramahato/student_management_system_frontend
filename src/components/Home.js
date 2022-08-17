import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card shadow" style={{paddingTop:30, paddingLeft:20, paddingRight:20, marginTop:15}}>
                    <img src="/images/manager.png" className="card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Admin</h5>
                        <Link to="/manager_login" className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card shadow" style={{paddingTop:30, paddingLeft:20, paddingRight:20, marginTop:15}}>
                        <img src="/images/cashier.png" className="card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cashier</h5>
                            <a href="#" className="btn btn-primary">Login</a>
                        </div>
                    </div>
                </div>
            <div className="col-md-2">
                <div className="card shadow" style={{paddingTop:30, paddingLeft:20, paddingRight:20, marginTop:15}}>
                        <img src="/images/acc_holder.png" className="card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Client</h5>
                            <a href="#" className="btn btn-primary">Login</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
