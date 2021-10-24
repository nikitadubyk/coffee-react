import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './resourse/sass/libs/bootstrap-reboot.min.css';
import './App.css';
import {
    MainPage,
    OurCoffeePage,
    PleasurePage,
    CoffeeSinglePage,
    Page404,
} from './components/pages';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
                <Route exact path='/our-coffee'>
                    <OurCoffeePage />
                </Route>
                <Route exact path='/pleasure'>
                    <PleasurePage />
                </Route>
                <Route exact path='/coffee/:coffeeId'>
                    <CoffeeSinglePage />
                </Route>
                <Route exact path='*'>
                    <Page404 />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
