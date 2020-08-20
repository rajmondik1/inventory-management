import Login from "./login.component";
import userApiClient from "../../api/userApiClient";

export default class Register extends Login {
    componentDidMount() {
        super.componentDidMount();
        this.setState({
            title: 'Register',
            submitText: 'Register'
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        userApiClient.register(user).then(() => {
           // window.location = '/';
           this.setState({
               email: '',
               password: ''
           });
       });

    }
}