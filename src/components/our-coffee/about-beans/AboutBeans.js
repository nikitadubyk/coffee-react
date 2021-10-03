import './AboutBeans.scss';
import logo from '../../../resourse/icons/coffee-beans-middle-dark.svg';

const AboutBeans = props => {
    return (
        <section class='about-beans'>
            <div class='container'>
                <div class='about-beans__wrapper'>
                    <img
                        src={props.logo}
                        alt='cup of coffee'
                        class='about-beans__img'
                    />

                    <div class='about-beans__descr'>
                        <h2 class='about-beans__title'>About Us</h2>
                        <div class='divider'>
                            <img
                                src={logo}
                                alt='coffee-beans'
                                class='divider__img'
                            />
                        </div>

                        <div class='about-beans__text'>
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

                <div class='little-divider'></div>
            </div>
        </section>
    );
};

export default AboutBeans;
