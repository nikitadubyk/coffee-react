import { NavLink } from 'react-router-dom';
import './Burger.scss';

const Burger = () => {
    return (
        <div className='burger'>
            <ul className='burger__menu'>
                <li className='burger__menu-item'>
                    <NavLink
                        to='/'
                        activeStyle={{
                            textDecoration: 'underline',
                            background: 'transparent',
                        }}
                        exact
                        className='burger__menu-link'
                    >
                        Coffee house
                    </NavLink>
                </li>
                <li className='burger__menu-item'>
                    <NavLink
                        to='/our-coffee'
                        exact
                        activeStyle={{
                            textDecoration: 'underline',
                            background: 'transparent',
                        }}
                        className='burger__menu-link'
                    >
                        Our coffee
                    </NavLink>
                </li>
                <li className='burger__menu-item'>
                    <NavLink
                        to='/pleasure'
                        activeStyle={{
                            textDecoration: 'underline',
                            background: 'transparent',
                        }}
                        exact
                        className='burger__menu-link'
                    >
                        For your pleasure
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Burger;
