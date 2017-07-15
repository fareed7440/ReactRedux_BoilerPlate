import React from 'react'
import './signup.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: ''
        }
        this.handleForm = this.handleForm.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }
    handleForm = (event) => {
        event.preventDefault();
        let name = this.refs.name.value.trim()
        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()
        let signupObj = {
            name: name,
            email: email,
            password: password
        }
        console.log('Signup Object', signupObj);
        this.props.SignUpReq(signupObj);
    }
    handleInput = (event) => {
        const target =event.target;
        const value =target.type ==='checkbox' ? target.checked : target.value;
        const name =target.name;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>
                <h1>SIGNUP PAGE</h1>
                <form 
                className ="forms"
                onSubmit={this.handleForm}>
                    <input
                        name='name'
                        ref='name'
                        type='text'
                        placeholder="Enter Your Name"
                        onChange={this.handleInput}
                    /><br /><br /><br />
                    <input
                        name='email'
                        ref='email'
                        type='email'
                        placeholder="Enter Valid Email"
                    /><br /><br /><br />
                    <input
                        name='password'
                        ref='password'
                        type='password'
                        placeholder="Enter Password"
                    /><br /><br /><br />

                    <button
                        type='submit'
                    >SignUp</button>
                </form>
            </div>
        )
    }


}


export default SignUp;