import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => {
    return (
        <footer className="bg-primary text-center text-lg-start">
            <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <a className="text-white" href="/">UXSearch</a>
                <span className="text-white">© 2024 Copyright</span>
            </div>
        </footer>
    ); 
}

export default Footer;
