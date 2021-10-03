import './Item.scss';

const Item = props => {
    return (
        <div className='our-best__item'>
            <img
                src={props.img}
                alt='first coffee'
                className='our-best__item-img'
            />
            <h3 className='our-best__item-title'>{props.title}</h3>
            <div className='our-best__item-price'>{props.price}</div>
        </div>
    );
};

export default Item;
