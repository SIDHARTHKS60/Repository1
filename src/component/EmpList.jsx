import React from 'react';
import EmpService from '../util/api';

class EmpList extends React.Component {
    
    constructor (props) {
        super(props)
        this.state={employees:[]}
    }

    componentDidMount() {
        EmpService.getEmp().then((response)=>{
            this.setState({employees: response.data})
        })
    }

render(){
    return ( 
        <div>
        <h1 className="text-center">Employee List</h1>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <td>Emp ID</td>
                    <td>Emp Name</td>
                    <td>Emp Position</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>      
     );
}}
 
export default EmpList;