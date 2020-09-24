<template>
    <div class="col s12">
        <div class="pruduct-item">
            <div class="row" style="display: flex; margin: 0">
                <div class="col s4">
                    <div class="imgBox">
                        <a href=""><img src="../../assets/no-img.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col s5 infoBox">
                    <div><p><a href="" class="product_title">{{title}}</a></p></div>
                    <div><a href="" class="by_company"><em>By {{company_name}}</em></a></div>
                    <div>
                        <ul class="descriptionBox">
                            <li><span><i><small>{{description}}</small> </i></span></li>
                        </ul>
                    </div>
                </div>
                <div class="col s3">
                    <a onclick="M.toast({html: 'Product added to the favorites list'})" class="favorite"><i
                            class="material-icons">favorite</i></a>
                    <div class="previewBox">
                        <div><span class="product-price">{{price}} &nbsp; AMD</span></div>
                        <div>
                            <button class="buy_btn">Add to cart</button>
                        </div>
                        <div>
                            <button class="preview">Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['company_name', 'title', 'price', 'description']
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 200px;
        display: block;
    }

    .pruduct-item {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        box-shadow: 0 0 4px 0;
        border-radius: 5px;
        margin-bottom: 20px;
        position: relative;
    }

    .product_title {
        font-family: -apple-system, BlinkMacSystemFont, segoe ui, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, arial, sans-serif;
        cursor: pointer;
        text-decoration: none;
        color: #4d4d4d;
        font-size: 14px;
        vertical-align: bottom;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
    }

    .by_company {
        font-size: 12px;
        color: #999;
    }

    .favorite {
        position: absolute;
        right: 0;
        padding: 10px;
    }

    .favorite i {
        font-size: 28px;
        color: #999;
        cursor: pointer;
    }

    .buy_btn {
        color: #79b530;
        border: 1px solid #79b530;
        background-color: #fff;
        cursor: pointer;
        padding: 6px;
        float: right;
    }

    .buy_btn:hover {
        color: #fff;
        background-color: #79b530;
    }

    .preview {
        background-color: #fff;
        color: #999;
        cursor: pointer;
        padding: 6px;
        border: 1px solid #ccc;
        float: right;
    }

    .preview:hover {
        background-color: #ccc;
        color: #fff;
    }

    .product-price {
        font-size: 18px;
        font-weight: bold;
        color: #999;
        float: right;
    }

    .previewBox {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .previewBox div {
        margin: 3px 0px;
    }

    .infoBox {
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        padding: 0px 15px;
    }

    .descriptionBox {
        list-style: none;
    }
</style>