<template>
    <div class="double-slider">
        <input type="range" name="range_from" class="from" value="0" min="0" max="150" data-prev-value="0">
        <div class="progressbar_from"></div>
        <input type="range" name="range_to" class="to" value="150" min="0" max="150" data-prev-value="150">
        <div class="progressbar_to"></div>

        <span class="value-output from">0</span>
        <span class="value-output to">150</span>
    </div>
</template>

<style scoped>
    .double-slider{
        display:flex;
        justify-content: space-between;
        height:50px;
        position:relative;
        margin:10vh auto;
    }

    .value-output {
        margin-top: 15px;
        font-family: "Arial", sans-serif;
    }

    .value-output.from:before {
        content:'From: ';
    }

    .value-output.to:before {
        content:'To: ';
    }


    .progressbar_from {
        position: absolute;
        top: -3px;
        left:0;
        height: 5px;
        width: 0;
        background-color: #e6e6e6;
        z-index: 1;
    }

    .progressbar_to {
        position: absolute;
        top: -3px;
        right:0;
        height: 5px;
        width: 0;
        background-color: #e6e6e6;
        z-index: 1;
    }

    input[type=range] {
        -webkit-appearance: none;
        margin: 0;
        width: 100%;
        height: 0;
        position: absolute;
    }

    input[type=range]:focus {
        outline: none;
    }

    /* Chrome Styles */
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 2.2s;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: #007bcd;
        border-radius: 25px;
        border: 0px solid #000101;
        position: relative;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 1px solid #e6e6e6;
        height: 20px;
        width: 20px;
        border-radius: 15px;
        background: #fff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: 0;
        transform: translate(0, -50%);
        z-index: 9999;
        position: absolute;
        top: 50%;
    }


    input[type=range]:focus::-webkit-slider-runnable-track {
        background: '#007bcd';
    }

    /* Firefox styles */
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: #ac51b5;
        border-radius: 25px;
        border: 0px solid #000101;
    }
    input[type=range]::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: #65001c;
        cursor: pointer;
    }

    /* IE styles */
    input[type=range]::-ms-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        border-width: 39px 0;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: #ac51b5;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    }
    input[type=range]::-ms-fill-upper {
        background: #ac51b5;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    }
    input[type=range]::-ms-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: #65001c;
        cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: #ac51b5;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: #ac51b5;
    }

    body {
        padding: 30px;
    }

</style>