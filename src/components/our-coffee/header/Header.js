import './Header.scss';
import Burger from '../../main-screen/burger/Burger';

const Header = () => {
    return (
        <header className='header'>
            <Burger />
            <h2 className='header__title'>Our Coffee</h2>
        </header>
    );
};

export default Header;
