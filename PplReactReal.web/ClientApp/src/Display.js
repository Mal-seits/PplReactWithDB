import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import AddPersonForm from './AddPersonForm';
import axios from 'axios';
import EditPersonForm from './EditPersonForm';
import PersonRow from './PersonRow';

class Display extends React.Component {
    state = {
        people: [],
        person: {

            firstName: '',
            lastName: '',
            age: '',
            id: 0


        },

        isLoading: false,
        isAddingPerson: false,
        showEditForm: false,
        selectedPeople: []

    }
    componentDidMount = () => {
        axios.get('/api/People/GetAllPeople').then(({ data }) => {
            this.setState({ people: data });
        });
    }
    onTextChange = e => {
        let person = this.state;
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }
    onAddClick = () => {
        this.setState({ isAddingPerson: true });
        axios.post('/api/People/AddPerson', this.state.person).then(() => {
            axios.get('/api/People/GetAllPeople').then(({ data }) => {
                this.setState({
                    people: data,
                    person: { firstName: '', lastName: '', age: '' },
                    isAddingPerson: false
                });
            });

        });
    }
    onDeleteClick = person => {

        axios.post('/api/People/DeletePerson', person).then(() => {
            axios.get('/api/People/GetAllPeople').then(({ data }) => {
                this.setState({
                    people: data,
                    person: { firstName: '', lastName: '', age: '' },
                    isAddingPerson: false
                });
            })
        })
    }
    onEditClick = p => {
        let showEditForm = this.state;
        showEditForm = true;
        let person = {...p};
        this.setState({ person, showEditForm });

    }
    onEditSaveClick = () => {
        let person = this.state;
        this.setState({ isAddingPerson: true, });
        axios.post('/api/People/EditPerson', person).then(() => {
            axios.get('/api/People/GetAllPeople').then(({ data }) => {
                this.setState({
                    people: data,
                    person: { firstName: '', lastName: '', age: '' },
                    isAddingPerson: false,
                    showEditForm : false
                });
            });
        });
    }
    onCancelEditClick = () => {
        let showEditForm = this.state;
        showEditForm = false;
        this.setState({ showEditForm, person: { firstName: '', lastName: '', age: '' } })
    }
    onDeleteAllClick = () => {
        let {selectedPeople, people} = this.state;
        selectedPeople.forEach(id => {
            let person = people.find(p => p.id === id);
           
            axios.post('/api/People/DeletePerson', person).then(() => {
                axios.get('/api/People/GetAllPeople').then(({ data }) => {
                    this.setState({
                        people: data,
                        person: { firstName: '', lastName: '', age: '' },
                        isAddingPerson: false,
                        selectedPeople: []

                    });
                })
            })
        });
    }
    onSelectAllClick = () => {

        let {people, selectedPeople} = this.state;
        people.forEach(person => {
          selectedPeople.push(person.id);

        });
       this.setState({selectedPeople});
    }


    addToSelected = id => {

        let selectedPeople = this.state.selectedPeople;
        if (selectedPeople.includes(id)) {
            selectedPeople = selectedPeople.filter(i => i !== id);
            this.setState({ selectedPeople })
        }
        else {
            selectedPeople.push(id);
        }
        this.setState({ selectedPeople });
        return true;

    }
    PeopleTable() {
        let { people, isLoading, selectedPeople } = this.state;

        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <table className="table table-header table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    <button disabled={this.state.selectedPeople.length === 0} className='btn btn-warning btn-block' onClick={this.onDeleteAllClick}>DELETE ALL</button>
                                    <button className='btn btn-warning btn-block' onClick={this.onSelectAllClick}>SELECT ALL</button>
                                </th>

                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!isLoading && <h4>Loading Data....</h4>}
                            {people.map(person =>
                                <PersonRow
                                    person={person}
                                    key={person.id}
                                    isLoading={isLoading}
                                    onEditClick={() => this.onEditClick(person)}
                                    onDeleteClick={() => this.onDeleteClick(person)}
                                    addToSelected={() => this.addToSelected(person.id)}
                                    isChecked={selectedPeople.includes(person.id)}

                                >

                                </PersonRow>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
    render() {
        let { person, isLoading, isAddingPerson, people, showEditForm } = this.state;

        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        {!showEditForm && <AddPersonForm
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}
                            onFirstNameChange={this.onTextChange}
                            onLastNameChange={this.onTextChange}
                            onAgeChange={this.onTextChange}
                            onAddClick={this.onAddClick}
                            isLoading={isAddingPerson}
                        >
                        </AddPersonForm>
                        }
                        {!!showEditForm && <EditPersonForm
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}

                            onFirstNameChange={this.onTextChange}
                            onLastNameChange={this.onTextChange}
                            onAgeChange={this.onTextChange}
                            onCancelEditClick={this.onCancelEditClick}
                            onEditSaveClick={this.onEditSaveClick}
                        >
                        </EditPersonForm>}

                        {this.PeopleTable()}
                    </div>

                </div>
            </div>
        )
    }

}
export default Display;