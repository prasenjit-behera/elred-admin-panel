import React from 'react';
import About from './About';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';
import "./App.css";
 
function App(){
 
        return (
            <div>
              <TopNavbar/>
                <div className="container-fluid" id="main">
                 <div className="row p-2 mt-3">
                   <Sidebar/>
                  <About/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App