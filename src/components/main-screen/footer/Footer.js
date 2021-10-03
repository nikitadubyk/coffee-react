import './Footer.scss';
import logo from '../../../resourse/icons/coffee-beans-dark.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <ul className='footer__menu'>
                    <li className='footer__menu-item'>
                        <a href='/index.html' className='footer__menu-link'>
                            Coffee house
                        </a>
                    </li>
                    <li className='footer__menu-item'>
                        <a
                            href='/our-coffee.html'
                            className='footer__menu-link'
                        >
                            Our coffee
                        </a>
                    </li>
                    <li className='footer__menu-item'>
                        <a href='/pleasure.html' className='footer__menu-link'>
                            For your pleasure
                        </a>
                    </li>
                </ul>

                <div className='divider'>
                    <img
                        src={logo}
                        alt='coffee-beans'
                        className='divider__img'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
