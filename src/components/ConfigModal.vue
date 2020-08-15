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
                        <div class="col-lg-12" v-if="formErrors">
                            <div class="alert alert-danger" role="alert">
                                Please fill all fields correctly
                            </div>
                        </div>

                        <div class="form-group text-left col-lg-6">
                            <label>Work time</label>
                            <input type="number" class="form-control" v-model="$v.localConfig.rounds.work.$model" placeholder="Work time" required="required">
                            <div class="help-block with-errors">
                                <div class="error" v-if="!$v.localConfig.rounds.work.required">Field is required</div>
                                <div class="error" v-if="!$v.localConfig.rounds.work.minValue">Field must be greater than 0</div>
                            </div>
                        </div>
                        <div class="form-group text-left col-lg-6">
                            <label>Short break</label>
                            <input type="number" class="form-control" v-model="$v.localConfig.rounds.break.$model" placeholder="Short break" required="required">
                            <div class="help-block with-errors">
                                <div class="error" v-if="!$v.localConfig.rounds.break.required">Field is required</div>
                                <div class="error" v-if="!$v.localConfig.rounds.break.minValue">Field must be greater than 0</div>
                            </div>
                        </div>
                        <div class="form-group col-lg-12 d-flex justify-content-between">
                            <span>Auto start next round</span>
                            <div>
                                <input class="tgl tgl-flat" id="autoNext" v-model="$v.localConfig.autoNext.$model" type="checkbox"/>
                                <label class="tgl-btn" for="autoNext"></label>
                            </div>
                        </div>
                        <div class="form-group  col-lg-12 d-flex justify-content-between">
                            <span>Audio notification</span>
                            <div>
                                <input class="tgl tgl-flat" id="audio" v-model="$v.localConfig.audioNotification.$model" type="checkbox"/>
                                <label class="tgl-btn" for="audio"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="updateRoundsTime">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, minValue } from 'vuelidate/lib/validators'

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
                },
                formErrors: false
            }
        },
        methods: {
            updateRoundsTime () {
                this.$v.$touch()
                if (!this.$v.$anyError) {
                    this.formErrors = false
                    this.$store.dispatch('updateTimerConfig', this.localConfig)
                    this.$emit('update')
                }else{
                    this.formErrors = true
                }

            }
        },
        validations: {
            localConfig: {
                audioNotification: {
                    required
                },
                autoNext: {
                    required
                },
                rounds: {
                    work: {
                        required,
                        minValue: minValue(1)
                    },
                    break: {
                        required,
                        minValue: minValue(1)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>