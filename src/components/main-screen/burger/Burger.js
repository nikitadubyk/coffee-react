import './Burger.scss';

const Burger = () => {
    return (
        <div className='burger'>
            <ul className='burger__menu'>
                <li className='burger__menu-item'>
                    <a href='/#' className='burger__menu-link'>
                        Coffee house
                    </a>
                </li>
                <li className='burger__menu-item'>
                    <a href='/#' className='burger__menu-link'>
                        Our coffee
                    </a>
                </li>
                <li className='burger__menu-item'>
                    <a href='/#' className='burger__menu-link'>
                        For your pleasure
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Burger;
