var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// // import axios from 'axios';
// // import validator from 'validator';
// import { createRoot } from 'react-dom/client';

var domNode = document.getElementById('log-in');
var root = ReactDom.createRoot(domNode);

var Signin = function (_React$Component) {
    _inherits(Signin, _React$Component);

    function Signin(props) {
        _classCallCheck(this, Signin);

        var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));

        _this.handleEmailChange = _this.handleEmailChange.bind(_this);

        _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);

        _this.state = {

            email: '',

            password: ''

        };

        return _this;
    }

    _createClass(Signin, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'form',
                { className: 'form-signin' },
                React.createElement(
                    'h2',
                    { className: 'form-signin-heading' },
                    ' Please sign in '
                ),
                React.createElement(
                    'label',
                    { 'for': 'inputEmail', className: 'sr-only' },
                    ' Email address'
                ),
                React.createElement(
                    'label',
                    { 'for': 'inputEmail', className: 'sr-only' },
                    'Email address'
                ),
                React.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true, autofocus: true }),
                React.createElement(
                    'label',
                    { 'for': 'inputPassword', className: 'sr-only' },
                    'Password'
                ),
                React.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),
                React.createElement(
                    'button',
                    { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },
                    'Sign in'
                )
            );
        }
    }, {
        key: 'handleEmailChange',
        value: function handleEmailChange(e) {

            this.setState({ email: e.target.value });
        }
    }, {
        key: 'handlePasswordChange',
        value: function handlePasswordChange(e) {

            this.setState({ password: e.target.value });
        }
    }, {
        key: 'signIn',
        value: function signIn() {

            alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
        }
    }]);

    return Signin;
}(React.Component);

root.render(e(Signin));

console.log('11');