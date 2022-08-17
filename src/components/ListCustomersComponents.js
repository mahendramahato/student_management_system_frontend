import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import _ from "loadsh";

const pageSize = 5;

const ListCustomersComponents = () => {

    const [customers, setCustomers] = useState([])
    const [paginatedCustomers, setpaginatedCustomers] = useState([]);
    const [currentPage, setcurrentPage] = useState(1)

   

    useEffect(() => {
        getAllCustomers();
    }, [])

    const getAllCustomers = () =>{
        CustomerService.getAllCustomers().then((response) => {
            setCustomers(response.data)
            console.log(response.data)

            setpaginatedCustomers(_(response.data).slice(0).take(pageSize).value());
        }).catch(error =>{
            console.log(error)
        })
    }

    const deleteCustomer = (customerId) => {
        CustomerService.deleteCustomer(customerId).then((response) =>{
            getAllCustomers();
        }).catch(error =>{
            console.log(error);
        })
        // console.log(customerId)
    }

    const pageCount = customers? Math.ceil(customers.length/pageSize) :0;
    if(pageCount === 1)return null;
    const pages = _.range(1, pageCount+1);

    const pagination=(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(customers).slice(startIndex).take(pageSize).value();
        setpaginatedCustomers(paginatedPost)
    }

    return (
        <div className="container" style={{marginBottom: 20, marginTop: 20}}>
            <h2 className="text-center">Customer Lists</h2>
           
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Account Type</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Phone </th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedCustomers.map(
                            customer =>
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{width: 45, height: 45}}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{customer.firstName} {customer.lastName}</p>
                                            <p className="text-muted mb-0">{customer.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{customer.gender}</td>
                                <td>{customer.account}</td>
                                <td>{customer.dob}</td>
                                <td>
                                    <p className="fw-normal mb-1">{customer.address}</p>
                                </td>
                                <td>{customer.phoneNumber}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-customer/${customer.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick = {()=> deleteCustomer(customer.id)}
                                    style={{marginLeft:10}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div className="row" style={{marginTop: 20}}>
                <nav className="d-flex justify-content-center" aria-label="Page navigation example">
                    <ul className="pagination pg-blue">
                        {
                            pages.map((page)=>(
                                <li className={
                                    page === currentPage? "page-item active" : "page-item"
                                }>
                                    <p className="page-link" onClick={()=>pagination(page)}>
                                        {page}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            
            <div className="row" style={{marginTop: 20}}>
                <div className="col text-center">
                <Link to="/manager_dashboard" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
        
        
    )
}

export default ListCustomersComponents