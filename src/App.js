import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  GlobalStyle from './globalStyles';
import { Navbar } from './components';
import Home from './pages/HomePage/Home'

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/manage-landing-page" exact component={Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
