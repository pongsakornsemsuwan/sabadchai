import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from '../components/app';
import News from '../components/news/news';
import User from '../components/user/user';
import Home from '../components/home/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

console.log('hi');

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="signup" component={SignUp}/>
        <Route path="login" component={Login}/>
        <Route path="news" component={News}/>
        <Route path="user" component={User}/>
    </Route>
);
