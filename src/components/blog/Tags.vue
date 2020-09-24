<template>
    <div class="tags col s6 m6 l12">
        <p class="title center-align">Tags</p>
        <div class="hr"></div>
        <ul>
            <li>
                <div class="chip">
                    Tag 1
                    <i class="close material-icons">close</i>
                </div>
            </li>
            <li>
                <div class="chip">
                    Tag 2
                    <i class="close material-icons">close</i>
                </div>
            </li>
            <li>
                <div class="chip">
                    Tag 3
                    <i class="close material-icons">close</i>
                </div>
            </li>
            <li>
                <div class="chip">
                    Tag 4
                    <i class="close material-icons">close</i>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
    .tags {
        margin-top: 40px;
    }

    .hr {
        width: 100%;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    .title {
        color: #111;
        font-size: 20px;
        font-weight: 400;
    }
    li {
        margin: 10px;
    }
</style>