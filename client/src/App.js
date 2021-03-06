import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FavoriteColor from "./pages/FavoriteColor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <ProtectedRoute
            path="/favorite-color"
            component={FavoriteColor}
            exact
          />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
