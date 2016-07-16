import React from 'react';

export default class HomeLanding extends React.Component {

    static get NAME() {
        return 'HomeLanding';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[HomeLanding.NAME] || {};
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="text-center">Sabadchai</h1>
                    <p className="text-center">
                        Join the biggest Startup community of Thailand <br/>
                    Sabadchai connects startups and investors to help your dream comes true
                </p>
                <div className="text-center">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
                </div>
            </div>
        </div>
    )
}
}
