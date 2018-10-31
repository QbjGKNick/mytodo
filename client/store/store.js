import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'develop'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
  // modules: {
  //   a: {
  //     namespaced: true,
  //     state: {
  //       text: 1
  //     },
  //     mutations: {
  //       updateText (state, text) {
  //         console.log('state:::', state)
  //         state.text = text
  //       }
  //     },
  //     getters: {
  //       textPlus (state, getters, rootState) {
  //         return state.text + rootState.b.text
  //       }
  //     },
  //     actions: {
  //       add ({ state, commit, rootState }) {
  //         commit('updateCount', { num: 567890 }, { root: true })
  //       }
  //     }
  //   },
  //   b: {
  //     state: {
  //       text: 2
  //     }
  //   }
  // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
