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
                                <button class="btn btn-lg btn-primary font-weight-bold f-22" @click="startTimer">START</button>
                            </div>
                            <div class="btn-control p-3">
                                <button class="btn btn-lg btn-default font-weight-bold f-22">RESET</button>
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
              totalTime: 5 * 60,
              timer: null
            }
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => this.countdown(), 1000);
            },
            stopTimer() {
                clearInterval(this.timer);
                this.timer = null;
            },
            padTime(time) {
                return (time < 10 ? '0' : '') + time;
            },
            countdown() {
                if (this.totalTime >= 1) {
                    this.totalTime--;
                } else {
                    this.timer = null
                    this.totalTime = 0;
                }
            }
        },
        computed: {
            minutes() {
                const minutes = Math.floor(this.totalTime / 60);
                return this.padTime(minutes);
            },
            seconds() {
                const seconds = this.totalTime - (this.minutes * 60);
                return this.padTime(seconds);
            }
        }
    }
</script>
