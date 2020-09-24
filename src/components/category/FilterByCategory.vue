<template>
    <ul class="collapsible col s6 m6 l12">
        <li>
            <div class="collapsible-header">Filter by category <i class="material-icons">arrow_drop_down</i></div>
            <div class="collapsible-body">
                <ul>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    .collapsible-body ul li a {
        color: #262626;
        padding-bottom: 5px;
        display: block;
    }
    .collapsible-header {
        background-color: #fafafa;
        position: relative;
    }
    .material-icons {
        position: absolute;
        right: 0;
    }
</style>