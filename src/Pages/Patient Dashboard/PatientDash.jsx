import React from 'react'

export default function PatientDash() {
  return (
    <>
      <div className="container my-5 mx-5 d-flex">
        <div className="container m-l-30">
          <h1>Patient Details</h1><br />
          <h3>Name: </h3>
          <h2>Identity: </h2>

        </div>
        <div className="container m-l-30">
          <h1>Patient records</h1>

          <div className="container row mt-5">
            <div class="card">
              <div class="card-header">
                Date
              </div>
              <div class="card-body">
                <h5 class="card-title">Desease Name</h5>
                <p class="card-text">text & medications written by the doctor</p>
                <p class="card-text"><b>Hospital</b>: Name</p>
                <p class="card-text"><b>Doctor</b>: Name</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
