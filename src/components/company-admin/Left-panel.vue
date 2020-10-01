<template>
    <div class="col s12 m2 l2 left-panel">
        <ul>
            <li>
                <router-link :to="`/${company_name}/home`">{{company_name}}&nbsp; Վեբկայք</router-link>
            </li>
            <li>
                <router-link :to="`/${company_name}/admin`">{{company_name}}&nbsp; Ադմին պանել</router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link :to="`/${company_name}/admin/products`">
                    <i class="material-icons">arrow_forward</i>&nbsp;<span>Ապրանքներ</span>
                </router-link>
            </li>
            <li>
                <router-link :to="`/${company_name}/admin/orders`">
                    <i class="material-icons">add_shopping_cart</i>&nbsp;<span>Պատվերներ</span>
                </router-link>
            </li>
            <li>
                <router-link :to="`/${company_name}/admin/settings`"><i class="material-icons">build</i>&nbsp;<span>Կարգավորումներ</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                company_name: ''
            }
        },
        created() {
            this.company_name = this.$route.params.pathMatch
        }
    }
</script>

<style scoped>
    .left-panel {
        background-color: #343a40;
        padding: 10px;
        position: fixed;
        height: 100%;
        box-shadow: 0 0 10px;
    }

    ul li {
        margin-bottom: 10px;
    }

    ul li a {
        color: #c2c7d0;
        padding: 5px;
        /*display: block;*/
        display: flex;
        align-items: center;
    }

    ul li a:hover {
        background-color: #ffffff1a;
        color: #fff;
        border-radius: 2px;
    }

    ul li a span {
        padding-left: 5px;
    }
</style>