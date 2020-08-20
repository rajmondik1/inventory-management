import React, {Component} from "react";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.setState({
            email: '',
            password: ''
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/login', user)
            .then(res => {
                console.log(res.data)
                window.location = '/';
                this.setState({
                    email: '',
                    password: ''
                });
            });

    }

    render() {
        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email: </label>
                        <input type='text'
                               required
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type='password'
                               required
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangePassword}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create user" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}