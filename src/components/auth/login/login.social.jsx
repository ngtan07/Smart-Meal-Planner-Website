const LoginSocial = () => {
    return (
        <>
            {/* with other */}
            <div className="auth-divider">
                <span>or continue with</span>
            </div>

            {/* social */}
            <div className="social-auth">
                <button className="social-button">
                    <img
                        src="../../../images/mail-icon.png"
                        alt="Email login"
                    />
                    Email
                </button>
                <button className="social-button">
                    <img
                        src="../../../images/facebook-icon.png"
                        alt="Facebook login"
                    />
                    Facebook
                </button>
            </div>
        </>
    )
}

export default LoginSocial;