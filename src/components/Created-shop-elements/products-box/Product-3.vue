<template>
    <div class="product" id="product-3">
        <div class="img-box">
            <img :src="file" alt="">
            <div class="details">
                <div class="details-box">
                    <div>
                        <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}">
                            <i class="material-icons" :style="icon">visibility</i>
                        </router-link>
                    </div>
                    <div>
                        <button @click="ADD_TO_FAVORITE"><i class="material-icons" :style="icon">favorite_border</i>
                        </button>
                    </div>
                    <div>
                        <button><i class="material-icons" :style="icon">shopping_cart</i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-body">
            <div><a href="" class="product-title" :style="name">{{product_name}}</a></div>
            <div class="price-box">
                <div><span class="price" :style="price">{{product_price}}&nbsp;AMD</span></div>
                <div><span class="discount-price" v-if="discount_price">{{discount_price}}&nbsp;AMD</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";

    export default {
        name: 'product-3',
        props: ['name', 'price', 'category', 'button', 'icon', 'id', 'file', 'product_name', 'product_price', 'discount_price', 'product_category', 'tag', 'description', 'top', 'best', 'company_name'],
        methods: {
            ADD_TO_FAVORITE() {
                let favorite_list = keys.favorite;

                let favorite_item = {
                    company_name: this.company_name,
                    id: this.id,
                    file: this.file,
                    product_name: this.product_name,
                    product_price: this.product_price,
                    discount_price: this.discount_price,
                    product_category: this.product_category,
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
    .product {
        height: 370px;
        margin: 30px 15px 15px 0;
        border: 1px solid #eee;

    }

    .product:hover {
        border: 2px solid #ccc;
    }

    .product:hover .details-box {
        visibility: visible;
        opacity: 1;
    }

    .details {
        position: absolute;
        top: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .img-box img {
        width: 100%;
        height: 100%;
    }

    .img-box {
        height: 70%;
        position: relative;
    }

    .product-body {
        height: 30%;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-body div {
        margin: 5px 0;
    }

    .product-title {
        color: #333;
    }

    .product-title:hover {
        color: #000;
        font-weight: bold;
    }

    .price-box {
        display: flex;
        justify-content: center;
    }

    .price-box div {
        margin: 5px;
    }

    .discount-price {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;
    }

    .price {
        font-weight: bold;
    }

    .details button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .details a {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .details-box {
        display: flex;
        background-color: #fff;
        align-items: center;
        padding: 5px 10px;
        border-radius: 20px;
        border: 1px solid #f5f5f5;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }


    i:hover {
        color: #666;
    }
</style>