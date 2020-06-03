import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Coding Blog
        </h4>
        <p className="text-center">Follow us on social media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a 
                        href="https://facebook.com" 
                        className="facebook" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://twitter.com" 
                        className="twitter" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://instagram.com" 
                        className="instagram" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://google.com" 
                        className="google" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGoogle />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://linkedin.com" 
                        className="linkedin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer 