<template>
    <section class="home d-flex align-items-center">
        <div class="container">
            <div class="rounded-20 text-white padding-30 bg-grey">
                <div class="row">
                    <div class="col-md-4 d-flex">
                        <div class="btn-control pt-5 pb-5 p-1">
                            <div class="btn-group-vertical pt-4">
                                <button class="btn btn-success bg-transparent border-0 f-22" data-toggle="modal" data-target="#configModal"><i class="fas fa-cog"></i></button>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="col-lg-12">
                                <h1 class="text-white display-1 mb-0 pt-3 text-center">
                                    <b>{{ minutes }}:{{ seconds }}</b>
                                </h1>
                                <div class="btn-group btn-group-sm w-100 mb-3" role="group" >
                                    <button type="button" class="btn btn-default" @click="setRound('work')">Work time</button>
                                    <button type="button" class="btn btn-default" @click="setRound('break')">Short break</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-md-8 text-white">
                        <div class="d-flex p-5 float-right">
                            <div class="btn-control p-3">
                                <button class="btn btn-lg btn-primary font-weight-bold f-22" v-if="!timerStarted"
                                        @click="startTimer">START
                                </button>
                                <button class="btn btn-lg btn-primary font-weight-bold f-22" v-else @click="stopTimer">
                                    STOP
                                </button>
                            </div>
                            <div class="btn-control p-3">
                                <button class="btn btn-lg btn-default font-weight-bold f-22" @click="resetCurrentRound">
                                    RESET
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <config-modal :config="timerConfig" @update="setTimerConfig" />
    </section>
</template>

<script>
    import configModal from '../components/ConfigModal'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Home',
        components: {
            configModal
        },
        data() {
            return {
                timerConfig: null,
                currentTime: 0,
                roundStatus: 'work',
                timer: null,
                timerStarted: false
            }
        },
        created() {
            // this.setTimerConfig()
            this.timerConfig = this.$store.getters.timerConfig
            this.setCurrentTime(this.$store.getters.workTime)
        },
        methods: {
            toSeconds (minutes) {
                return minutes * 60
            },
            startTimer() {
                this.timerStarted = true
                this.timer = setInterval(this.countdown, 1000);
            },
            stopTimer() {
                this.timerStarted = false
                clearInterval(this.timer);
                this.timer = null;
            },
            resetCurrentRound() {
                this.setRound(this.roundStatus)
            },
            padTime(time) {
                return (time < 10 ? '0' : '') + time;
            },
            countdown() {
                if (this.currentTime >= 1) {
                    this.currentTime--;
                } else {
                    this.stopTimer()
                    if(this.timerConfig.autoNext === true){
                        switch (this.roundStatus) {
                            case "work":
                                this.setRound('break')
                                break
                            case "break":
                                this.setRound('work')
                                break
                        }
                        this.audioNotification()
                        this.startTimer()
                    }
                }
            },
            setTimerConfig () {
                console.log('updated')
                this.timerConfig = this.$store.getters.timerConfig
                this.setRound(this.roundStatus)
            },
            setCurrentTime (time) {
                this.currentTime = this.toSeconds(time)
            },
            setRound (round) {
                this.stopTimer()
                this.roundStatus = round
                this.setCurrentTime(this.timerConfig.rounds[round])
            },
            audioNotification () {
                let audio = new Audio('/beep.mp3')
                audio.play()
            }
        },
        computed: {
            minutes() {
                const minutes = Math.floor(this.currentTime / 60);
                return this.padTime(minutes);
            },
            seconds() {
                const seconds = this.currentTime - (this.minutes * 60);
                return this.padTime(seconds);
            }
        }
    }
</script>
