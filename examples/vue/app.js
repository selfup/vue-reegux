// Set up actions and state ***
const { bindActionsToStore } = VueReegux
const tomState = {tom: {number: 0}}

const tomActions = {
	TOM_UP: (state, num) => {
    const newState = Object.assign({}, state)
    newState.tom.number += num
    return newState
  },
  TOM_DOWN: (state, num) => {
    const newState = Object.assign({}, state)
    newState.tom.number -= num
    return newState
  }
}

var tom = bindActionsToStore(tomState, tomActions)

const maryState = {mary: {number: 0}}

const maryActions = {
	MARY_UP: (state, num) => {
    const newState = Object.assign({}, state)
    newState.mary.number += num
    return newState
  },
  MARY_DOWN: (state, num) => {
    const newState = Object.assign({}, state)
    newState.mary.number -= num
    return newState
  }
}

var mary = bindActionsToStore(maryState, maryActions)

Vue.use(tom)
Vue.addVueReeguxController(mary)

console.log(Vue.$rgx)

const vm = new Vue({
  el: '#app',
  data() {
    return {
      state: Vue.$rgx.state
    }
  },
  methods: {
    send(action, arg) {
      Vue.$rgx.send(action, arg)
    }
  },
  computed: {
    tomnumber() {
      return this.state.tom.number
    },
    marynumber() {
      return this.state.mary.number
    }
  },
  template: `
    <div>
      <h1>Tom's number: {{ tomnumber }}</h1>
      <button @click="send('TOM_UP', 1)">Tom Up</button>
      <button @click="send('TOM_DOWN', 1)">Tom Down</button>
      <br><br>
      <h1>Mary's number: {{ marynumber }}</h1>
      <button @click="send('MARY_UP', 1)">Mary Up</button>
      <button @click="send('MARY_DOWN', 1)">Mary Down</button>
    </div>
  `
})