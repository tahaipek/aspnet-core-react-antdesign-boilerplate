import * as React from 'react';

import { Link } from 'react-router-dom';
import { Hello } from '../components/Hello';
import { InputGroupComponent } from '../components/InputGroupComponent';

import { Row, Col, DatePicker } from 'antd';

export interface HomeState {
    loaded: boolean;
}

export default class HomeView extends React.Component<{}, HomeState> {
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

            <Row>
                <Col span={12}>

                    <h1>Home {loading}</h1>
                    <Hello name=".net core react" />

                </Col>
                <Col span={12}>

                    <DatePicker />

                    <br /><br />
                    <Link to="/about">About</Link>
                    <Link to="/notfound">Page Not Found</Link>

                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <InputGroupComponent />
                </Col>
            </Row>

        </div>;
    }
} 
