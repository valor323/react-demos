import React, {Component} from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);


        this.state = {
            email:'',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log('handle form sumbit', this.state)

        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange(event){

        console.log('name', event.target.name)
        console.log('value', event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        
}

    render(){
        const {email, password} = this.state

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
            <label>Email</label>
            <input type="text" name = 'email' value = {email} onChange={this.handleChange} autoComplete = 'off'/>
        </div>
        <div>
            <label>Passsword</label>
            <input type="text" name = 'password' value = {password} onChange={this.handleChange} autoComplete='off'/>
        </div>
        <button>Submit Form</button>
        </form>
        )
    }
}

export default SignIn