// Adding necessary file 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNoFound/PageNotFound';
import Footer from './components/Footer/Footer';
import ServiceDetail from './components/ServiceDetails/ServiceDetail';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// App component and all Route
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>


            <PrivateRoute path='/service/:seviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>

            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>

            <Route exact path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
