import React,{Component} from 'react';
import axios from 'axios';


//import {todos} from "./todos.json"

class Form extends Component{
constructor(){
    super();
    this.state={
        first_name:'',
        email:'',
        password :'',
        last_name:'',
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
console.log(e.target.email.value)
axios
      .post('http://localhost:3200/log',{
        email:e.target.email.value,
        password :e.target.password.value
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
            localStorage.setItem('token', response.data.token);
            window.location.href = "/n";
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
            <div className="row">
			<div className="col-md-6 col-md-offset-3">
				<div className="panel panel-login">
					<div className="panel-heading"></div>
            <div className="row">
							<div className="col-xs-6">
								<a href="/" className="active" id="login-form-link">Iniciar sesión</a>
							</div>
							<div className="col-xs-6">
								<a href="/register" id="register-form-link">Regístrate ahora</a>
							</div>
						</div>
                        </div>
                        </div>
                        </div>

            {mensaje}
            <div className="card">
            <div className="card-header">
                log
            </div>
            
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="nombre"
                    onChange={this.handleInput}
                    >
                    </input>

                </div>
                <div className="form-group">
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    onChange={this.handleInput}
                    >
                    </input>
                    </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        log
                    </button>
                </div>
            </form>
        </div>
        </div>
        
    )
}
}
export default Form;