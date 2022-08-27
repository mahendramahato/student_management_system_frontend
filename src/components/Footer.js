import React from 'react'

export const Footer = () => {
    return (
        
        <div>
            <br />
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-light text-muted">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                <a href="https://www.facebook.com/" className="me-4 text-reset">
                    <i className="bi bi-facebook-f">
                    <img src="images/facebook.svg" alt=""/>
                    </i>
                </a>
                <a href="https://twitter.com/" className="me-4 text-reset">
                    <i className="bi bi-twitter">
                        <img src="images/twitter.svg" alt=""/>
                    </i>
                </a>
                <a href="https://google.com/" className="me-4 text-reset">
                    <i className="fab fa-google">
                    <img src="images/google.svg" alt=""/>
                    </i>
                </a>
                <a href="https://instagram.com/" className="me-4 text-reset">
                    <i className="fab fa-instagram">
                    <img src="images/instagram.svg" alt=""/>
                    </i>
                </a>
                <a href="https://linkedin.com/" className="me-4 text-reset">
                    <i className="fab fa-linkedin">
                    <img src="images/linkedin.svg" alt=""/>
                    </i>
                </a>
                <a href="https://github.com/" className="me-4 text-reset">
                    <i className="fab fa-github">
                    <img src="images/github.svg" alt=""/>
                    </i>
                </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}
            {/* 
            <!-- Section: Links  --> */}
            <section className="border-bottom" >
                <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"><img src="images/building.svg" alt=""/></i>Software Solutions
                    </h6>
                    <p>
                        Here we take care of your all type of software problems. More for Less price. 
                    </p>
                    </div>
                    {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Employee Management System</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Bank Management System</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Library Management System</a>
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Orders</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Help</a>
                    </p>
                    </div>
                    {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3">
                        <img src="images/house.svg" alt=""/>
                        </i> New York, NY 10012, US</p>
                    <p>
                        <i className="fas fa-envelope me-3">
                        <img src="images/envelope.svg" alt=""/>
                        </i>
                        softwaresolutions@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3">
                            <img src="images/telephone-fill.svg" alt=""/>
                        </i> + 01 345 342 3342
                    </p>
                    <p><i className="fas fa-print me-3">
                        <img src="images/printer-fill.svg" alt=""/>
                        </i> + 01 345 342 3342
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  -->

            <!-- Copyright --> */}
            <div className="text-center p-4 text-secondary bg-light">
                © 2021 Copyright:
                <a className="text-reset fw-bold" >studentmanagementsystem.com</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}

export default Footer
