import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Slideshow from "../pages/Slideshow/Slideshow";

function Body() {
    return (
      <BrowserRouter>
        <Home/>
        <Switch>
            <Route exact path="/" component ={Slideshow}/>
        </Switch>
        </BrowserRouter>
    );
  }

export default Body