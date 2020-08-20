import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import userApiClient from "../../api/userApiClient";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            title: 'Login',
            submitText: 'Login'
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

        userApiClient.login(user).then(() => {
            // window.location = '/';
            this.setState({
                email: '',
                password: ''
            });
        });

    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='text'
                               required
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password'
                               required
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangePassword}>
                        </input>
                    </div>
                    <div className="form-group">
                        <Button type="submit" className="btn btn-primary">{this.state.submitText}</Button>
                    </div>
                </form>
            </div>
        );
    }
}