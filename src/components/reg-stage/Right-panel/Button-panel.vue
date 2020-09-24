<template>
    <div class="right-box">
        <div>
            <div class="right-box-element">
                <h5>Color</h5>
                <chrome-picker name="colorPicker"
                               @change="BTN_COLOR(colors)"
                               :value="right_panel.button.color"
                               :disableFields=true @input="updateColor"/>
            </div>
            <hr>
            <div class="right-box-element">
                <h5>Background Color</h5>
                <chrome-picker name="bgColorPicker"
                               :value="right_panel.button['background-color']"
                               @change="BTN_BG_COLOR(bgColor)"
                               :disableFields=true @input="updateBgColor"/>
            </div>
            <hr>
            <div class="right-box-element">
                <div class="input-field">
                    <label>Border radius</label>
                    <input type="text" :value="this.right_panel.button['border-radius']"  @keyup="BTN_BORDER_RADIUS(borderRadius)">
                </div>
            </div>
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
                colors: '',
                bgColor: '',
                borderRadius: ''
            }
        },
        components: {
            'chrome-picker': Chrome,
        },
        methods: {
            ...mapActions(['CLOSE_RIGHT_PANEL', 'BTN_COLOR', 'BTN_BG_COLOR', 'BTN_BORDER_RADIUS']),
            updateColor(color) {
                // console.log(color.hex)
                const hex = color.hex;
                this.BTN_COLOR(hex)
            },
            updateBgColor(bgColor) {
                const hex = bgColor.hex;
                this.BTN_BG_COLOR(hex)
            }
        },
        computed: {
            ...mapState(['right_panel']),
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
        z-index: 15;
    }
</style>