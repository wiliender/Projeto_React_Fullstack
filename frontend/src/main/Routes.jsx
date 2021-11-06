import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Switch> //escolha qual rota vai ser renderizada
        <Route exact path="/" component={Home} /> //exatamente a rota /
        <Route path="/users" component={UserCrud} />//rota /users
        <Redirect from="*" to="/" /> //rota padrão
    </Switch>