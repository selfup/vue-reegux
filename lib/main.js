const VueReegux = {
  bindActionsToStore: (state, actions) => {
    return new class {
      constructor(state, actions) {
        this.state = state
        this.actions = actions
      }

      send(message, arg) {
        const newState = this.actions[message](this.state, arg)
        if (newState === this.state) {
          console.error('please return a copy/clone')
          return 'please return a copy/clone'
        }
        this.state = newState
      }

      install(Vue, options) {
        Vue.$rgx = this
        Vue.addVueReeguxController = app => {
          Vue.$rgx.state = Object.assign({}, Vue.$rgx.state, app.state)
          Vue.$rgx.actions = Object.assign({}, Vue.$rgx.actions, app.actions)
        }
      }
    }(state, actions)
  }
}

module.exports = VueReegux
