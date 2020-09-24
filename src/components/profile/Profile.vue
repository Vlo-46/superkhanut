<template>
    <div class="profile">
        <div class="infoBox">
            <div>
                <img src="../../assets/user.png" alt="">
            </div>
            <div>
                <p class="username">Username</p>
                <p class="info">Country, Created at</p>
                <p v-if="type === 'COMPANY'"><router-link :to="`${company_name}/admin`">Admin page</router-link></p>
                <p v-if="type === 'COMPANY'"><router-link :to="`/${company_name}/home`">Website</router-link></p>
            </div>
        </div>
        <tabs/>
    </div>
</template>

<script>
    import tabs from './Tabs'

    export default {
        props: ['type', 'company_name'],
        components: {
            tabs
        }
    }

</script>

<style scoped>
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .infoBox {
        display: flex;
        align-items: center;
    }

    .profile {
        margin-top: 50px;
    }

    .profile div {
        margin-left: 20px;
    }

    .username {
        font-size: 24px;
        font-weight: bold;
        line-height: 0px;
    }

    .info {
        color: #666666;
        font-size: 14px;
    }
</style>