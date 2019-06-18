import React,{Component} from 'react';
import axios from 'axios';


//import {todos} from "./todos.json"

class Form extends Component{
constructor(){
    super();
    this.state={
        album:'',
        resp:''
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleInput(e){
    const {value, name}=e.target;
    this.setState({
        [name]:value
    })
    //console.log(this.state)
}
handleSubmit(e){
//alert(e);
e.preventDefault();
console.log(e.target.album.value)
axios
      .post('http://localhost:3200/busqueda',{
        album:e.target.album.value,
      })
      .then(response => {
        this.state.resp=response.data.error
        console.log(response.data.error)
        if(response.data.error){
          alert(response.data.error)
        this.setState({
            resp:response.data.error
        })
        console.log('aquii')
        }else{
            localStorage.setItem('album',
            response.data
            //JSON.parse(response.data)
             );
            window.location.href = "/menu";
        } 
          }
      ).catch(err=>{
          alert(err)
      })
}
render(){
    var mensaje;
    if(this.state.resp==''){
        
    }else{
        mensaje=<div className="alert alert-primary" role="alert">
        {this.state.resp}
    </div>
    }
    
    
    return(
        <div className="container">
            

            {mensaje}
            <div className="card">
            <div className="card-header">
                buscar
            </div>
            
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    name="album"
                    className="form-control"
                    placeholder="nombre"
                    onChange={this.handleInput}
                    >
                    </input>

                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary">
                        buscar
                    </button>
                </div>
            </form>
        </div>
        </div>
        
    )
}
}
export default Form;