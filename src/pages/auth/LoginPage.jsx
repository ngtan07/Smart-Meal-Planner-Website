import LoginCreateAccount from "../../components/auth/login/login.createAccount";
import LoginForm from "../../components/auth/login/login.form";
import LoginHeader from "../../components/auth/login/login.header";
import LoginSocial from "../../components/auth/login/login.social";
import '../../styles/login.css';

const LoginPage = () => {
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-card">
                        <div className="card-accent"></div>

                        <LoginHeader />
                        <LoginForm />
                        <LoginSocial />
                        <LoginCreateAccount />

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage