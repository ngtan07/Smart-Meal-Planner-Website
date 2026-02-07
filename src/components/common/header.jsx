import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { LogOut } from 'lucide-react';
import '../../styles/header.css'
import { Layout } from 'antd'

const { Header } = Layout

const HeaderApp = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // localStorage.removeItem('token'); // Ví dụ: Xóa token
        // localStorage.removeItem('user');  // Ví dụ: Xóa info user
        // // setIsLoggedIn(false); // Nếu bạn dùng Context/Redux thì cập nhật state ở đây

        // // BƯỚC 2: Điều hướng sau khi dọn dẹp xong
        // navigate('/login', { replace: true });
        navigate("/login");
    }
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            background: 'transparent',
            lineHeight: 'normal',
        }}>


            {/* logo */}
            <NavLink to="/home" className="header-logo">
                <img src='/images/logo-img.png' alt='logo' />
            </NavLink>

            {/* nav */}
            <ul className='nav-list'>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/recipe">Recipe</NavLink></li>
                <li><NavLink to="/ingredient">Ingredient</NavLink></li>
                <li><NavLink to="/plan">Meal Schedule</NavLink></li>
                <li><NavLink to="/shopping">Shopping</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>

            {/* logout */}
            <button className='logout-btn'
                onClick={handleLogout}>
                <LogOut />
                <span>Logout</span>
            </button>

        </Header >
    )
}

export default HeaderApp


