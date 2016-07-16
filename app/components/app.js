import React from 'react';

import MainHeader from './layouts/MainHeader';
import MainFooter from './layouts/MainFooter';

export default class App extends React.Component {


    render() {
        console.log('APP');
        return (
            <div>
                <MainHeader activeNav={this.props.routes[this.props.routes.length-1].path}/>
                {this.props.children}
                <MainFooter/>
            </div>
        );
    }
}
