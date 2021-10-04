import React, { Component } from 'react';

import './resourse/sass/libs/bootstrap-reboot.min.css';
import './App.css';

// import MainScreen from './components/main-screen/Main-screen';
import Header from './components/our-coffee/header/Header';
import AboutBeans from './components/our-coffee/about-beans/AboutBeans';
import Filter from './components/our-coffee/filter/Filter';
import Price from './components/our-coffee/price/Price';
import Footer from './components/main-screen/footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
            ],
            term: '',
            filter: '',
        };
    }

    onChangeTerm = term => {
        this.setState({ term });
    };

    onChangeFilter = filter => {
        this.setState({ filter });
        console.log(filter);
    };

    onSearch = (data, term) => {
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.title.indexOf(term) > -1;
        });
    };

    onFilterChange = (data, filter) => {
        switch (filter) {
            case 'Brasil':
                return data.filter(item => item.subtitle === 'Brasil');
            case 'Kenya':
                return data.filter(item => item.subtitle === 'Kenya');
            case 'Columbia':
                return data.filter(item => item.subtitle === 'Columbia');
            default:
                return data;
        }
    };

    render() {
        const { data, term, filter } = this.state;
        const visible = this.onFilterChange(this.onSearch(data, term), filter);
        return (
            <>
                <Header />
                <AboutBeans logo='img/main_pic.jpg' />
                <Filter
                    onChangeTerm={this.onChangeTerm}
                    onChangeFilter={this.onChangeFilter}
                />
                <Price data={visible} />
                <Footer />
            </>
        );
    }
}

export default App;
