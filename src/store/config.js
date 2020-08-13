
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
        setRoundsTime (state, rounds) {
            return state.timerConfig.rounds = rounds
        },
    },
    actions: {
        setRoundsTime ({commit}, rounds) {
            commit('setRoundsTime', rounds)
        },
        setNotification ({commit}) {
            commit('setNotification')
        }
    },
    getters: {
        getTimerConfig (state) {
            return state.timerConfig
        },
        getWorkTime (state) {
            return state.timerConfig.rounds.work
        }
    }
}