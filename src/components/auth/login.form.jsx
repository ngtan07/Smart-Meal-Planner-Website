import React, { useState } from 'react';
import '../../styles/login.css'
import { FiEye, FiEyeOff } from "react-icons/fi";



const LoginForm = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <div className="card-accent"></div>

                    {/* Header */}
                    <div className="login-header">
                        <img
                            src="../../../public/images/logo-img.png"
                            alt="Logo"
                            className="logo"
                        />
                        <h1>Sign in</h1>
                    </div>

                    {/* Form */}
                    <form className="login-form" noValidate>

                        {/* Email */}
                        <div className="form-field">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                            />
                            <label htmlFor="email">Email</label>
                            <div className="field-line"></div>
                        </div>

                        {/* Password */}
                        <div className="form-field">
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder=" "
                                className="custom-password"
                            />
                            <label htmlFor="password">Password</label>

                            <button
                                type="button"
                                className={`password-reveal ${show ? "reveal-active" : ""} `}
                                aria-label="Toggle password"
                                onClick={() => setShow(!show)}
                            >
                                <FiEye className="eye-hide" size={18} />
                                <FiEyeOff className="eye-show" size={18} />
                            </button>

                            <div className="field-line"></div>
                        </div>

                        {/* Actions */}
                        <div className="form-actions">
                            <label className="remember-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-custom"></span>
                                <span className="checkbox-label">Remember me</span>
                            </label>

                            <a href="#" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="signin-button">
                            Sign In
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>or continue with</span>
                    </div>

                    {/* Social */}
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

                    <div className="signup-prompt">
                        <span>Don't have account ? </span>
                        <a href="#" className="signup-link">
                            Sign up now
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm;