import * as React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundView extends React.Component<any, any> {
    render() {
        return <div>
            <div><Link to="/">Home</Link></div>
            <h2>404</h2>
            <h3>Page not found</h3>
        </div>;
    }
}