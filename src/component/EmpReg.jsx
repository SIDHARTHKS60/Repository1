import React,{ useState,Component} from 'react'
import Axios from 	

class EmpReg extends Component {
    
    state={id:'',name:'',position:''};

    handleIdChange = event => {this.setState({id: event.target.value})}

	handleNameChange = event => {this.setState({name: event.target.value})}

	handlePosChange = event => {this.setState({position: event.target.value})	}

	handleSubmit = event => {
		event.preventDefault()
		if(this.state.name==="" || this.state.id==="" ||this.state.position==="" ){
            alert("All values must be given");
			return
		}
		Axios.post(url,{id:data.id, name:data.name, position: data.position})
	}

    render() { 
		const {id,name,position} = this.state
	
        return (
			<form onSubmit={this.handleSubmit}>
				<br/>
                <div>
					<label>Employee ID </label>
					<input type="text" value={id} onChange={this.handleIdChange}/>
				</div>
                <br/>
				<div>
					<label>Employee Name </label>
					<input type="text" value={name} onChange={this.handleNameChange}/>
				</div>
                <br/>
				<div>
					<label>Position  </label>
					<input type="text" value={position} onChange={this.handlePosChange}/>
				</div>
                <br/>
				<button type="submit">Submit</button>
			</form>
        );
    };
};
 
export default EmpReg;