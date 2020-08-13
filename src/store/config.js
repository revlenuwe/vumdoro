
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
        timerConfig (state) {
            return state.timerConfig
        },
        workTime (state) {
            return state.timerConfig.rounds.work
        },

    }
}