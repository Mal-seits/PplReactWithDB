import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default function EditPersonForm({ firstName, lastName, age, onEditSaveClick, onCancelEditClick, onFirstNameChange, onLastNameChange, onAgeChange, isLoading }) {
    return (
        <div className="row jumbotron">
            <div className="col-md-2">
                <input className='form-control' type='text' placeholder='First Name'
                    name='firstName' value={firstName} onChange={onFirstNameChange} />
            </div>

            <div className="col-md-2">
                <input className='form-control' type='text' placeholder='Last Name'
                    name='lastName' value={lastName} onChange={onLastNameChange} />
            </div>
          
            <div className="col-md-2">
                <input className='form-control' type='text' placeholder='First Name'
                    name='age' value={age} onChange={onAgeChange} />
            </div>
            <div className="col-md-2">
                <button disabled={isLoading} className='btn btn-info btn-block' onClick={onEditSaveClick}>Edit PERSON</button>
            </div>
            <div className="col-md-2">
                <button disabled={isLoading} className='btn btn-danger btn-block' onClick={onCancelEditClick}>Cancel</button>
            </div>

        </div>
    )
}