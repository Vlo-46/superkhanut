<template>
    <div class="right-box">
        <div class="right-box-element">
            <h5>Color</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.input.color"
                           @change="INPUT_COLOR(color)"
                           :disableFields=true @input="updateInputColor"/>
        </div>
        <div class="right-box-element">
            <p>
                <label @change="INPUT_ALIGN(center)">
                    <input type="checkbox" :value="right_panel.input.textAlign"/>
                    <span>TEXT CENTER</span>
                </label>
            </p>
        </div>
        <div class="close-right-panel" @click="CLOSE_RIGHT_PANEL(null)"><span>&#10005;</span></div>
    </div>
</template>

<script>
    import {Chrome} from "vue-color";
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                color: '',
                center: 'center',
                placeholder: ''
            }
        },
        methods: {
            ...mapActions(['CLOSE_RIGHT_PANEL', 'INPUT_COLOR', 'INPUT_ALIGN']),
            updateInputColor(color) {
                const hex = color.hex;
                this.INPUT_COLOR(hex)
            }
        },
        computed: {
            ...mapState(['right_panel'])
        },
        components: {
            'chrome-picker': Chrome,
        },
    }
</script>

<style scoped>
    .right-box {
        position: fixed;
        bottom: 0;
        right: 15px;
        height: 100%;
        margin: auto;
        top: 30px;
        overflow-y: scroll;
    }

    .right-box-element {
        margin-bottom: 20px;
    }

    .close-right-panel {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
    }

    .close-right-panel span {
        font-weight: bold;
        font-size: 20px;
    }
</style>
