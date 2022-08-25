import axios from 'axios'

const Emp_api='http://localhost:8080/api/emp/listall';

class EmpService {

    getEmp() {
        return axios.get(Emp_api);}
}

export default new EmpService();

