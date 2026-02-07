
import { Layout } from 'antd'

const { Footer } = Layout

const FooterApp = () => {
    return (
        <Footer style={{
            textAlign: 'center',
            padding: '2px 0',
            color: '#4a5568',
            fontSize: '12px',
            fontStyle: 'italic',
            backgroundColor: 'rgb(209, 219, 235, 0.6)',
            lineHeight: '1.6'
        }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Cookify - All rights reserved - Developed by Nguyen Thanh An - Recipe data provided by TheMealDB API.</p>
        </Footer>

    )
}

export default FooterApp;