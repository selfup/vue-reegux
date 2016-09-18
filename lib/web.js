window.VueReegux = {
  bindActionsToStore: (state, actions) => {
    return new class {
      constructor(state, actions) {
        this.state = state
        this.actions = actions
      }

      send(message, arg) {
        this.actions[message](this.state, arg)
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