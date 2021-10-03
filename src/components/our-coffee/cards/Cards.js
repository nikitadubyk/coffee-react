import './Cards.scss';

const Cards = props => {
    return (
        <div className='price__item'>
            <img src={props.img} alt='img coffee' className='price__item-img' />
            <h3 className='price__item-title'>{props.title}</h3>
            <div className='price__item-subtitle'>{props.subtitle}</div>
            <div className='price__item-price'>{props.price}</div>
        </div>
    );
};

export default Cards;
