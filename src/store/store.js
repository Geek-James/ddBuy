import Vue from 'vue'
import Vuex from 'vuex'

import State from './state'
import Mutation from './mutation'
import Actions from './actions'


Vue.use(Vuex)

export default new Vuex.Store({
    State,
    Mutation,
    Actions
})