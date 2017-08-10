"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Hello_1 = require("../components/Hello");
var InputGroupComponent_1 = require("../components/InputGroupComponent");
var antd_1 = require("antd");
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView() {
        var _this = _super.call(this) || this;
        _this.state = { loaded: false };
        return _this;
    }
    HomeView.prototype.componentDidMount = function () {
        this.setState({ loaded: true });
    };
    HomeView.prototype.render = function () {
        var loading = this.state.loaded ? "" : " (loading...)";
        return React.createElement("div", null,
            React.createElement(antd_1.Row, null,
                React.createElement(antd_1.Col, { span: 12 },
                    React.createElement("h1", null,
                        "Home ",
                        loading),
                    React.createElement(Hello_1.Hello, { name: ".net core react" })),
                React.createElement(antd_1.Col, { span: 12 },
                    React.createElement(antd_1.DatePicker, null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(react_router_dom_1.Link, { to: "/about" }, "About"),
                    React.createElement(react_router_dom_1.Link, { to: "/notfound" }, "Page Not Found"))),
            React.createElement(antd_1.Row, null,
                React.createElement(antd_1.Col, { span: 12 },
                    React.createElement(InputGroupComponent_1.InputGroupComponent, null))));
    };
    return HomeView;
}(React.Component));
exports["default"] = HomeView;
