import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNoFound/PageNotFound';
import Footer from './components/Footer/Footer';
import ServiceDetail from './components/ServiceDetails/ServiceDetail';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/service/:seviceId'>
            <ServiceDetail></ServiceDetail>
          </Route>

          <Route exact path='*'>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
