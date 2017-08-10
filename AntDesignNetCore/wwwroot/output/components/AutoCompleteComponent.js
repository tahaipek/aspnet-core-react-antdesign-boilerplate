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
var antd_1 = require("antd");
var Option = antd_1.AutoComplete.Option;
var AutoCompleteComponent = (function (_super) {
    __extends(AutoCompleteComponent, _super);
    function AutoCompleteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.datas = [''];
        _this.state = {
            result: _this.datas
        };
        _this.handleSearch = function (value) {
            var result;
            if (!value || value.indexOf('@') >= 0) {
                result = [];
            }
            else {
                result = ['gmail.com', '163.com', 'qq.com'].map(function (domain) { return value + "@" + domain; });
            }
            _this.setState({ result: result });
        };
        return _this;
    }
    AutoCompleteComponent.prototype.render = function () {
        var result = this.state.result;
        var children = result.map(function (email) {
            return React.createElement(Option, { key: email }, email);
        });
        return (React.createElement(antd_1.AutoComplete, { style: { width: 200 }, onSearch: this.handleSearch, placeholder: "input here" }, children));
    };
    return AutoCompleteComponent;
}(React.Component));
exports.AutoCompleteComponent = AutoCompleteComponent;
