<template>
    <div class="product" id="product-5">
        <div class="img-box">
            <router-link :to="`/${company_name}/detail/${id}`">
                <img :src="file" alt="">
            </router-link>
            <div class="product-title"><p :style="name">{{product_name}}</p></div>
            <div class="favorite-box">
                <button @click="ADD_TO_FAVORITE"><i class="material-icons" :style="icon">favorite</i></button>
            </div>
        </div>
        <div class="product-body">
            <div class="info-box">
                <div class="price-box">
                    <span :style="price">{{product_price}}&nbsp;AMD</span>
                </div>
                <div class="tag-box"><span>#{{tag}}</span></div>
            </div>
            <div class="buttons-box">
                <div>
                    <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="view-more"
                                 :style="button">View more
                    </router-link>
                </div>
                <div>
                    <button class="buy" :style="button">
                        <i class="material-icons" :style="icon">shopping_cart</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";
    import Swal from 'sweetalert2'

    export default {
        name: 'product-5',
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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product in your list of preferences',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
</script>

<style scoped>
    .product {
        height: 370px;
        max-height: 370px;
        background-color: #fff;
        box-shadow: 0 0 12px inset;
    }

    .product:hover {
        box-shadow: 0 0 12px;
        transition: 0.7s;
    }

    .img-box {
        height: 60%;
        position: relative;
    }

    .product-title {
        position: absolute;
        bottom: 0;
        padding: 0 10px;
    }

    .favorite-box {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }

    .product-title p {
        color: #fff;
        font-weight: bold;
    }

    .product-body {
        padding: 20px;
        height: 40%;
    }

    .info-box {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        height: 50%;
        align-items: center;
    }

    .tag-box span {
        font-weight: bold;
        font-size: small;
    }

    .price-box span {
        font-weight: bold;
    }

    .favorite-box a {
        color: #262626;
    }

    i {
        font-size: 27px;
    }

    .view-more {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .buttons-box {
        display: flex;
        justify-content: space-between;
        height: 50%;
        align-items: center;
    }

    .buy {
        cursor: pointer;
    }
</style>