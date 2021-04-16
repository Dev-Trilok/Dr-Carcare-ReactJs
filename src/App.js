
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './Component/Layout/ButtonAppBar';
import AboutUs from './Component/Routes/AboutUs';
import ContactUs from './Component/Routes/ContactUs';
import Home from './Component/Routes/Home';
import Services from './Component/Routes/Services';
import SignIn from './Component/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutUs" component={AboutUs}/>
        <Route exact path="/contactUs" component={ContactUs}/>
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/services" component={Services} />

      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
