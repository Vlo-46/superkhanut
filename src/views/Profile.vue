<template>
    <div class="profile-page">
        <NavBar :website_logo="website_logo"/>
        <div class="row container">
            <div class="col s12" v-if="profile.user.type === 'COMPANY'">
                <Profile :type="profile.user.type"
                         :company_name="profile.user['store'].name"
                         :user="profile.user"
                />
            </div>
            <div class="col s12" v-if="profile.user.type === 'USER'">
                <Profile :type="profile.user.type"
                         :user="profile.user"
                />
            </div>
        </div>
        <div class="row content container" v-if="profile.user.type === 'USER'">
            <MyOrders v-if="this.$route.path === '/profile/orders'"
                      :orders="orders"
            />
            <Settings v-else-if="this.$route.path === '/profile/settings'"/>
            <profile-content v-else/>
        </div>
        <Footer :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar';
    import Footer from '../components/Footer';
    import Profile from '../components/profile/Profile';
    import MyOrders from '../components/profile/MyOrders';
    import Settings from '../components/profile/Settings';
    import ProfileContent from '../components/profile/Profile-content';

    import {mapActions, mapState} from 'vuex';
    import keys from '../keys';

    export default {
        components: {
            NavBar,
            Footer,
            Profile,
            MyOrders,
            Settings,
            'profile-content': ProfileContent
        },
        methods: {
            ...mapActions(['GET_USER', 'GET_USER_ORDERS', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['profile', 'settings']),
            orders() {
                return this.profile.orders
            },
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            }
        },
        created() {
            const token = localStorage.getItem(keys.API_TOKEN);
            if (token) {
                this.GET_USER(token);
                this.GET_USER_ORDERS(token)
            } else {
                // this.$router.push('/')
                window.location.href = '/'
            }
            this.GET_SETTINGS()
        },
    }
</script>