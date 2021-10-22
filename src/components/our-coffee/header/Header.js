import './Header.scss';
import Burger from '../../main-screen/burger/Burger';

const Header = props => {
    return (
        <header
            className={`header ${
                props.pleasure === 'true' ? 'pleasure' : null
            }`}
        >
            <Burger />
            <h2 className='header__title'>{props.title}</h2>
        </header>
    );
};

export default Header;
