"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 简单组件
 */
var Demo1 = function (_Component) {
    _inherits(Demo1, _Component);

    function Demo1() {
        _classCallCheck(this, Demo1);

        return _possibleConstructorReturn(this, (Demo1.__proto__ || Object.getPrototypeOf(Demo1)).apply(this, arguments));
    }

    _createClass(Demo1, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "span",
                    null,
                    " Hello World :"
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.message
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Demo1;
}(_react.Component);

// 看React提供了哪些顶层组件


Demo1.propTypes = {
    message: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.object
};
exports.default = Demo1;
console.log("Hello World jsx 看React提供了哪些顶层组件>>", _react2.default);