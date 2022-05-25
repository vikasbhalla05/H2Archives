import React from 'react'
import InputForm from './InputForm';
import PatientData from './PatientData'


export default function DoctorDash() {

  // const [createNew, handleCreateNew] = useState(false);

  return (
    <>
      <div className="container my-5 mx-5 d-flex">
        <div className="container m-l-30">
          <h1>Doctor Details</h1><br />
          <h3>Name: </h3>
          <h2>Identity: </h2>
          <InputForm className='my-5'/>
        </div>
        <div className="container m-l-30">
          <h1>All records</h1><span className='btn btn-primary' >Create New</span>
          <PatientData />
        </div>
      </div>
    </>
  )
}
