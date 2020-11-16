<template>
    <div class="row">
        <div class="col s9">
            <ul class="pagination">
                <li class="disabled">
                    <a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="right_panel.button"><i
                            class="material-icons">chevron_left</i></a>
                </li>
                <li class="active"><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')"
                                      :style="right_panel.button">1</a></li>
                <li class="waves-effect"><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')"
                                            :style="right_panel.button">2</a></li>
                <li class="waves-effect"><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')"
                                            :style="right_panel.button">3</a></li>
                <li class="waves-effect"><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')"
                                            :style="right_panel.button">4</a></li>
                <li class="waves-effect"><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')"
                                            :style="right_panel.button">5</a></li>
                <li class="waves-effect">
                    <a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">
                        <i class="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        }
    }

</script>

<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
    }

    .pagination li {
        margin: 0 2px;
        height: auto !important;
    }

    i {
        font-size: 1.2rem !important;
    }


</style>