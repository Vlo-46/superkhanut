<template>
    <div class="product" id="product-1">
        <div class="img-box">
            <router-link :to="`/${company_name}/detail/${id}`">
                <img :src="file">
            </router-link>
        </div>
        <div class="item-body">
            <div class="type-box"><span :style="category">{{product_category}}</span></div>
            <div class="product-name-box">
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}"
                             :style="name">{{product_name}}
                </router-link>
            </div>
            <div class="price-box">
                <div><span class="price" :style="price">{{product_price}}&nbsp;AMD</span></div>
                <div><span class="discount" v-if="discount_price">{{discount_price}}&nbsp;AMD</span></div>
            </div>
        </div>
        <div class="product-action">
            <div>
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}">
                    <i class="material-icons" :style="icon">visibility</i>
                </router-link>
            </div>
            <div>
                <button @click="ADD_TO_FAVORITE">
                    <i class="material-icons" :style="icon">favorite_border</i>
                </button>
            </div>
            <!--            <div>-->
            <!--                <button>-->
            <!--                    <i class="material-icons" :style="icon">shopping_cart</i>-->
            <!--                </button>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";

    import Swal from 'sweetalert2'

    export default {
        name: 'product-1',
        data() {
            return {
                disabled: true
            }
        },
        props: ['name', 'price', 'category', 'button', 'icon', 'id', 'file', 'product_name', 'product_price',
            'discount_price', 'product_category', 'tag', 'description', 'top', 'best', 'company_name'],
        methods: {
            ADD_TO_FAVORITE() {
                this.disabled = false;

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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product in your list of preferences',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
    }

</script>

<style scoped>
    .product {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        height: 365px;
        border: 1px solid #eee;
        margin: 15px 0;
    }

    .product:hover {
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
        transition: 0.7s;
    }

    .product:hover .product-action {
        display: block;
        visibility: visible;
        opacity: 1;
    }

    .product div {
        margin: 10px 0;
    }

    .item-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img-box {
        height: 60%;
    }

    .item-body {
        height: 40%;
    }

    .type-box span {
        color: #a9a9a9;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-transform: capitalize;
    }

    .product-name-box a {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        text-transform: uppercase;
        color: #333c4a;
    }

    .price-box {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .price {
        color: #6ba229;
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
    }

    .discount {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;

    }

    .add_to_cart i:hover {
        color: #fff;
    }

    .img-box img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: block;
    }

    .product-action {
        position: absolute;
        right: 0;
        padding: 0 15px;
        transition: 0.8s;
        visibility: hidden;
        opacity: 0;
    }

    .product-action button {
        color: #000;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid;
        padding: 3px 6px;
        background: #fff;
    }

    .product-action a {
        color: #000;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid;
        padding: 3px 6px;
        background: #fff;
        display: flex;
    }

    .product-action a:hover {
        transition: 0.5s;
        opacity: 0.6;
    }

    .product-action button:hover {
        /*background-color: #6ba229;*/
        /*color: #fff;*/
        /*border: 1px solid #6ba229;*/
        transition: 0.5s;
        opacity: 0.6;
    }
</style>