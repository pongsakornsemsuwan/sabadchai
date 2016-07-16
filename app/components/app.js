import React from 'react';

import MainHeader from './layouts/MainHeader';
import MainFooter from './layouts/MainFooter';

export default class App extends React.Component {


    render() {
        console.log(this.props.route.path);
        return (
            <div>
                <MainHeader/>
                {this.props.children}
                <MainFooter/>
            </div>
        );
    }
}
