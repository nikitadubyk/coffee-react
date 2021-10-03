import Header from './header/Header';
import AboutBeans from './about-beans/AboutBeans';
import Filter from './filter/Filter';
import Price from './price/Price';
import Footer from '../main-screen/footer/Footer';

const OurCoffeescreen = () => {
    return (
        <>
            <Header />
            <AboutBeans logo='img/main_pic.jpg' />
            <Filter />
            <Price />
            <Footer />
        </>
    );
};

export default OurCoffeescreen;
