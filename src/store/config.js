
export default {
    state: {
        timerConfig: {
            rounds: {
                work: 1500,
                shortBreak: 30,
                longBreak: 900,
            },
            currentTime: 1500,
            longBreakInterval: 4
        }
    },
    mutations: {
        setTime (state, time) {
            state.timerConfig.currentTime = time * 60
        }
    },
    actions: {
        setTime ({commit}, time) {
            commit('setTime',time)
        }
    },
    getters: {
        getTimerConfig (state) {
            return state.timerConfig
        }
    }
}