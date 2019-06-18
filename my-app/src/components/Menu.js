import React,{Component} from 'react';

class Menu extends Component{
    constructor(){
        super();
        this.state={
            album:'',
            resp:''
        }
    }
    render(){
      const album= localStorage.getItem('album');
        return(
            <div className="App">
            <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                
              </a>
            </nav>
            <div className="container">
              <div className="row mt-4">
                {console.log(album.albums)}  
                {album.albums}

              </div>
            </div>
          </div>
          
        );
    }
}
export default Menu;