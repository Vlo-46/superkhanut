<template>
    <ul>
        <h5>FILTER BY PRICE</h5>
        <div>
            <input type="range" min="100" max="10000" step="1"
                   class="custom-range">
            <span class="filtered_price">100&nbsp;Դ&nbsp;-&nbsp;10000&nbsp;Դ</span>
        </div>
    </ul>
</template>

<style scoped>
    ul {
        margin-bottom: 30px;
    }
    .custom-range::-webkit-slider-thumb {
        background: #49b14d;
    }

    .custom-range::-moz-range-thumb {
        background: #49b14d;
    }

    .custom-range::-ms-thumb {
        background: #49b14d;
    }

    .filtered_price {
        font-size: small;
        color: #777;
    }
</style>