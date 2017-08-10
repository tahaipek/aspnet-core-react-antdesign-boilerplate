import * as React from 'react';
import { Link } from 'react-router-dom';

interface AboutState {
    loaded: boolean;
}

export default class AboutView extends React.Component<{}, AboutState> {
    constructor() {
        super();
        this.state = { loaded: false };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    render() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <div><Link to="/">Home</Link></div>
            <h2>About {loading}</h2>
            <p>
                This project includes a working example of React, React Router, Ant Design Components and TypeScript.
            </p>
        </div>;
    }
} 