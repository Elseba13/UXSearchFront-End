import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const FooterAdmin = () => {
    return (
        <footer className="text-center text-lg-start" style={{backgroundColor: '#006400'}}>
            <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <a className="text-white" href="/">UXMethodsSearcher</a>
                <span className="text-white">© 2024 Copyright</span>
            </div>
        </footer>
    ); 
}

export default FooterAdmin;
