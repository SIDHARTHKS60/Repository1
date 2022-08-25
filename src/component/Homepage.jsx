import React from 'react'
import EmpReg from './EmpReg'
import EmpList from './EmpList'
import {BrowserRouter,Route,Routes} from "react-router-dom"

const Homepage=()=> {
    
    return (
        <div>
             <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<EmpReg/>}/>
                    <Route exact path="/list" element={<EmpList/>}/>
                </Routes>
             </BrowserRouter>

        </div>
        );
};

export default Homepage