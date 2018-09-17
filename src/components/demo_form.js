import React, {Component} from 'react';

class DemoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('form Submitted:', this.state);

    }

    handleChange(event){
        console.log('input value:', event.target.value);
        console.log('input name:', event.target.name);


        this.setState({
            [event.target.name]:event.target.value
        });

        // switch(event.target.name){
        //     case 'email':
        //         this.setState({email: event.target.value})
        //         break;
        //     case 'password':
        //         this.setState({password: event.target.value})
        //         break;
        //     case 'name':
        //         this.setState({name: event.target.value})
        //         break;
        // }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email</label>
                    <input type="text" value = {this.state.email} name ='email' onChange={this.handleChange} autoComplete='off'/>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={this.state.name} onChange = {this.handleChange} autoComplete='off'/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value = {this.state.password} name='password' onChange={this.handleChange} autoComplete='off'/>
                </div>
                <button>Submit Form</button>
            </form>
        )
    }

}


export default DemoForm;