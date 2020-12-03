<template>
    <div class="profile">
        <div class="infoBox">
            <div v-if="type === 'USER'">
                <img v-if="!user.avatar" src="../../assets/user.png" alt="">
                <img v-else :src="user.avatar" alt="">
            </div>
            <div v-else>
                <img v-if="!user['store'].logo_uri" src="../../assets/user.png" alt="">
                <img v-else :src="user['store'].logo_uri" alt="">
            </div>
            <div v-if="type === 'USER'">
                <p class="username">{{user.name}}&nbsp;{{user.surname}}</p>
                <p class="info"><span v-if="user.address">{{user.address}},</span>{{user.created_at}}</p>
            </div>
            <div v-else>
                <p>{{company_name}}</p>
                <p class="info"><span v-if="user.address">{{user.address}}</span>, {{user.created_at}}</p>
                <p v-if="type === 'COMPANY'"><router-link :to="`/${company_name}/admin`">Admin page</router-link></p>
                <p v-if="type === 'COMPANY'"><router-link :to="`/${company_name}/home`">Website</router-link></p>
            </div>
        </div>
        <tabs v-if="type === 'USER'"/>
    </div>
</template>

<script>
    import tabs from './Tabs'

    export default {
        props: ['type', 'company_name', 'user'],
        components: {
            tabs
        },
        computed: {
            company() {
                return this.user
            }
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