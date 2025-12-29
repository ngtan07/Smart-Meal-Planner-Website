import '../../styles/footer.css'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <p>© {new Date().getFullYear()} Cookify - All rights reserved - Developed by Nguyen Thanh An - Recipe data provided by TheMealDB API.</p>
            </footer>
        </>
    )
}

export default Footer;