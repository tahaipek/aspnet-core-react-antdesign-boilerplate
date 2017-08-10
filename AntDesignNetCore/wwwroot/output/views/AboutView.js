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
var AboutView = (function (_super) {
    __extends(AboutView, _super);
    function AboutView() {
        var _this = _super.call(this) || this;
        _this.state = { loaded: false };
        return _this;
    }
    AboutView.prototype.componentDidMount = function () {
        this.setState({ loaded: true });
    };
    AboutView.prototype.render = function () {
        var loading = this.state.loaded ? "" : " (loading...)";
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            React.createElement("h2", null,
                "About ",
                loading),
            React.createElement("p", null, "This project includes a working example of React, React Router, Ant Design Components and TypeScript."));
    };
    return AboutView;
}(React.Component));
exports["default"] = AboutView;
