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
                <td class="status"><span class="title">Status:</span>&nbsp;<span>OK</span></td>
                <td class="status"><span class="title">Wait, order in progress:&nbsp;<span><i
                        class="material-icons cached">cached</i></span></span></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['orders'],
        // beforeMount() {
        //     console.log(this.$route.query)
        // }
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