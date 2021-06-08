import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Navbar>
                <Switch>
                    <Route path='/' exact component={Movies} />
                </Switch>
            </Navbar>
        </Router>
    );
}

export default App;