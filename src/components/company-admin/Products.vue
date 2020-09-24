<template>
    <div class="company-admin-dashboard">
        <div class="dashboard row">
            <left-panel/>
            <div class="col s12 m10 l10">
                <div class="row">
                    <div class="col s12 m9 l9">
                        <h4>Ապրանքների ցուցակ</h4>
                        <router-link :to="`/${company_name}/admin/products/add-product`"
                                     class="waves-effect waves-light btn-small">
                            Ավելացնել նոր ապրանք
                        </router-link>
                    </div>
                    <div class="col s12 m3 l3">
                        <div class="input-field">
                            <label for="search">Փնտրել</label>
                            <input type="text" id="search">
                        </div>
                    </div>
                </div>

                <!--                products table-->

                <table class="responsive-table">
                    <thead>
                    <tr>
                        <th>Նկար</th>
                        <th>Անուն</th>
                        <th>Գին</th>
                        <th>Զեղչված գին</th>
                        <th>Բաժին</th>
                        <th>Բանալի բառեր</th>
                        <th>Նկարագրություն</th>
                        <th>Դիրքը</th>
                        <th>Փոփոխել/Ջնջել</th>
                    </tr>
                    </thead>

                    <tbody>
                    <template v-for="product in company_products.products">
                        <product-item :key="product.id"
                                      :id="product.id"
                                      :file="product.file"
                                      :name="product.product_name"
                                      :price="product.price"
                                      :discount_price="product.discount_price"
                                      :category="product.category"
                                      :tag="product.tag"
                                      :description="product.description"
                                      :top="product.top"
                                      :best="product.best"
                        />
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import left_panel from './Left-panel'
    import product_item from './Product-item'

    import {mapActions, mapState} from 'vuex'


    export default {
        data() {
            return {
                edit: false,
                product_item: {},
                company_name: this.$route.params.pathMatch,
            }
        },
        components: {
            'left-panel': left_panel,
            'product-item': product_item,
        },
        methods: {
            ...mapActions(['GET_COMPANY_PRODUCTS']),
        },
        computed: {
            ...mapState(['company_products'])
        },
        async created() {
            let company_name = this.$route.params.pathMatch;
            await this.GET_COMPANY_PRODUCTS(company_name);

            // console.log(this.company_products.products)
        }
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
    }
</style>