import { Link } from 'react-router-dom';
import '../cards/Cards.scss';
import './Price.scss';

const Price = ({ data }) => {
    return (
        <section className='price__wrapper'>
            {data.map(card => (
                <Link
                    to={`/coffee/${card.id}`}
                    className='price__item'
                    key={card.id}
                    style={{ textDecoration: 'none' }}
                >
                    <img
                        src={card.img}
                        alt='img coffee'
                        className='price__item-img'
                    />
                    <h3 className='price__item-title'>{card.title}</h3>
                    <div className='price__item-subtitle'>{card.subtitle}</div>
                    <div className='price__item-price'>{card.price}</div>
                </Link>
            ))}
        </section>
    );
};

export default Price;
