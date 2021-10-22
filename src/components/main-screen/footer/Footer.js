import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <ul className='footer__menu'>
                    <li className='footer__menu-item'>
                        <Link to='/' className='footer__menu-link'>
                            Coffee house
                        </Link>
                    </li>
                    <li className='footer__menu-item'>
                        <Link to='/our-coffee' className='footer__menu-link'>
                            Our coffee
                        </Link>
                    </li>
                    <li className='footer__menu-item'>
                        <Link to='/pleasure' className='footer__menu-link'>
                            For your pleasure
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
