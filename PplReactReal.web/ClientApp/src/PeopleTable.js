import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PersonRow from './PersonRow';

export default function PeopleTable({ isLoading, people, onEditClick, onDeleteClick }) {

    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <table className="table table-header table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                     {people.map((person) => 
                            <PersonRow
                                person={person}
                                key={person.id}
                                isLoading={isLoading}
                                onEditClick={onEditClick}
                                onDeleteClick={onDeleteClick}
                            >

                            </PersonRow>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}