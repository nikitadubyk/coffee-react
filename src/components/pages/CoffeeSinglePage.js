import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Header from '../our-coffee/header/Header';
import Footer from '../main-screen/footer/Footer';
import logo from '../../resourse/icons/coffee-beans-middle-dark.svg';
import './coffee-info.scss';

const CoffeeSinglePage = () => {
    const { coffeeId } = useParams();
    const [data, setData] = useState([
        {
            img: 'img/coffee-main.jpg',
            title: 'Aromistico Coffee 1 kg',
            subtitle: 'Brazil',
            price: '6.99$',
            id: 1,
        },
        {
            img: 'img/coffee-main.jpg',
            title: 'Aromistico Coffee 1 kg',
            subtitle: 'Kenya',
            price: '6.99$',
            id: 2,
        },
        {
            img: 'img/coffee-main.jpg',
            title: 'Aromistico Coffee 1 kg',
            subtitle: 'Columbia',
            price: '6.99$',
            id: 3,
        },
        {
            img: 'img/coffee-main.jpg',
            title: 'Vova Coffee 1 kg',
            subtitle: 'Kenya',
            price: '6.99$',
            id: 4,
        },
        {
            img: 'img/coffee-main.jpg',
            title: 'Oksana Coffee 1 kg',
            subtitle: 'Columbia',
            price: '6.99$',
            id: 5,
        },
        {
            img: 'img/coffee-main.jpg',
            title: 'Nikita Coffee 1 kg',
            subtitle: 'Brazil',
            price: '6.99$',
            id: 6,
        },
    ]);
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        findCoffee(coffeeId);
    }, [coffeeId]);

    const findCoffee = id => {
        const number = +id;
        const filterCoffee = data.filter(item => item.id === number);
        console.log(filterCoffee);
        setCoffee(data.filter(item => item.id === number));
        console.log(coffee);
    };

    return (
        <>
            <Header />
            <View data={coffee} />
            <Footer />
        </>
    );
};

const View = props => {
    const { img, title, subtitle, price } = props.data;
    return (
        <section className='about-beans'>
            <div className='container'>
                <div className='about-beans__wrapper coffee-info'>
                    <img
                        src={'../../resourse' + img}
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
                                <span className='big-price'>{price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoffeeSinglePage;
