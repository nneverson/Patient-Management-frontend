import React, { Component } from 'react';
import PatientServices from '../service/PatientServices';
import Button from 'react-bootstrap/Button';

class UpdatePatient extends Component {
constructor(props) {
        super(props);
        this.state = {
                id: this.props.match.params.id,
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
        this.addMdNameHandler=this.addMdNameHandler.bind(this);
        this.UpdatePatient=this.UpdatePatient.bind(this)
        this.addPhoneHandler = this.addPhoneHandler.bind(this)
      
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
   
    addMdNameHandler =(e) => {
        this.setState({mdName:e.target.value})
    }
    addPhoneHandler = (e) => {
        this.setState({phoneNumber: e.target.value})
    }
    UpdatePatient=(e)=> {
        e.preventDefault();
        let patient = {
            firstName: this.state.firstName, lastName: this.state.lastName, diagnosis: this.state.diagnosis, address: this.state.address, phoneNumber: this.state.phoneNumber, mdName: this.state.mdName
        }
         PatientServices.updatePatient(patient, this.state.id).then( res => {
            this.props.history.push('/patients');
         });
        
    }

    componentDidMount() {
        PatientServices.getPatientById(this.state.id).then( (res) => {
        let patient = res.data;
        this.setState({
                firstName: patient.firstName,
                lastName: patient.lastName,
                diagnosis: patient.diagnosis,
                address: patient.address,
                phoneNumber: patient.phoneNumber,
                mdName: patient.mdName
        });
        });
    }

    render() {
        return (
            <div className="container text-center" >
                 <h1 >Edit Patient</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            
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
                                        <label htmlFor=""> Patient Phone Number</label>
                                        <input placeholder="Phone Number" name="phone" className="form-control" value={this.state.phoneNumber} onChange={this.addPhoneHandler}/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor=""> MD Name</label>
                                        <input placeholder="MD Name" name="mdName" className="form-control" value={this.state.mdName} onChange={this.addMdNameHandler}/>
                                          <Button variant="success" onClick={ (e) => this.UpdatePatient(e)} className="btn btn-info"  >Save</Button> <Button variant="danger" onClick={this.cancelForm}>Reset</Button>
                                    </div>
                                     
                                      
                                </form>
                            </div>
                    </div>
                </div>
                   

  
            </div>
        );
    }
}

export default UpdatePatient;