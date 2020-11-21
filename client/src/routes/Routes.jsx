import React from 'react'
import { Route, Switch } from "react-router"
import Home from "../components/Home"
import Login from "../components/Login"
import Classes from "../components/Classes"

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/login" render={(props) => <Login {...props}></Login>}></Route>
                <Route path="/home" exact render={(props) => <Home {...props}></Home>} ></Route>
                <Route path="/classes/:id" render={(props) => <Classes {...props}></Classes>} ></Route>
                <Route render={() => <h1>Page not found</h1>}></Route>
            </Switch>
        </div >
    )
}
