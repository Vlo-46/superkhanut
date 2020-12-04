<template>
    <div class="row pruduct-item" style="display: flex">
        <div class="col s12 m12 l4">
            <div class="imgBox">
                <router-link :to="{path: `/${encoded_name}/detail/${id}`, params: {id}}"><img :src="img" alt="">
                </router-link>
            </div>
        </div>
        <div class="col s12 m12 l5 infoBox">
            <div><p><a href="" class="product_title">{{product_name}}</a></p></div>
            <div><a href="" class="by_company"><em>By {{company_name}}</em></a></div>
            <div>
                <ul class="descriptionBox">
                    <li v-if="description.length > 150">
                        <span><i><small>{{description.substr(0, 160)}}...</small> </i></span></li>
                    <li v-else><span><i><small>{{description}}</small> </i></span></li>
                </ul>
            </div>
        </div>
        <div class="col s12 m12 l3">
            <!--                <a onclick="M.toast({html: 'Product added to the favorites list'})" class="favorite"><i-->
            <!--                        class="material-icons">favorite</i></a>-->
            <i class="material-icons favorite" @click="ADD_TO_FAVORITE">favorite</i>
            <div class="previewBox">
                <div><span class="product-price">{{price}} &nbsp; AMD</span></div>
                <!--                    <div>-->
                <!--                        <button class="buy_btn">Add to cart</button>-->
                <!--                    </div>-->
                <div>
                    <router-link :to="{path: `/${encoded_name}/detail/${id}`, params: {id}}" class="preview">
                        Preview
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../keys";

    export default {
        props: ['product_name', 'img', 'company_name', 'price', 'id', 'encoded_name', 'description'],
        methods: {
            ADD_TO_FAVORITE() {
                let favorite_list = keys.favorite;

                let favorite_item = {
                    company_name: this.company_name,
                    id: this.id,
                    product_name: this.product_name,
                    file: this.img,
                    product_price: this.price,
                    // discount_price: this.discount_price,
                    // product_category: this.product_category,
                };

                let array = [];

                let local_item = localStorage.getItem(favorite_list);

                array = JSON.parse(local_item) || [];

                for (let i = 0; i < array.length; i++) {
                    if (array[i].id === favorite_item.id) {
                        let index = array.indexOf(array[i]);
                        // console.log(index)
                        array.splice(index, 1)
                    }
                }

                array.push(favorite_item);
                localStorage.setItem(favorite_list, JSON.stringify(array))
            }
        }
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

    /*.favorite {*/
    /*    position: absolute;*/
    /*    right: 0;*/
    /*    padding: 10px;*/
    /*}*/

    /*.favorite i {*/
    /*    font-size: 28px;*/
    /*    color: #999;*/
    /*    cursor: pointer;*/
    /*}*/
    .favorite {
        align-self: flex-end;
        position: absolute;
        right: 10px;
        font-size: 26px;
        color: #aaa;
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