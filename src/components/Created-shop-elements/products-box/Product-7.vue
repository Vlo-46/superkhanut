<template>
    <div class="product" id="product-7">
        <!--        <div class="badge">Hot</div>-->
        <div class="product-tumb">
            <router-link :to="`/${company_name}/detail/${id}`">
                <img :src="file" alt="">
            </router-link>
        </div>
        <div class="product-details">
            <span class="product-catagory" :style="category">{{product_category}}</span>
            <h4>
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="view-more"
                >{{product_name}}
                    <!--                    :style="button"-->
                </router-link>
            </h4>
            <div class="product-bottom-details">
                <!--                <div class="product-price"><small>$270.00</small>$230.99</div>-->
                <div class="product-price" :style="price">{{product_price}}&nbsp;AMD</div>
                <div class="product-links">
                    <a href="" @click.prevent="ADD_TO_FAVORITE"><i class="fa fa-heart" :style="icon"></i></a>
                    <!--                    <a href=""><i class="fa fa-shopping-cart" :style="icon"></i></a>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";
    import Swal from 'sweetalert2'

    export default {
        name: 'product-7',
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
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .product {
        height: 370px;
        max-height: 370px;
        position: relative;
        box-shadow: 0 2px 7px #dfdfdf;
        background: #fafafa;
    }

    .badge {
        position: absolute;
        left: 0;
        top: 20px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        background: red;
        color: #fff;
        padding: 3px 10px;
    }

    .product-tumb {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        padding: 50px;
        background: #f0f0f0;
    }

    .product-tumb img {
        max-width: 100%;
        max-height: 100%;
    }

    .product-details {
        padding: 30px;
        height: 50%;
    }

    .product-catagory {
        display: block;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: #ccc;
        margin-bottom: 18px;
    }

    .product-details h4 a {
        font-weight: 500;
        display: block;
        margin-bottom: 18px;
        text-transform: uppercase;
        color: #363636;
        text-decoration: none;
        transition: 0.3s;
        font-size: 15px;
    }

    .product-details h4 a:hover {
        color: #fbb72c;
    }

    .product-details p {
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 18px;
        color: #999;
    }

    .product-bottom-details {
        overflow: hidden;
        border-top: 1px solid #eee;
        padding-top: 20px;
    }

    .product-bottom-details div {
        float: left;
        width: 50%;
    }

    .product-price {
        font-size: 18px;
        color: #fbb72c;
        font-weight: 600;
    }

    .product-price small {
        font-size: 80%;
        font-weight: 400;
        text-decoration: line-through;
        display: inline-block;
        margin-right: 5px;
    }

    .product-links {
        text-align: right;
    }

    .product-links a {
        display: inline-block;
        margin-left: 5px;
        color: #e1e1e1;
        transition: 0.3s;
        font-size: 17px;
    }

    .product-links a:hover {
        color: #fbb72c;
    }
</style>