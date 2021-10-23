import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import dataCoffee from '../services/data';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Header from '../our-coffee/header/Header';
import Footer from '../main-screen/footer/Footer';
import logo from '../../resourse/icons/coffee-beans-middle-dark.svg';
import './coffee-info.scss';

const CoffeeSinglePage = () => {
    const { coffeeId } = useParams();
    const [data, setData] = useState(dataCoffee);
    const [coffee, setCoffee] = useState([]);

    const findCoffee = coffeeId => {
        const id = +coffeeId;
        const filteredCoffee = data.find(item => item.id === id);
        setCoffee(filteredCoffee);
    };

    useEffect(() => {
        findCoffee(coffeeId);
    }, [findCoffee]);

    return (
        <>
            <Header />
            <ErrorBoundary>
                <View data={coffee} />
            </ErrorBoundary>
            <Footer />
        </>
    );
};

const View = props => {
    const { title, subtitle, img, price } = props.data;
    return (
        <div className='about-beans'>
            <div className='container'>
                <div className='about-beans__wrapper coffee-info'>
                    <img
                        src='/img/coffee-pic.jpg'
                        alt={title}
                        className='about-beans__img'
                    />

                    <div className='about-beans__descr morewidth'>
                        <h2 className='about-beans__title'>About it</h2>
                        <div className='divider'>
                            <img
                                src={logo}
                                alt='coffee-beans'
                                className='divider__img'
                            />
                        </div>

                        <div className='about-beans__text'>
                            <h3 className='about-beans__name'>
                                <span className='text_bold'>Country:</span>{' '}
                                {subtitle}
                            </h3>
                            <br />
                            <span className='text_bold'>Description:</span>{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. <br />
                            <br />
                            <div className='about-beans__price'>
                                <span className='text_bold'>Price:</span>
                                <span className='big-price'> {price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeSinglePage;
