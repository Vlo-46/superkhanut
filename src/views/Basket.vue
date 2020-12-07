<template>
    <div class="basket">
        <NavBar/>

        <div class="container basket-box" v-if="basket_list.basket_list.length < 1">
            <h2>The basket is empty</h2>
        </div>

        <div class="container" v-else>
            <table class="highlight responsive-table">
                <thead>
                <tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th>Company name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="i in basket_list.basket_list" :key="i.id">
                    <td>{{i.product_name}}</td>
                    <td v-if="!i.discount_price">{{i.price}}&nbsp;AMD</td>
                    <td v-else>{{i.discount_price}}&nbsp;AMD</td>
                    <td class="quantity-field">
                        <button class="quantity-btn" @click="i.quantity <= 1 ? 1 : i.quantity--">
                            <i class="material-icons">remove_circle_outline</i>
                        </button>
                        <input type="number" class="input-quantity" min="1" max="99" step="1" :value="i.quantity"
                               disabled>
                        <button class="quantity-btn" @click="i.quantity++">
                            <i class="material-icons">add_circle_outline</i>
                        </button>
                    </td>
                    <td v-if="!i.discount_price">{{Number(i.price)*Number(i.quantity)}}&nbsp;AMD</td>
                    <td v-else>{{Number(i.discount_price)*Number(i.quantity)}}&nbsp;AMD</td>
                    <td>{{i.company_name}}</td>
                    <td><i class="material-icons" @click="DELETE_FROM_BASKET(i.id)">delete</i></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="container" v-if="basket_list.basket_list.length > 0">
            <div class="row">
                <div class="calculate">
                    <table class="striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total&nbsp;AMD</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="i in basket_list.basket_list" :key="i.id">
                            <td>{{i.product_name}}</td>
                            <td>x&nbsp;{{i.quantity}}</td>
                            <td v-if="!i.discount_price">{{Number(i.price)*Number(i.quantity)}}&nbsp;AMD</td>
                            <td v-else>{{Number(i.discount_price)*Number(i.quantity)}}&nbsp;AMD</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="right-align">Total:&nbsp;<b>{{total_price}} AMD</b></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <button class="buy_btn" @click="BUY(basket_list.basket_list)">Buy</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import {mapState, mapActions} from 'vuex'
    import keys from "../keys";
    import axios from 'axios'
    import Swal from "sweetalert2";

    export default {
        data() {
            return {
                basket_items: []
            }
        },
        components: {
            NavBar,
            Footer
        },
        methods: {
            ...mapActions(['DELETE_FROM_BASKET', 'GET_BASKET_LIST_ITEMS', 'DELETE_ALL_ITEMS_FROM_BASKET']),
            BUY(basket_items) {
                // console.log(basket_items)
                let token = localStorage.getItem(keys.API_TOKEN);
                axios.post(`${keys.baseURI}/api/order`, {basket_items}, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                    .then(() => {
                        this.$router.push('/profile/orders');
                        this.DELETE_ALL_ITEMS_FROM_BASKET()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The order was made successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch(e => {
                        console.log(e)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            // footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
            }
        },
        computed: {
            ...mapState(['basket_list']),
            total_price() {
                if (this.basket_list.basket_list.length > 0) {
                    let arr = [];
                    this.basket_list.basket_list.forEach(i => {
                        if (i.discount_price) {
                            arr.push(Number(i.discount_price) * Number(i.quantity))
                        } else {
                            arr.push(Number(i.price) * Number(i.quantity))
                        }
                    });
                    return arr.reduce(function (a, b) {
                        return a + b
                    })
                }
                return true
            }
        },
        async created() {
            if (JSON.parse(localStorage.getItem(keys.basket))) {
                await JSON.parse(localStorage.getItem(keys.basket)).forEach(i => {
                    this.basket_items.push(i)
                });
                await this.GET_BASKET_LIST_ITEMS(this.basket_items)
            }

        }
    }
</script>

<style scoped>

    .container {
        margin-top: 50px;

    }

    .calculate {
        width: 300px;
        float: right;
    }

    i {
        color: #6ba229;
        cursor: pointer;
    }

    .buy_btn {
        width: 100%;
        height: 35px;
        background: #6ba229;
        color: #fff;
        border: 1px solid #6ba229;
        cursor: pointer;
        border-radius: 3px;
    }

    .buy_btn:hover {
        background-color: #fff;
        color: #6ba229;
        transition: 0.5s;
    }

    .quantity-field {
        display: flex;
    }

    .input-quantity {
        border: none !important;
        text-align: center;
        width: 40% !important;
    }

    .quantity-btn {
        border: none;
        background: transparent;
    }

    .basket-box {
        border: 1px solid #ccc;
        padding: 50px 25px;
        text-align: center;
        margin: 50px auto;
    }

    .basket-box h2 {
        color: #000;
        font-size: 35px;
        font-weight: 500;
        font-style: italic;
        letter-spacing: 1px;
    }
</style>