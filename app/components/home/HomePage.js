import React from 'react';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div className="jumbotron">
                <h1>Timekit POC App</h1>
                <p>timekit.io implementation using Node and ReactJS.</p>
            </div>
        );
    }
}

export default HomePage;
