import React from 'react';
import "./Footer.css"

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p>Copyright &copy; {year} Fahad</p>
        </div>
    );
};

export default Footer;