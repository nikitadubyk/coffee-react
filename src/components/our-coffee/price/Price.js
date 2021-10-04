import Cards from '../cards/Cards';
import './Price.scss';

const Price = ({ data }) => {
    return (
        <section className='price__wrapper'>
            {data.map(card => (
                <Cards
                    img={card.img}
                    title={card.title}
                    subtitle={card.subtitle}
                    price={card.price}
                    key={card.id}
                />
            ))}
        </section>
    );
};

export default Price;
