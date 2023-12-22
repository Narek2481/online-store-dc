import "../styles/login/Login.scss"
import {LoginForm} from "../components/login/LoginForm";



export const Login = () => {
    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <LoginForm/>

        </div>
    );
};
