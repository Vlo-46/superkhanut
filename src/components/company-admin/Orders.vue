<template>
    <div class="company-admin-dashboard">
        <div class="dashboard row">
            <left_panel/>
            <div class="col s12 m10 l10">
                <div class="orders">
                    <h1>Orders</h1>
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
        created() {
            const token = localStorage.getItem(keys.API_TOKEN);
            axios.get(`${keys.baseURI}/api/order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                console.log(res.data);
                this.orders = res.data
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
</style>