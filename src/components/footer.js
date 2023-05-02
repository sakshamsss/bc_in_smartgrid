import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="fixed-bottom bg-dark align-center justify-center">   
            <p style={{color:"white"}}>Block Chain in Smart Grid <Link to="#"></Link>- Saksham, Ayush and Harshit      <Link to="#"></Link></p>
        </footer>
    );
};

export default Footer;