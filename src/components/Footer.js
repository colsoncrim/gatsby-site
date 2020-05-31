import React from 'react'

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
                        <i className="fab fa-facebook-f fa-2x"/>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://twitter.com" 
                        className="twitter" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter fa-2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://instagram.com" 
                        className="instagram" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram fa-2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://google.com" 
                        className="google" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-google fa-2x" />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://linkedin.com" 
                        className="linkedin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer 