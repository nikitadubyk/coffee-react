import './OurBest.scss';
import Item from '../item-main/Item';
import logo1 from '../../../resourse/img/our-best/1.jpg';
import logo2 from '../../../resourse/img/our-best/2.jpg';
import logo3 from '../../../resourse/img/our-best/3.jpg';

const OurBest = () => {
    return (
        <section className='our-best'>
            <div className='container'>
                <h2 className='our-best__title'>Our best</h2>
                <div className='our-best__wrapper'>
                    <Item
                        img={logo1}
                        title='Solimo Coffee Beans 2 kg'
                        price='10.73$'
                    />
                    <Item
                        img={logo2}
                        title='Presto Coffee Beans 1 kg'
                        price='15.99$'
                    />
                    <Item
                        img={logo3}
                        title='AROMISTICO Coffee 1 kg'
                        price='6.99$'
                    />
                </div>
            </div>
        </section>
    );
};

export default OurBest;
