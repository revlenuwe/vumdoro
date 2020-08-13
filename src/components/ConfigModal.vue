<template>
    <div class="modal fade" id="configModal" tabindex="-1" role="dialog" aria-labelledby="configModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="configModalLabel">Settings</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group text-left col-lg-6">
                            <label>Work time</label>
                            <input type="number" class="form-control" v-model="localConfig.rounds.work" placeholder="Work time" required="required">
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group text-left col-lg-6">
                            <label>Short break</label>
                            <input type="number" class="form-control" v-model="localConfig.rounds.break" placeholder="Short break" required="required">
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group col-lg-12 d-flex justify-content-between">
                            <span>Auto start next round</span>
                            <div>
                                <input class="tgl tgl-flat" id="autoNext" v-model="localConfig.autoNext" type="checkbox"/>
                                <label class="tgl-btn" for="autoNext"></label>
                            </div>
                        </div>
                        <div class="form-group  col-lg-12 d-flex justify-content-between">
                            <span>Audio notification</span>
                            <div>
                                <input class="tgl tgl-flat" id="audio" v-model="localConfig.audioNotification" type="checkbox"/>
                                <label class="tgl-btn" for="audio"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateRoundsTime">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ConfigModal",
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                localConfig: {
                    audioNotification: this.config.audioNotification,
                    autoNext: this.config.autoNext,
                    rounds: this.config.rounds
                }
            }
        },
        methods: {
            updateRoundsTime () {
                //vuelidate
                this.$store.dispatch('updateTimerConfig', this.localConfig)
                this.$emit('update')
            }
        },
    }
</script>

<style scoped>

</style>