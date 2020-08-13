
export default {
    state: {
        timerConfig: {
            rounds: {
                work: 25,
                break: 5,
            },
            autoNext: true,
            audioNotification: true
        }
    },
    mutations: {
        //update all config or switch settings -> tabs
        updateTimerConfig (state, config) {
            return state.timerConfig = config
        },
    },
    actions: {
        updateTimerConfig ({commit}, config) {
            commit('updateTimerConfig', config)
        },

    },
    getters: {
        timerConfig (state) {
            return state.timerConfig
        },
        workTime (state) {
            return state.timerConfig.rounds.work
        },

    }
}