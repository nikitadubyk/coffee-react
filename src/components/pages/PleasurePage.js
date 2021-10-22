import { useState } from 'react';

import Header from '../our-coffee/header/Header';
import AboutBeans from '../our-coffee/about-beans/AboutBeans';
import Price from '../our-coffee/price/Price';
import Footer from '../main-screen/footer/Footer';

const PleasurePage = () => {
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

    return (
        <>
            <Header pleasure='true' title='For your pleasure' />
            <AboutBeans logo='img/pleasure-pic.jpg' />
            <Price data={data} />
            <Footer />
        </>
    );
};

export default PleasurePage;
