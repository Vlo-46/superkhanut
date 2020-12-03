<template>
    <div class="company-item">
        <div class="imgBox">
            <a :href="`/${encoded_name}/home`" style="width: 100%;"><img src="../../assets/no-img.jpg" alt=""></a>
            <!--            <a onclick="M.toast({html: 'Company added to the favorites list'})" class="favorite"-->
            <!--               style="display: none"><i class="material-icons">favorite</i></a>-->

            <i class="material-icons favorite" @click="ADD_TO_FAVORITE" style="display: none">favorite</i>

        </div>
        <div class="company-body row">
            <div class="col s12 m6 l6" style="align-self: flex-end;">
                <div><p><a :href="`/${encoded_name}/home`" class="comp_name">{{company_name}}</a></p></div>
                <div>
                    <span class="sales">
                        <i class="material-icons">shopping_basket</i><small>Sales {{sales}}</small>
                    </span>
                </div>
                <div>
                    <span class="sales">
                        <i class="material-icons">visibility</i><small>Views 100</small>
                    </span>
                </div>
            </div>
            <div class="col s12 m6 l6 previewBox">
                <router-link :to="`/${encoded_name}/home`" class="preview">Preview</router-link>
            </div>
        </div>
        <!--                    rate component-->
        <rate :length="5" :value="0" :showcount="false"/>
    </div>
</template>


<script>
    import Vue from 'vue'
    import rate from 'vue-rate'
    import 'vue-rate/dist/vue-rate.css'
    import keys from "../../keys";

    Vue.use(rate);

    export default {
        props: ['company_name', 'sales', 'id', 'uri', 'encoded_name', 'logo'],
        components: {},
        methods: {
            ADD_TO_FAVORITE() {
                let favorite_list = keys.favorite_companies;

                let favorite_item = {
                    company_name: this.company_name,
                    id: this.id,
                    // file: this.uri,
                    logo: this.logo,
                    encoded_name: this.encoded_name,
                    sales: this.sales
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
            }
        }
    }
</script>

<style scoped>
    .company-item {
        height: 330px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: #c1c1c1 0 0 16px;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .imgBox {
        height: 50%;
        margin-bottom: 10px;
        display: flex;
        position: relative;
    }

    .comp_name {
        color: #4d4d4d;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        top: 0;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5px 5px 0 0;
    }

    .company-body {
        display: flex;
        height: 50%;
        padding: 7px 12px;
        position: relative;
    }

    .preview {
        color: #666;
        border: 1px solid #ccc;
        background-color: #fafafa;
        padding: 7px 16px;
        cursor: pointer;
        border-radius: 2px;
        float: right;
    }

    .preview:hover {
        background-color: #ccc;
        color: #fff;
    }

    .previewBox {
        align-self: flex-end;
    }

    .sales {
        color: #999;
        display: flex;
        padding-top: 3px;
    }

    .favorite {
        align-self: flex-end;
        position: absolute;
        right: 10px;
        font-size: 26px;
        color: #aaa;
        cursor: pointer;
    }

    .company-item:hover .favorite {
        display: block !important;
    }

    .sales i {
        font-size: 17px;
        padding-right: 6px;
    }


</style>