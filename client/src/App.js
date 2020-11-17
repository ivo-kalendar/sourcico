import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Series from './components/pages/Series';
import About from './components/pages/About';

import AuthorsState from './components/context/AuthorsState';
import './App.css';

function App() {
    return (
        <AuthorsState>
            <Router>
                <div>
                    <Navbar />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/books' component={Books} />
                            <Route exact path='/series' component={Series} />
                            <Route exact path='/about' component={About} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </AuthorsState>
    );
}

export default App;
