'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VueReegux = {
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

module.exports = VueReegux