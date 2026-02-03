import React from 'react';
import { User, Mail, Edit2, LogOut, ShieldCheck } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const FormProfile = () => {
    const navigate = useNavigate();

    // Mock data (sau này lấy từ API/Context)
    const user = {
        name: "Nguyễn Thanh An",
        email: "ngthanhans0712@gmail.com"
    };

    const handleLogout = () => {
        // Xử lý logout
        navigate("/login");
    };

    return (
        <div className="profile-page">

            <div className="profile-container">
                {/* Card Thông tin */}
                <div className="profile-card">

                    {/* Avatar */}
                    <div className="avatar-circle">
                        <User />
                    </div>

                    {/* Form */}
                    <div className="profile-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-with-icon">
                                <User />
                                <input
                                    type="text"
                                    defaultValue={user.name}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <div className="input-with-icon">
                                <Mail />
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Nút Edit nằm trong card như ảnh mẫu */}
                        <button className="btn-w100 btn-profile-edit">
                            <Edit2 size={18} />
                            <span>Edit Profile</span>
                        </button>
                    </div>
                </div>

                {/* Nút Logout nằm ngoài card */}
                <button
                    className="btn-w100 btn-profile-logout"
                    onClick={handleLogout}
                >
                    <LogOut size={18} />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default FormProfile;