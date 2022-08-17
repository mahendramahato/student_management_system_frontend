import React from 'react'

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary header">
                    <img style={{width:250, paddingLeft:40, paddingTop:20}} 
                    src="/images/bnk.png" alt="" 
                    />
                    <div className="navText">
                        <h1 className="navbar-text">
                            Silver Coin Banking
                        </h1>
                    </div>                     
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
