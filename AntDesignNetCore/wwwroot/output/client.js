"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./routes/routes");
var antd_1 = require("antd");
var SubMenu = antd_1.Menu.SubMenu;
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider;
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(antd_1.Layout, null,
        React.createElement(Header, { className: "header" },
            React.createElement("div", { className: "logo" }),
            React.createElement(antd_1.Menu, { theme: "dark", mode: "horizontal", defaultSelectedKeys: ['0'], style: { lineHeight: '64px' } },
                React.createElement(antd_1.Menu.Item, { key: "0" },
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                React.createElement(antd_1.Menu.Item, { key: "1" },
                    React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                React.createElement(antd_1.Menu.Item, { key: "2" },
                    React.createElement(react_router_dom_1.Link, { to: "/notfound" }, "Page Not Found")))),
        React.createElement(Content, { style: { padding: '0 50px' } },
            React.createElement(antd_1.Breadcrumb, { style: { margin: '12px 0' } },
                React.createElement(antd_1.Breadcrumb.Item, null, "Home"),
                React.createElement(antd_1.Breadcrumb.Item, null, "List"),
                React.createElement(antd_1.Breadcrumb.Item, null, "App")),
            React.createElement(antd_1.Layout, { style: { padding: '24px 0', background: '#fff' } },
                React.createElement(Sider, { width: 200, style: { background: '#fff' } },
                    React.createElement(antd_1.Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%' } },
                        React.createElement(SubMenu, { key: "sub1", title: React.createElement("span", null,
                                React.createElement(antd_1.Icon, { type: "user" }),
                                "subnav 1") },
                            React.createElement(antd_1.Menu.Item, { key: "1" }, "option1"),
                            React.createElement(antd_1.Menu.Item, { key: "2" }, "option2"),
                            React.createElement(antd_1.Menu.Item, { key: "3" }, "option3"),
                            React.createElement(antd_1.Menu.Item, { key: "4" }, "option4")),
                        React.createElement(SubMenu, { key: "sub2", title: React.createElement("span", null,
                                React.createElement(antd_1.Icon, { type: "laptop" }),
                                "subnav 2") },
                            React.createElement(antd_1.Menu.Item, { key: "5" }, "option5"),
                            React.createElement(antd_1.Menu.Item, { key: "6" }, "option6"),
                            React.createElement(antd_1.Menu.Item, { key: "7" }, "option7"),
                            React.createElement(antd_1.Menu.Item, { key: "8" }, "option8")),
                        React.createElement(SubMenu, { key: "sub3", title: React.createElement("span", null,
                                React.createElement(antd_1.Icon, { type: "notification" }),
                                "subnav 3") },
                            React.createElement(antd_1.Menu.Item, { key: "9" }, "option9"),
                            React.createElement(antd_1.Menu.Item, { key: "10" }, "option10"),
                            React.createElement(antd_1.Menu.Item, { key: "11" }, "option11"),
                            React.createElement(antd_1.Menu.Item, { key: "12" }, "option12")))),
                React.createElement(Content, { style: { padding: '0 24px', minHeight: 280 } },
                    React.createElement(routes_1.RouteMap, null)))),
        React.createElement(Footer, { style: { textAlign: 'center' } }, "Ant Design \u00A92016 Created by Ant UED"))), document.getElementById('body'));
//<BrowserRouter>
//    <RouteMap />
//</BrowserRouter> 
