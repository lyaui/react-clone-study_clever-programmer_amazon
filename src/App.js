import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <Switch>
          <Route path='/checkout'>
            <h1>1</h1>
          </Route>
          <Route path='/login'>
            <h1>2</h1>
          </Route>
          {/* default */}
          <Route path='/'>
            <h1>3</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
