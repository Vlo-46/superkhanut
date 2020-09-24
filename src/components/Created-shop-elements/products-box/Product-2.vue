<template>
    <div class="product" id="product-2">
        <div class="imgBox">
            <img :src="file" alt="">
        </div>
        <div class="product-body">
            <div><span class="product_name" :style="name">{{product_name}}</span></div>
            <div>
                <p class="product_price" :style="price">{{product_price}}&nbsp;AMD</p>
                <span class="discount" v-if="discount_price">{{discount_price}}&nbsp;AMD</span>
            </div>
            <div>
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="btn" :style="button" >View</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";

    export default {
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

    .imgBox {
        height: 50%;
    }

    .product {
        border-top: 1px solid #dee2e6 !important;
        box-shadow: 0 0 10px #a2a0a0;
        margin: 10px 0;
        height: 370px;
        max-height: 370px;
    }

    .product:hover {
        box-shadow: 0 3px 10px -5px #333;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        transition: 0.5s;
    }

    .product_name {
        color: #4d4d4d;
    }

    .product_price {
        color: #0a662e;
        font-weight: bold;
    }

    .product-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: 50%;
    }

    .discount {
        color: #a9a9a9;
        font-weight: 400;
        text-decoration: line-through;
    }

    .btn {
        background-color: #0a662e;
    }
</style>