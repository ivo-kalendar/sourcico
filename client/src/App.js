import Spinner from './components/layout/Spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
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
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                    </div>
                </div>
            </Router>
        </AuthorsState>
    );
}

export default App;
