import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import PatientServices from '../service/PatientServices';

class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName:'',
                lastName:'',
                diagnosis:'',
                address:'',
                phoneNumber:'',
                mdName:''
        }
        this.addFirstNameHandler = this.addFirstNameHandler.bind(this);
        this.addLastNameHandler = this.addLastNameHandler.bind(this);
        this.addDiagnosisHandler=this.addDiagnosisHandler.bind(this);
        this.addAddressHandler=this.addAddressHandler.bind(this);
        this.addPhoneNumberHandler=this.addPhoneNumberHandler. bind(this);
        this.addMdNameHandler=this.addMdNameHandler.bind(this);
        this.submitForm=this.submitForm.bind(this)
        this.cancelForm=this.cancelForm.bind(this)
        this.viewAll=this.viewAll.bind(this)
    }

    addFirstNameHandler =(e)=>{
        this.setState({firstName: e.target.value})
    }
    addLastNameHandler = (e)=>{
        this.setState({lastName:e.target.value})
    }
    addDiagnosisHandler = (e) => {
        this.setState({diagnosis:e.target.value})
    }
    addAddressHandler =(e) =>{
        this.setState({address:e.target.value})
    }
    addPhoneNumberHandler = (e) =>{
        this.setState({phoneNumber:e.target.value})
    }
    addMdNameHandler =(e) => {
        this.setState({mdName:e.target.value})
    }
    submitForm=(e)=> {
        e.preventDefault();
        let patient = {
            firstName: this.state.firstName, lastName: this.state.lastName, diagnosis: this.state.diagnosis, address: this.state.address, phoneNumber: this.state.phoneNumber, mdName: this.state.mdName
        }
        console.log('patient =>' + JSON.stringify(patient));

        PatientServices.addPatient(patient).then(res => {
            this.props.history.push('/patients')
        })
    }
    cancelForm=(e) => {
        this.setState({
            firstName:'',
                lastName:'',
                diagnosis:'',
                address:'',
                phoneNumber:'',
                mdName:''
        })
    }
    viewAll (){
       this.props.history.push('/patients')
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container text-center" >
                 <h1 >New Patient Form</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add patient</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor=""> First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.addFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> Last Name</label>
                                        <input placeholder="Last Name" name="LastName" className="form-control" value={this.state.lastName} onChange={this.addLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> Diagnosis</label>
                                        <input placeholder="Diagnosis" name="diagnosis" className="form-control" value={this.state.diagnosis} onChange={this.addDiagnosisHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> Address</label>
                                        <input placeholder="Patient Residential Address" name="address" className="form-control" value={this.state.address} onChange={this.addAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> Phone Number</label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.addPhoneNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> MD Name</label>
                                        <input placeholder="MD Name" name="mdName" className="form-control" value={this.state.mdName} onChange={this.addMdNameHandler}/>
                                        <Button variant="success" onClick={this.submitForm}>Submit</Button> <Button variant="danger" onClick={this.cancelForm}>Reset</Button>
                                        <Button variant="secondary" onClick={this.viewAll}> View all</Button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
                   

  
            </div>
        );
    }
}


export default AddPatient;