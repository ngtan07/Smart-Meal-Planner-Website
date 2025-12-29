import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
    const [show, setShow] = useState(false);


    return (
        <>
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

                    {/* Show password */}
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

                {/* Actions - remember me check box - forgot password */}
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
        </>
    )
}

export default LoginForm;