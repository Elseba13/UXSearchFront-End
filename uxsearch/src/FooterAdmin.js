import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const FooterAdmin = () => {
    return (
        <footer className="text-center text-lg-start" style={{backgroundColor: '#006400'}}> 
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright: 
                <a className="text-white" href="/"> UXSearch </a>
            </div>
        </footer>
    ); 
}

export default FooterAdmin; 