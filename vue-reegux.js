(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.VueReegux = {
  bindActionsToStore: function bindActionsToStore(state, actions) {
    return new (function () {
      function _class(state, actions) {
        _classCallCheck(this, _class);

        this.state = state;
        this.actions = actions;
      }

      _createClass(_class, [{
        key: 'send',
        value: function send(message, arg) {
          var newState = this.actions[message](this.state, arg);
          if (newState === this.state) {
            console.error('please return a copy/clone');
            return 'please return a copy/clone';
          }
          this.state = newState;
        }
      }, {
        key: 'install',
        value: function install(Vue, options) {
          Vue.$rgx = { state: this.state, actions: this.actions, send: this.send };
          Vue.addVueReeguxController = function (app) {
            Vue.$rgx.state = Object.assign({}, Vue.$rgx.state, app.state);
            Vue.$rgx.actions = Object.assign({}, Vue.$rgx.actions, app.actions);
          };
        }
      }]);

      return _class;
    }())(state, actions);
  }
};

},{}]},{},[1]);
