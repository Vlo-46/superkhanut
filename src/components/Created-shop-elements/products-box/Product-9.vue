<template>
    <div class="card">
        <div class="card-image">
            <img :src="file">
            <span class="card-title" :style="name">{{product_name}}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" @click.prevent="ADD_TO_FAVORITE"><i
                    class="material-icons">favorite</i></a>
        </div>
        <div class="card-content">
            <p v-if="description">{{description.substr(0, 70)}}...</p>
        </div>
    </div>
</template>

<script>
    import keys from "../../../keys";

    export default {
        name: 'product-9',
        props: ['name', 'price', 'category', 'button', 'icon', 'id', 'file', 'product_name', 'product_price', 'discount_price', 'product_category', 'tag', 'description', 'top', 'best', 'company_name'],
        methods: {
            ADD_TO_FAVORITE() {
                let favorite_list = keys.favorite;

                let favorite_item = {
                    company_name: this.company_name,
                    id: this.id,
                    file: this.file,
                    product_name: this.product_name,
                    product_price: this.product_price,
                    discount_price: this.discount_price,
                    product_category: this.product_category,
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
    .card {
        height: 370px;
        max-height: 370px;
        margin: 0;
    }
</style>

<!--.substr(0, 79)-->