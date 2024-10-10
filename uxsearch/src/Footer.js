import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => {
    return (
        <footer className="bg-primary text-center text-lg-start"> 
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright: 
                <a className="text-white" href="/"> UXSearch </a>
            </div>
        </footer>
    ); 
}

export default Footer; 
