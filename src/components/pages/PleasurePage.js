import { useState } from 'react';
import dataCoffee from '../services/data';

import Header from '../our-coffee/header/Header';
import AboutBeans from '../our-coffee/about-beans/AboutBeans';
import Price from '../our-coffee/price/Price';
import Footer from '../main-screen/footer/Footer';

const PleasurePage = () => {
    const [data, setData] = useState(dataCoffee);

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
