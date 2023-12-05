import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from './Service/EmployeeService';

const ListEmployeeComponent = () => {

  const [employeeArray, setEmployeeArray] = useState([])

  useEffect(()=>{
    getAllEmployee();
  },[]);

  function getAllEmployee() {
    EmployeeService.getAllEmployee()
    .then((res)=>{
      setEmployeeArray(res.data); 
      console.log(res);
    })
    .catch((e)=>{
      console.log(e);
    });
  }


  return (
    <div className='container'>
        <Link to={"/add-employee"} className='btn btn-primary mb-2 mt-3' href=''>Add Employee</Link>
        <h2 className='text-cener mb-4'>List Employee</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
        </table>
    </div>
  )
}

export default ListEmployeeComponent