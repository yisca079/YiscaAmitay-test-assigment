import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import Post from './components/post'

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Switch>


          <Route path='/Post'>
           
            <Post></Post>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
