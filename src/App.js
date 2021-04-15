import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <Switch>
          <Route path='/checkout'>
            <Checkout></Checkout>
          </Route>
          <Route path='/login'>
            <h1>2</h1>
          </Route>
          {/* default */}
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
