import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default function PersonRow({ person, onEditClick, isChecked, addToSelected, onDeleteClick, isLoading }) {
    let { firstName, lastName, age } = person;
    
    return (
        <tr>
            <td>

                <div className="form-check">
                <input type="checkbox" className="form-check-input" onChange={addToSelected} checked={isChecked} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Select</label>
                </div>

            </td>
            <td>
                {firstName}
            </td>
            <td>
                {lastName}
            </td>
            <td>
                {age}
            </td>
            <td>
                <button className='btn btn-warning btn-block' onClick={onEditClick} disabled={isLoading}>EDIT</button>
            </td>
            <td>
                <button className='btn btn-danger btn-block' onClick={onDeleteClick} disabled={isLoading}>Delete</button>
            </td>
        </tr>
    )
}