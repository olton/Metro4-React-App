import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'metro4-react/src'

class App extends Component {
    render() {
        return (
            <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <h1>Hello World!</h1>
                <p className="text-leader">
                    Welcome to Metro 4 for React App template!
                </p>
            </Grid>
        )
    }
}

ReactDOM.render( <App />, document.querySelector( '#root' ) );