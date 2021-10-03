import Burger from '../burger/Burger';
import logo from '../../../resourse/icons/coffee-beans-middle.svg';
import './Main.scss';

const Main = () => {
    return (
        <main className='main'>
            <Burger />

            <div className='main__info'>
                <h1 className='main__title'>
                    Everything You Love About Coffee
                </h1>
                <div className='divider white'>
                    <img
                        src={logo}
                        alt='coffee-beans'
                        className='divider__img'
                    />
                </div>

                <h2 className='main__subtitle'>
                    We makes every day full of energy and taste
                    <br />
                    Want to try our beans?
                </h2>

                <button className='main__btn'>More</button>
            </div>
        </main>
    );
};

export default Main;
