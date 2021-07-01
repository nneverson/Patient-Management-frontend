import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import PatientServices from "../service/PatientServices";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["firstName"];

class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
      searchTerm: "",
    };

    this.addPatient = this.addPatient.bind(this);
    this.editPatient = this.editPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  addPatient() {
    this.props.history.push("/add");
  }
  editPatient(id) {
    this.props.history.push("/updatepatient/" + id);
  }
  deletePatient(id) {
    PatientServices.deletePatient(id).then((res) => {
      this.setState({
        patients: this.state.patients.filter((patient) => patient.id !== id),
      });
    });
  }
  componentDidMount() {
    PatientServices.getPatients().then((res) => {
      this.setState({ patients: res.data });
    });
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const filteredPatients = this.state.patients.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <h2 className="text-center">Patient List</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Diagnosis</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.diagnosis}</td>
                <td>{patient.address}</td>
                <td>{patient.phoneNumber}</td>
                <td>{patient.mdName}</td>
                <td>
                  <Button
                    onClick={() => this.editPatient(patient.id)}
                    className="btn btn-info"
                  >
                    {" "}
                    Update
                  </Button>
                  <Button
                    onClick={() => this.deletePatient(patient.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button variant="primary float-right" onClick={this.addPatient}>
          Add Patient
        </Button>
      </div>
    );
  }
}

export default PatientList;
