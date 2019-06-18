import React,{Component} from 'react';
const {album}= localStorage.getItem('album');

class Menu extends Component{
    constructor(){
        super();
        this.state={album}
        console.log({album})
    }
    render(){
    var  a=localStorage.getItem('album');
        return(
            <div className="App">
            <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                
              </a>
            </nav>
            <div className="container">
              <div className="row mt-4">
                  <h1>
                  {console.log("aqiii")}
                {console.log(localStorage.getItem('album'))}  
                {localStorage.getItem('album')}
                {this.props.href}
                  </h1>
              

              </div>
            </div>
          </div>
          
        );
    }
}
export default Menu;