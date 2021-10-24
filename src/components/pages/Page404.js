import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontSize: '26px', margin: 20 }}>
                Ошибка 404
            </h2>

            <Link
                exact
                to='/'
                style={{
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'black',
                }}
            >
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default Page404;
