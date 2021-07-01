import axios from 'axios'

const patientBaseUrl= "http://localhost:8081/patients";

class PatientService{
    getPatients(){
        return axios.get(patientBaseUrl)
    }
    addPatient(patient){
        return axios.post(patientBaseUrl + "/add", patient)
    }
    getPatientById(patientId){
        return axios.get(patientBaseUrl+ "/patient/" + patientId)
    }
    updatePatient(patient, patientId){
        return axios.put(patientBaseUrl + "/updatepatient/"+ patientId, patient)
    }
    deletePatient(patientId){
        return axios.delete(patientBaseUrl +"/delete/"+ patientId )
    }
}
export default new PatientService();