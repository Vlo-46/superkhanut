<template>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <router-link :to="`/${company_name}/detail/${id}`">
                <img class="activator" :src="file" style="width: 100%; height: 200px; max-height: 200px">
            </router-link>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{product_name}}
                <i class="material-icons right" :style="icon">more_vert</i>
            </span>
            <p>
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="view-more"
                             :style="`color: ${button.color}`">View more
                </router-link>
            </p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4" :style="category">{{product_category}}<i
                    class="material-icons right" :style="icon">close</i></span>
            <p v-if="description">{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product-8',
        props: ['name', 'price', 'category', 'button', 'icon', 'id', 'file', 'product_name', 'product_price', 'discount_price', 'product_category', 'tag', 'description', 'top', 'best', 'company_name'],
    }
</script>

<style scoped>
    .card {
        height: 370px;
        max-height: 370px;
        margin: 0;
        margin-bottom: 20px;
    }
</style>