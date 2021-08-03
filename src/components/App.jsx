import React from "react"
import Home from "./Home"
import TodoApp from "./Keeper/TodoApp"
import Forgot from "./Forgot"
import About from "./About"
import Contact from "./Contact"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
function App(){
    return (
        <Router>
        <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/" component={TodoApp}></PrivateRoute>
                <Route exact path="/login" component={Home}></Route>
                <Route exact path="/forgotpassword" component={Forgot}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/login" component={Home}></Route>
            </Switch>
            </AuthProvider>
        </Router>
        
    )
}

export default App;