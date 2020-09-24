<template>
    <div class="right-box">
        <div class="right-box-element">
            <h5>Category color</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.categoryElements.a.color"
                           @change="CATEGORY_A_COLOR(color)"
                           :disableFields=true @input="updateCategoryAColor"/>
        </div>
        <div class="right-box-element">
            <h5>Category background color</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.categoryElements.ul.background"
                           @change="CATEGORY_UL_COLOR(color)"
                           :disableFields=true @input="updateCategoryBackgroundColor"/>
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
            ...mapActions(['CLOSE_RIGHT_PANEL', 'CATEGORY_A_COLOR', 'CATEGORY_UL_COLOR']),
            updateCategoryAColor(color) {
                const hex = color.hex
                this.CATEGORY_A_COLOR(hex)
            },
            updateCategoryBackgroundColor(color) {
                const hex = color.hex
                this.CATEGORY_UL_COLOR(hex)
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