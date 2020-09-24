<template>
    <div class="right-box">
        <div class="right-box-element">
            <h5>Color</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.icon.color"
                           @change="ICON_COLOR(color)"
                           :disableFields=true @input="updateIconColor"/>
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
              color: ''
          }
        },
        methods: {
            ...mapActions(['CLOSE_RIGHT_PANEL', 'ICON_COLOR']),
            updateIconColor(color) {
                const hex = color.hex
                this.ICON_COLOR(hex)
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