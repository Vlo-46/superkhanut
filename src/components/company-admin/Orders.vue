<template>
    <div class="company-admin-dashboard">
        <div class="dashboard row">
            <left_panel/>
            <div class="col s12 m10 l10">
                <div class="orders">
                    <table class="highlight" v-for="item in orders" :key="item.order_id">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>NAME</th>
                            <th>SURNAME</th>
                            <th>EMAIL</th>
                            <th>Products</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="item_information_row">
                            <td>{{item.order_id}}</td>
                            <td>{{item.user.name}}</td>
                            <td>{{item.user.surname}}</td>
                            <td>{{item.user.email}}</td>
                            <td>
                                <table style="margin-bottom: 0;" class="striped">
                                    <thead>
                                    <tr>
                                        <th>Product name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="i in item.items" :key="i.id">
                                        <td>{{i.product_name}}</td>
                                        <td>x&nbsp;{{i.quantity}}</td>
                                        <td v-if="!i.discount_price">{{Number(i.price)* Number(i.quantity)}}&nbsp;AMD
                                        </td>
                                        <td v-else>{{Number(i.discount_price)* Number(i.quantity)}}&nbsp; AMD</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="date"><span class="title">Date:</span>&nbsp;<span>
                                {{item.created_at}}
                            </span></td>
                            <td/>
                            <td class="total"><span class="title">Total:</span>&nbsp;<span>{{item.price}}</span>&nbsp;AMD
                            </td>
                            <td class="status"><span class="title">Status:</span>&nbsp;<span>OK</span></td>
                            <td><button class="btn" style="float: right">Confirm order</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import keys from "../../keys";
    import left_panel from './Left-panel'

    export default {
        data() {
            return {
                orders: [],
            }
        },
        components: {
            left_panel
        },
        computed: {},
        created() {
            const token = localStorage.getItem(keys.API_TOKEN);
            axios.get(`${keys.baseURI}/api/order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                console.log(res.data);
                this.orders = res.data;
            }).catch(e => console.log(e))
        }
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
    }

    .product_img {
        width: 180px;
        height: 180px;
    }

    .orders {
        margin: 50px 30px;
    }

    .title {
        color: #000 !important;
        font-weight: bold;
    }

    .total, .status, .date span {
        color: #6ba229;
    }

    table {
        margin-bottom: 80px;
    }

    .item_information_row:nth-last-child {
        display: flex;
    }


</style>