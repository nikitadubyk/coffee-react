import './AboutBeans.scss';
import logo from '../../../resourse/icons/coffee-beans-middle-dark.svg';

const AboutBeans = props => {
    return (
        <section className='about-beans'>
            <div className='container'>
                <div className='about-beans__wrapper'>
                    <img
                        src={props.logo}
                        alt='cup of coffee'
                        className='about-beans__img'
                    />

                    <div className='about-beans__descr'>
                        <h2 className='about-beans__title'>About our beans</h2>
                        <div className='divider'>
                            <img
                                src={logo}
                                alt='coffee-beans'
                                className='divider__img'
                            />
                        </div>

                        <div className='about-beans__text'>
                            Extremity sweetness difficult behaviour he of. On
                            disposal of as landlord horrible.
                            <br />
                            <br />
                            Afraid at highly months do things on at. Situation
                            recommend objection do intention so questions. As
                            greatly removed calling pleased improve an. Last ask
                            him cold feel met spot shy want. Children me
                            laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div className='little-divider'></div>
            </div>
        </section>
    );
};

export default AboutBeans;
