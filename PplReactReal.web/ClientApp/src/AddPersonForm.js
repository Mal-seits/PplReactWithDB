import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default function AddPersonForm({ firstName, lastName, age, onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, isLoading }) {
    return (
        <div className="row jumbotron">
            <div className="col-md-3">
                <input className='form-control' type='text' placeholder='First Name'
                    name='firstName' value={firstName} onChange={onFirstNameChange} />
            </div>

            <div className="col-md-3">
                <input className='form-control' type='text' placeholder='Last Name'
                    name='lastName' value={lastName} onChange={onLastNameChange} />
            </div>
            <div className="col-md-3">
                <input className='form-control' type='text' placeholder='Age'
                    name='age' value={age} onChange={onAgeChange} />
            </div>
            <div className="col-md-3">
                <button disabled={isLoading} className='btn btn-primary btn-block' onClick={onAddClick}>ADD PERSON</button>
            </div>

        </div>
    )
}