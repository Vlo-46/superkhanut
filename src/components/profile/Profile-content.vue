<template>
    <div class="profile-content row">
        <div class="col s8">
            <p v-if="favorite_companies_items_computed.length < 1">
                Your preferred companies will be displayed here
            </p>
            <div class="favorite_companies row" v-else>
                <p>Your favorite shops</p>
                <div v-for="company in favorite_companies_items_computed" :key="company.id"
                     class="company_item col s12 m6 l2">
                    <div class="img_box">
                        <router-link :to="`/${company.encoded_name}/home`"><img src="../../assets/no-img.jpg" alt="">
                        </router-link>
                        <span class="delete_favorite_item" @click="DELETE_FAVORITE_COMPANY_ITEM(company.id)"><i
                                class="material-icons">clear</i></span>
                    </div>
                    <div class="body_item">
                        <div>
                            <router-link :to="`/${company.encoded_name}/home`"><p class="title">
                                {{company.company_name}}</p></router-link>
                        </div>
                        <div>
                            <span class="company_icon">
                                <i class="material-icons">shopping_basket</i><small>Sales {{company.sales}}</small>
                            </span>
                        </div>
                        <div>
                            <span class="company_icon">
                                <i class="material-icons">visibility</i><small>Views 100</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s4"></div>
    </div>
</template>

<script>
    import keys from "../../keys";
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                favorite_company_items: []
            }
        },
        methods: {
            ...mapActions(['GET_FAVORITE_COMPANIES_LIST', 'DELETE_FAVORITE_COMPANY_ITEM'])
        },
        computed: {
            ...mapState(['favorite_companies_list']),
            favorite_companies_items_computed() {
                return this.favorite_companies_list.favorite_companies
            }
        },
        created() {
            let favorite_items = JSON.parse(localStorage.getItem(keys.favorite_companies))
            if (favorite_items) {
                favorite_items.forEach(i => {
                    this.favorite_company_items.push(i)
                })
                this.GET_FAVORITE_COMPANIES_LIST(this.favorite_company_items)
            }
        }
    }
</script>

<style scoped>
    .company_item {
        height: 200px;
        width: 100%;
        border: 1px solid #eee;
        padding: 0;
        margin: 10px;
    }

    .img_box {
        height: 50%;
        position: relative;
    }

    .img_box img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .body_item {
        height: 50%;
        padding: 5px;
    }

    .title {
        font-size: 13px;
    }

    .company_icon {
        color: #999;
        display: flex;
        align-items: center;
    }

    .company_icon small {
        padding-left: 5px;
    }

    .company_icon i {
        font-size: 14px;
    }

    .delete_favorite_item {
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px;
        display: none;
        cursor: pointer;
    }

    .delete_favorite_item i {
        color: red;
    }

    .company_item:hover .delete_favorite_item {
        display: block;
    }

    a {
        color: #222;
    }
</style>