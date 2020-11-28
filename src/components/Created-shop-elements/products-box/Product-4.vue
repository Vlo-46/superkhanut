<template>
    <div class="product" id="product-4">
        <div class="img-box">
            <img :src="file" alt="">
        </div>
        <div class="product-body">
            <div class="product-title">
                <a href="" :style="name">{{product_name}}</a>
            </div>
            <div class="details">
                <div>
                    <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="view-more" :style="button">View
                        more
                    </router-link>
                </div>
                <div>
                    <button class="favorite" @click="ADD_TO_FAVORITE">
                        <i class="material-icons" :style="icon">favorite</i>
                    </button>
                </div>
                <div>
                    <span class="price" :style="price">{{product_price}}&nbsp;AMD</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";

    export default {
        name: 'product-4',
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
    img {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }

    .product {
        display: flex;
        flex-direction: column;
        max-height: 370px;
        height: 370px;
        background-color: #fff;
        box-shadow: #ccc 0 0 16px;
    }

    .product:hover {
        box-shadow: #ccc 0 0 5px;
        transition: 0.5s;
    }

    .img-box {
        height: 65%;
    }

    .product-body {
        height: 35%;
        padding: 20px;
    }

    .product-title a {
        color: #333;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.4;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
    }

    .product-title a:hover {
        font-weight: bold;
        color: #000;
    }

    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .view-more {
        background: #fff;
        border: 1px solid #333;
        padding: 6px 13px;
        border-radius: 5px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }

    .view-more:hover {
        background-color: #333;
        color: #fff;
    }

    .favorite {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .price {
        color: #333;
    }

    .price:hover {
        font-weight: bold;
        color: #000;
    }
</style>