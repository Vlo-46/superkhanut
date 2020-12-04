<template>
    <div class="pruduct-item">
        <div class="imgBox">
            <a :href="`/${encoded_name}/detail/${id}`"><img :src="img" alt=""></a>
            <!--            <a href="" class="favorite" style="display: none">-->
            <!--                <i onclick="M.toast({html: 'Product added to the favorites list'})"-->
            <!--                   class="material-icons">favorite</i>-->
            <!--            </a>-->
            <i class="material-icons favorite" @click="ADD_TO_FAVORITE" style="display: none">favorite</i>
        </div>
        <div class="product-body row">
            <div class="col s6" style="align-self: flex-end;">
                <div><p><a :href="`/${encoded_name}/detail/${id}`" class="product_title">{{product_name}}</a></p></div>
                <div><span class="product-price">{{price}}&nbsp;AMD</span></div>
                <div><a :href="`/${encoded_name}/home`" class="by_company"><em>By &nbsp; {{company_name}}</em></a></div>
            </div>
            <div class="col s6 previewBox">
                <router-link :to="{path: `/${encoded_name}/detail/${id}`, params: {id}}" class="preview">Preview
                </router-link>
                <!--                    <div>-->
                <!--                        <button class="buy_btn" type="submit" @click.prevent="ADD_TO_CART({product})">-->
                <!--                            <i class="material-icons"-->
                <!--                               onclick="M.toast({html: 'Product in the basket'})">shopping_cart</i>-->
                <!--                        </button>-->
                <!--                    </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../keys";

    export default {
        props: ['product_name', 'img', 'company_name', 'price', 'id', 'encoded_name'],
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
        height: 100%;
        display: block;
        border-radius: 5px 5px 0 0;
    }

    .pruduct-item {
        height: 330px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: #c1c1c1 0 0 16px;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .imgBox {
        height: 50%;
        margin-bottom: 10px;
        display: flex;
        position: relative;
    }

    .product_title {
        color: #4d4d4d;
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .pruduct-item:hover .favorite {
        display: block !important;
    }

    .favorite {
        align-self: flex-end;
        position: absolute;
        right: 10px;
        font-size: 26px;
        color: #aaa;
        cursor: pointer;
    }

    /*.favorite {*/
    /*    align-self: flex-end;*/
    /*    position: absolute;*/
    /*    right: 10px;*/
    /*}*/

    /*.favorite i {*/
    /*    font-size: 26px;*/
    /*    color: #ccc;*/
    /*    cursor: pointer;*/
    /*}*/

    /*.favorite i:hover {*/
    /*    color: #fff;*/
    /*    transition: 0.2s;*/
    /*}*/

    .preview {
        color: #666;
        border: 1px solid #ccc;
        background-color: #fafafa;
        padding: 7px 16px;
        cursor: pointer;
        border-radius: 2px;
        float: right;
    }

    .preview:hover {
        background-color: #ccc;
        color: #fff;
    }


    .product-body {
        display: flex;
        height: 50%;
        padding: 7px 12px;
        position: relative;
    }

    .by_company {
        color: #4d4d4d;
        font-size: 16px;
        position: absolute;
        top: 0;
    }


    .product-price {
        font-weight: bold;
    }

    .buy_btn {
        background-color: #fff;
        color: #79b530;
        border: 1px solid #79b530;
        cursor: pointer;
    }

    .buy_btn:hover {
        background-color: #79b530;
        color: #fff;
    }

    .previewBox {
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
        align-items: center;
    }
</style>