import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import StudentService from '../services/StudentService'

const DetailInfo = () => {

    const [student, setStudent] = useState([])
    const {id} = useParams();

    useEffect(() => {
        StudentService.getStudentById(id).then((response) =>{
            setStudent(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    
    return (
        <section className="">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{borderRadius: 8}}>

                            <div className="row g-0">

                                <div className="col-md-4 gradient-custom text-center text-white"
                                    style={{borderTopLeftRadius: 8, borderBottomLeftRadius: 8}}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" style={{width: 80}} />
                                    <h5>{student.firstName} {student.lastName}</h5>
                                    <p>{student.dob}</p>


                                    <div className="row pt-1 text-center">
                                            <div className="col">
                                            <Link className="btn btn-info text-white" to={`/edit-student/${student.id}`}>Update</Link>
                                            {/* <Link className="btn btn-info" to="/edit-student">Update</Link> */}
                                            </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h5>Detailed Student Information</h5>
                                        <hr className="mt-0 mb-4"/>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{student.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">{student.phoneNumber}</p>
                                            </div>
                                        </div>

                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Address</h6>
                                                <p className="text-muted">{student.address}</p>
                                            </div>
                                            {/* <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">{student.phoneNumber}</p>
                                            </div> */}
                                        </div>

                                        <h5>Guardian Information</h5>
                                        <hr className="mt-0 mb-4"/>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Guardian Name</h6>
                                                <p className="text-muted">{student.g_name}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Guardian Email</h6>
                                                <p className="text-muted">{student.g_email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col text-center">
                <Link to="/students" className="btn btn-primary">Back</Link>
                </div>
            </div>
            </div>
        </section>
    )
}

export default DetailInfo
