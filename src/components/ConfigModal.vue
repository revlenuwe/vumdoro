<template>
    <div class="modal fade" id="configModal" tabindex="-1" role="dialog" aria-labelledby="configModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="configModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <input type="number" class="form-control" v-model="rounds.work" placeholder="Work time" required="required">
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group col-lg-6">
                            <input type="number" class="form-control" v-model="rounds.break" placeholder="Short break" required="required">
                            <div class="help-block with-errors"></div>
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
                rounds: this.config.rounds
            }
        },
        methods: {
            updateRoundsTime () {
                //vuelidate
                this.$store.dispatch('setRoundsTime', this.rounds)
            }
        }
    }
</script>

<style scoped>

</style>