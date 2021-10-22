import { useState } from 'react';

import Header from '../our-coffee/header/Header';
import AboutBeans from '../our-coffee/about-beans/AboutBeans';
import Filter from '../our-coffee/filter/Filter';
import Price from '../our-coffee/price/Price';
import Footer from '../main-screen/footer/Footer';

const OurCoffeePage = () => {
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
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');

    const onChangeTerm = term => {
        setTerm(term);
    };

    const onChangeFilter = filter => {
        setFilter(filter);
    };

    const onSearch = (data, term) => {
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.title.indexOf(term) > -1;
        });
    };

    const onFilterChange = (data, filter) => {
        switch (filter) {
            case 'Brazil':
                return data.filter(item => item.subtitle === 'Brazil');
            case 'Kenya':
                return data.filter(item => item.subtitle === 'Kenya');
            case 'Columbia':
                return data.filter(item => item.subtitle === 'Columbia');
            default:
                return data;
        }
    };

    const visible = onFilterChange(onSearch(data, term), filter);

    return (
        <>
            <Header title='Our Coffee' />
            <AboutBeans logo='img/main_pic.jpg' />
            <Filter
                onChangeTerm={onChangeTerm}
                onChangeFilter={onChangeFilter}
                filter={filter}
            />
            <Price data={visible} />
            <Footer />
        </>
    );
};

export default OurCoffeePage;
