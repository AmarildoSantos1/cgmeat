// AppRouter.js
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';

import RegisProduct from './pages/RegisProduct';
import Regiscomplete from './pages/Regiscomplete';
import Register from './pages/Register';
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component = {Home} />
        <Route path="/registration-complete" exact component = {Regiscomplete} />
        <Route path="/product-registration" exact component = {RegisProduct} />

      </Switch>
    </Router>
  );
}

export default AppRouter;
