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
var NotFoundView = (function (_super) {
    __extends(NotFoundView, _super);
    function NotFoundView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFoundView.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            React.createElement("h2", null, "404"),
            React.createElement("h3", null, "Page not found"));
    };
    return NotFoundView;
}(React.Component));
exports["default"] = NotFoundView;
