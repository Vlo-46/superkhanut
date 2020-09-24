<template>
    <ul class="collapsible col s6 m6 l12">
        <li>
            <div class="collapsible-header">Filter by tag <i class="material-icons">arrow_drop_down</i></div>
            <div class="collapsible-body">
                <ul>
                    <li>
                        <label>
                            <input type="checkbox">
                            <span>Tag</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox">
                            <span>Tag</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox">
                            <span>Tag</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox">
                            <span>Tag</span>
                        </label>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    .collapsible-body ul li {
        padding-bottom: 5px;
    }


    input[type="checkbox"]:checked+span:not(.lever):before {
        border-right: 2px solid #85b54a;
        border-bottom: 2px solid #85b54a;
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