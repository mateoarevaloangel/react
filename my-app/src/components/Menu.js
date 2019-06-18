import React,{Component} from 'react';

class Menu extends Component{
    constructor(){
        super();
    }
    render(){
      const todos= localStorage.getItem('album');
        return(
            <div className="App">
            <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                
              </a>
            </nav>
            <div className="container">
              <div className="row mt-4">
                
              </div>
            </div>
          </div>
          
        );
    }
}
export default Menu;