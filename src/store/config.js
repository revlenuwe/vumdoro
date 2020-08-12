
export default {
    state: {
        timerConfig: {
            rounds: {
                work: 5,
                break: 2,
            },
            autoNext: true,
            audio: 'audio'
        }
    },
    mutations: {

    },
    actions: {

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