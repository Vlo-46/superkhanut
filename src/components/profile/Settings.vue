<template>
    <div class="row">
        <div class="col s4">
            <ul>
                <h5>Your details</h5>
                <li v-for="link in links" :key="link.id">
                    <router-link exact :to="link.path">{{link.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="col s8"></div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                links: [
                    {id: 1, path: '/personal-info', active: false, name: 'Personal information'},
                    {id: 2, path: '/profile-edit', active: true, name: 'Profile'},
                    {id: 3, path: '/social-networks-edit', active: false, name: 'Social networks'},
                ],
                styles: {
                    color: '#6ba229',
                    fontWeight: 'bold'
                }
            }
        }
    }
</script>

<style scoped>


    h5 {
        padding-bottom: 10px;
    }

    ul li a {
        color: #666;
        padding: 5px;
        display: block;
    }

    ul li a:hover {
        color: #262626;
        background: #ededed;
        border-left: 3px solid #6ba229;
    }

    ul {
        background-color: #f5f5f5;
        padding: 20px;
        border: 1px solid #e1e8ed;
    }

</style>