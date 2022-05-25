import React from 'react'

export default function PatientLogin() {
  return (
    <div className='container my-5'>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Identity</label>
                <input type="number" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                <input type="tel" name="phone" id="exampleInputPassword1" className="form-label" pattern="[+]{1}[0-9]{11,14}" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
