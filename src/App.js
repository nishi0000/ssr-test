"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
var Home_1 = require("./compornents/Home");
var Header_1 = require("./compornents/Header");
var Footer_1 = require("./compornents/Footer");
var App = function () {
    return (<>
      <Header_1.Header />
      <Home_1.Home />
      <Footer_1.Footer />
    </>);
};
exports.App = App;
