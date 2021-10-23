import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './resourse/sass/libs/bootstrap-reboot.min.css';
import './App.css';
import {
    MainPage,
    OurCoffeePage,
    PleasurePage,
    CoffeeSinglePage,
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
            </Switch>
        </Router>
    );
};

export default App;
