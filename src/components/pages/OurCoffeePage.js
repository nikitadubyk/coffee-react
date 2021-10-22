import { useState } from 'react';
import dataCoffee from '../services/data';

import Header from '../our-coffee/header/Header';
import AboutBeans from '../our-coffee/about-beans/AboutBeans';
import Filter from '../our-coffee/filter/Filter';
import Price from '../our-coffee/price/Price';
import Footer from '../main-screen/footer/Footer';

const OurCoffeePage = () => {
    const [data, setData] = useState(dataCoffee);
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
