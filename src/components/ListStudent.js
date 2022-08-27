import React, {useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'
import _ from "loadsh";

const pageSize = 5;

const ListStudent = () => {

    const [students, setStudents] = useState([])
    const [paginatedStudents, setpaginatedStudents] = useState([]);
    const [currentPage, setcurrentPage] = useState(1)

    const getAllStudents = () =>{
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data)

            setpaginatedStudents(_(response.data).slice(0).take(pageSize).value());
        }).catch(error =>{
            console.log(error)
        })
    }

    useEffect(() => {
        getAllStudents();
    }, [])

    const deleteStudent = (studentId) => {
        StudentService.deleteStudent(studentId).then((response) =>{
            getAllStudents();
        }).catch(error =>{
            console.log(error);
        })
        // console.log(studentId)
    }

    const pageCount = students? Math.ceil(students.length/pageSize) :0;
    if(pageCount === 0)return null;
    const pages = _.range(1, pageCount+1);

    const pagination=(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(students).slice(startIndex).take(pageSize).value();
        setpaginatedStudents(paginatedPost)
    }

    return (

        <div className="container" style={{marginBottom: 20, marginTop: 20}}>
            <h2 className="text-center">Student Lists</h2>

            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedStudents.map(
                            student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{student.firstName} {student.lastName}</p>
                                        <p className="text-muted mb-0">{student.email}</p>
                                    </div>
                                </td>
                                <td>{student.gender}</td>
                                <td>{student.dob}</td>
                                <td>
                                    <p className="fw-normal mb-1">{student.address}</p>
                                </td>
                                <td>
                                    <Link className="btn btn-success" to={`/detail-info/${student.id}`}>More Info ...</Link>
                                    <button className="btn btn-danger" onClick={()=>deleteStudent(student.id)}
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
                <Link to="/admin_dashboard" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>

    )
}

export default ListStudent
