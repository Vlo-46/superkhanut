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
                            </span>
                            </td>
                            <td/>
                            <td class="total"><span class="title">Total:</span>&nbsp;<span>{{item.price}}</span>&nbsp;AMD
                            </td>
                            <td class="status" v-if="item.status === 'pending'"><span class="title">Status:</span>&nbsp;
                                <span>Pending &nbsp; <i class="material-icons cached">cached</i></span>
                            </td>
                            <td class="status" v-if="item.status === 'canceled'"><span class="title">Status:</span>&nbsp;
                                <span>Canceled &nbsp; <i class="material-icons cached">canceled</i></span>
                            </td>
                            <td class="status" v-if="item.status === 'accepted'"><span class="title">Status:</span>&nbsp;
                                <span>Accepted &nbsp; <i class="material-icons cached">check</i></span>
                            </td>
                            <td class="status" v-if="item.status === 'completed'"><span class="title">Status:</span>&nbsp;
                                <span>Completed &nbsp; <i class="material-icons cached">done_all</i></span>
                            </td>
                            <td v-if="item.status === 'pending'">
                                <button class="btn red"
                                        @click="COMPANY_ORDER_STATUS({orderId: item.order_id, status: 'canceled'})">
                                    Cancel order
                                </button>
                                <button class="btn" style="float: right"
                                        @click="COMPANY_ORDER_STATUS({orderId: item.order_id, status: 'accepted'})">
                                    Confirm order
                                </button>
                            </td>
                            <td v-else-if="item.status === 'accepted'">
                                <button class="btn" style="float: right"
                                        @click="COMPANY_ORDER_STATUS({orderId: item.order_id, status: 'completed'})">
                                    Order ended
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import left_panel from './Left-panel'
    import {mapActions, mapState} from 'vuex'

    export default {
        components: {
            left_panel
        },
        computed: {
            ...mapState(['company_admin_orders']),
            orders() {
                return this.company_admin_orders.orders
            }
        },
        methods: {
            ...mapActions(['GET_COMPANY_ORDERS', 'COMPANY_ORDER_STATUS']),
        },
        created() {
            this.GET_COMPANY_ORDERS()
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

    .cached {
        color: red;
        font-size: 19px;
    }


</style>