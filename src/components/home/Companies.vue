<template>
    <div class="col s12 m6 l4">
        <div class="company-item">
            <div class="imgBox">
                <a href="" style="width: 100%;"><img src="../../assets/no-img.jpg" alt=""></a>
                <a onclick="M.toast({html: 'Company added to the favorites list'})" class="favorite"
                   style="display: none"><i class="material-icons">favorite</i></a>
            </div>
            <div class="company-body row">
                <div class="col s12 m6 l6" style="align-self: flex-end;">
                    <div><p><a href="" class="comp_name">{{company_name}}</a></p></div>
                    <div><span class="sales"><i
                            class="material-icons">shopping_basket</i><small>Sales {{sales}}</small></span></div>
                    <div><span class="sales"><i
                            class="material-icons">visibility</i><small>Views {{views}}</small></span>
                    </div>
                </div>
                <div class="col s12 m6 l6 previewBox">
                    <button class="preview">Preview</button>
                </div>
            </div>
            <!--                    rate component-->
            <rate :length="5" :value="0" :showcount="false" />
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import rate from 'vue-rate'
    import 'vue-rate/dist/vue-rate.css'
    Vue.use(rate);

    export default {
        props: ['rate', 'company_name', 'views', 'sales', 'id'],
        components: {
        },
    }
</script>

<style scoped>
    .company-item {
        height: 330px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: #ccc 0 0 16px;
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
    }

    .favorite i {
        font-size: 26px;
        color: #ccc;
        cursor: pointer;
    }


    .company-item:hover .favorite {
        display: block !important;
    }

    .sales i {
        font-size: 17px;
        padding-right: 6px;
    }


    @media (min-width: 576px) {

    }

</style>