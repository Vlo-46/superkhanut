<template>
    <div class="filter level-filter level-req">
        <div id="rangeSlider" class="range-slider">
            <label>Price:</label>

            <div class="number-group">
                <input class="number-input" type="number" value="10000" min="0" max="50000" /> to
                <input class="number-input" type="number" value="50000" min="0" max="50000" disabled />
            </div>

            <div class="range-group">
                <input id="range-input" class="range-input" value="10" min="1" max="5000" step="1" type="range" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .range-slider {
        font-family: "Helvetica";
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
    .range-slider label {
        color: #363636;
    }
    .range-slider .number-group {
        flex: 1 0 auto;
        text-align: right;
        font-size: 14px;
    }
    .range-slider .number-group .number-input {
        width: 60px;
        height: 30px;
        text-align: center;
        font-size: 14px;
        color: #363636;
        border: 0;
    }
    .range-slider .number-group .number-input:first-of-type {
        margin-right: 7px;
    }
    .range-slider .number-group .number-input:last-of-type {
        margin-left: 7px;
    }
    .range-slider .number-group .number-input::-webkit-outer-spin-button, .range-slider .number-group .number-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    .range-slider .number-group .number-input:invalid, .range-slider .number-group .number-input:out-of-range {
        border: 2px solid red;
    }
    .range-slider .range-group {
        flex: 0 0 100%;
    }
    .range-slider .range-group .range-input {
        -webkit-appearance: none;
        width: 100%;
    }
    .range-slider .range-group .range-input:focus {
        outline: 0;
    }
    .range-slider .range-group .range-input::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animation: 0.2s;
        background: #4a4a4a;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    .range-slider .range-group .range-input::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #00d1b2;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }
    .range-slider .range-group .range-input::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animation: 0.2s;
        background: #00d1b2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    .range-slider .range-group .range-input::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #2497e3;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
    }
    .range-slider .range-group .range-input::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animation: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    .range-slider .range-group .range-input::-ms-fill-lower, .range-slider .range-group .range-input::-ms-fill-upper {
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    .range-slider .range-group .range-input::-ms-thumb {
        z-index: 2;
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
    }

    /* for demo purposes - remove to dynamically adapt to container size */
    .range-slider,
    .filter {
        margin: 0 auto 30px;
    }

</style>