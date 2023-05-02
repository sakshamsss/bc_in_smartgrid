import React, { Component } from "react";
import { Form, Card } from "react-bootstrap"
import firebase,{backOfficeCollection} from "../../utils/firebase"
import Footer from "../footer";
import Header from "../header";

class AddModerator extends Component{

    state = {
        register: true,
        user: {
            email:'',
            password:''
        }
    }
  
    handleForm = (e) => {
        e.preventDefault();
        const {email} = this.state.user;
        const {password} = this.state.user;
  
        if(this.state.register){
          firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then( user =>{this.handleStoreRegisterUser(user)    
          })
          .catch(e =>{
              console.log(e);
          });
          
        }
            
  
        
    }
  
    changeHandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState( prevState => ({
          user:{
              ...prevState.user,
              [name]: value
          }
      }))
      }
  
    
    handleStoreRegisterUser = (data) => {
        backOfficeCollection.doc(data.user.uid).set({
            email: data.user.email,
            status: "active",
        }).then( data =>{
            console.log(data)
        }).catch(e => {
            console.log(e);
        })
    }

    render(){
        return(
            <>
            <Header/>
            <Card>
              <Card.Body>
              <h2 className="text-center mb-4">ADD MODERATOR</h2>
                <Form onSubmit={ (e)=> this.handleForm(e) }>
                  <div className="form-group">
                      <label>Email</label>
                      <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={ (e) => this.changeHandler(e)}
                      >
                      </input>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={ (e) => this.changeHandler(e)}
                      >
                      </input>
                  </div>
                  <button type="submit" className="btn btn-primary">
                      ADD
                  </button>
              </Form>
              </Card.Body>
          </Card>

            <Footer/>
            </>
        )
    }
}

export default AddModerator;