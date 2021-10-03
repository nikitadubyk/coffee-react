import './OurBest.scss';
import Item from '../../item/Item';

const OurBest = () => {
    return (
        <section class='our-best'>
            <div class='container'>
                <h2 class='our-best__title'>Our best</h2>
                <div class='our-best__wrapper'>
                    <div class='our-best__item'>
                        <img
                            src='../../../resourse/img/our-best/1.jpg'
                            alt='first coffee'
                            class='our-best__item-img'
                        />
                        <h3 class='our-best__item-title'>
                            Solimo Coffee Beans 2 kg
                        </h3>
                        <div class='our-best__item-price'>10.73$</div>
                    </div>
                    <div class='our-best__item'>
                        <img
                            src='../../../resourse/img/our-best/2.jpg'
                            alt='second coffee'
                            class='our-best__item-img'
                        />
                        <h3 class='our-best__item-title'>
                            Presto Coffee Beans 1 kg
                        </h3>
                        <div class='our-best__item-price'>15.99$</div>
                    </div>
                    <div class='our-best__item'>
                        <img
                            src='../../../resourse/img/our-best/3.jpg'
                            alt='third coffee'
                            class='our-best__item-img'
                        />
                        <h3 class='our-best__item-title'>
                            AROMISTICO Coffee 1 kg
                        </h3>
                        <div class='our-best__item-price'>6.99$</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBest;
