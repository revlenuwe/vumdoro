<template>
    <section class="home d-flex align-items-center">
        <div class="container">
            <div class="rounded text-white padding-30 bg-grey">
                <div class="row">
                    <div class="col-md-4 d-flex">
                        <div class="btn-control pt-5 pb-5 p-3">
                            <div class="btn-group-vertical">
                                <button class="btn btn-success btn-sm"><i class="fas fa-cog"></i></button>
                                <button class="btn btn-success btn-sm"><i class="fas fa-forward"></i></button>
                            </div>
                        </div>
                        <h1 class="text-white display-1 p-3 text-center">
                            <b>{{ minutes }}:{{ seconds }}</b>
                        </h1>
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
    </section>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                timerConfig: null,
                timer: null,
                timerStarted: false
            }
        },
        created() {
            this.timerConfig = this.$store.getters.getTimerConfig
        },
        methods: {
            startTimer() {
                this.timerStarted = true
                this.timer = setInterval(() => this.countdown(), 1000);
            },
            stopTimer() {
                clearInterval(this.timer);
                this.timer = null;
            },
            resetCurrentRound() {
                this.timerConfig.currentTime = 5 * 60//get from config
            },
            padTime(time) {
                return (time < 10 ? '0' : '') + time;
            },
            countdown() {
                if (this.timerConfig.currentTime >= 1) {
                    this.timerConfig.currentTime--;
                } else {
                    this.timer = null
                    this.timerConfig.currentTime = 0;
                }
            }
        },
        computed: {
            minutes() {
                const minutes = Math.floor(this.timerConfig.currentTime / 60);
                return this.padTime(minutes);
            },
            seconds() {
                const seconds = this.timerConfig.currentTime - (this.minutes * 60);
                return this.padTime(seconds);
            }
        }
    }
</script>
