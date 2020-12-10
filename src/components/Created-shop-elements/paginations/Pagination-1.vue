<template>
    <div class="row">
        <div class="col s9">
            <ul class="pagination">
                <li class="disabled">
                    <a href="#" :style="button_style"><i class="material-icons">chevron_left</i></a>
                </li>
                <li class="active"><a href="#" :style="button_style">1</a></li>
                <li class="active"><a href="#" :style="button_style">2</a></li>
                <li class="active"><a href="#" :style="button_style">3</a></li>
                <li class="active"><a href="#" :style="button_style">4</a></li>
                <li class="active"><a href="#" :style="button_style">5</a></li>
                <li class="waves-effect">
                    <a href="#" :style="button_style">
                        <i class="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['button_style']
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