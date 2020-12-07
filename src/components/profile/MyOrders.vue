<template>
    <div class="orders">
        <table class="highlight" v-for="order in orders" :key="order.id">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order_item in order.order_items" :key="order_item.id">
                <td>{{order_item.product_name}}</td>
                <td>{{order_item.category}}</td>
                <td>{{order_item.price}}&nbsp;AMD</td>
                <td>{{order_item.quantity}}</td>
                <td>{{Number(order_item.price)*Number(order_item.quantity)}}&nbsp;AMD</td>
            </tr>
            <tr>
                <td class="date"><span class="title">Date:</span>&nbsp;<span>{{order.created_at}}</span></td>
                <td/>
                <td class="total"><span class="title">Total:</span>&nbsp;<span>{{order.total}}</span>&nbsp;AMD</td>
                <td/>
                <td class="status" v-if="order.status === 'pending'">
                    <span class="title">Status:</span>&nbsp;
                    <span>Wait, order in progress:&nbsp;<span><i class="material-icons cached">cached</i></span></span>
                </td>
                <td class="status" v-if="order.status === 'canceled'">
                    <span class="title">Status:</span>&nbsp;
                    <span>Your order was rejected:&nbsp;<span><i class="material-icons cached">cancel</i></span></span>
                </td>
                <td class="status" v-if="order.status === 'accepted'">
                    <span class="title">Status:</span>&nbsp;
                    <span>Your order is approved:&nbsp;<span><i class="material-icons cached">check</i></span></span>
                </td>
                <td class="status" v-if="order.status === 'completed'">
                    <span class="title">Status:</span>&nbsp;
                    <span>Your order was completed:&nbsp;<span><i
                            class="material-icons cached">done_all</i></span></span>
                </td>
                <td class="status" v-if="order.status === 'pending'">
                    <button class="btn red" @click="USER_ORDER_STATUS({orderId: order.id, status: 'canceled'})">Cancel
                        order
                    </button>
                </td>
                <!--                <td class="status"><span class="title"></span></td>-->
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['orders'],
        methods: {
            ...mapActions(['COMPANY_ORDER_STATUS', 'USER_ORDER_STATUS']),
        },
        created() {
            console.log(this.orders)
        }
    }
</script>

<style scoped>
    table {
        margin-bottom: 50px;
    }

    .title {
        color: #000 !important;
        font-weight: bold;
    }

    .total, .status, .date span {
        color: #6ba229;
    }

    .order_id {
        color: #6ba229;
    }

    .cached {
        color: red;
        font-size: 19px;
    }

</style>