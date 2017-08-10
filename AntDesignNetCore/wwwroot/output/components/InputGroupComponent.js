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
var InputGroup = antd_1.Input.Group;
var Option = antd_1.Select.Option;
var options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                        value: 'xihu',
                        label: 'West Lake'
                    }]
            }]
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }]
            }]
    }];
var InputGroupComponent = (function (_super) {
    __extends(InputGroupComponent, _super);
    function InputGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputGroupComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(InputGroup, { size: "large" },
                React.createElement(antd_1.Col, { span: 4 },
                    React.createElement(antd_1.Input, { defaultValue: "0571" })),
                React.createElement(antd_1.Col, { span: 8 },
                    React.createElement(antd_1.Input, { defaultValue: "26888888" }))),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Input, { style: { width: '20%' }, defaultValue: "0571" }),
                React.createElement(antd_1.Input, { style: { width: '30%' }, defaultValue: "26888888" })),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Select, { defaultValue: "Zhejiang" },
                    React.createElement(Option, { value: "Zhejiang" }, "Zhejiang"),
                    React.createElement(Option, { value: "Jiangsu" }, "Jiangsu")),
                React.createElement(antd_1.Input, { style: { width: '50%' }, defaultValue: "Xihu District, Hangzhou" })),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Select, { defaultValue: "Option1" },
                    React.createElement(Option, { value: "Option1" }, "Option1"),
                    React.createElement(Option, { value: "Option2" }, "Option2")),
                React.createElement(antd_1.Input, { style: { width: '50%' }, defaultValue: "input content" }),
                React.createElement(antd_1.InputNumber, null)),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Input, { style: { width: '50%' }, defaultValue: "input content" }),
                React.createElement(antd_1.DatePicker, null)),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Select, { defaultValue: "Option1-1" },
                    React.createElement(Option, { value: "Option1-1" }, "Option1-1"),
                    React.createElement(Option, { value: "Option1-2" }, "Option1-2")),
                React.createElement(antd_1.Select, { defaultValue: "Option2-2" },
                    React.createElement(Option, { value: "Option2-1" }, "Option2-1"),
                    React.createElement(Option, { value: "Option2-2" }, "Option2-2"))),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Select, { defaultValue: "1" },
                    React.createElement(Option, { value: "1" }, "Between"),
                    React.createElement(Option, { value: "2" }, "Except")),
                React.createElement(antd_1.Input, { style: { width: 100, textAlign: 'center' }, placeholder: "Minimum" }),
                React.createElement(antd_1.Input, { style: { width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }, placeholder: "~", disabled: true }),
                React.createElement(antd_1.Input, { style: { width: 100, textAlign: 'center', borderLeft: 0 }, placeholder: "Maximum" })),
            React.createElement("br", null),
            React.createElement(InputGroup, { compact: true },
                React.createElement(antd_1.Select, { style: { width: '30%' }, defaultValue: "Home" },
                    React.createElement(Option, { value: "Home" }, "Home"),
                    React.createElement(Option, { value: "Company" }, "Company")),
                React.createElement(antd_1.Cascader, { style: { width: '70%' }, options: options, placeholder: "Select Address" }))));
    };
    return InputGroupComponent;
}(React.Component));
exports.InputGroupComponent = InputGroupComponent;
