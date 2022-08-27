import React from 'react'

export const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#" style={{marginLeft:10}}>
                <img src="/images/bnk.png" width="30" height="30" className="d-inline-block align-top" alt="" style={{marginRight:10}}/>
                Student Management System
            </a>
        </nav>
    )
}

export default HeaderComponent
