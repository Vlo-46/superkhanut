<template>
    <div class="profile-page">
        <NavBar/>
        <div class="row container">
            <div class="col s12" v-if="profile.user.type === 'COMPANY'">
                <Profile :type="profile.user.type"
                         :company_name="profile.user['store'].name"
                />
            </div>
            <div class="col s12" v-if="profile.user.type === 'USER'">
                <Profile :type="profile.user.type"
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
        <!--        <ul v-if="profile.user.type === 'COMPANY'" style="display: flex;flex-direction: column;align-items: center;">-->
        <!--            <li><b>ID:</b>&nbsp;{{profile.user.id}}</li>-->
        <!--            <li><b>USERNAME:</b>&nbsp;{{profile.user.name}}</li>-->
        <!--            <li><b>SURNAME:</b>&nbsp;{{profile.user.surname}}</li>-->
        <!--            <li><b>EMAIL:</b>&nbsp;{{profile.user.email}}</li>-->
        <!--            <li><b>CREATED AT:</b>&nbsp;{{profile.user.created_at}}</li>-->
        <!--            <li><b>COMPANY ID:</b>&nbsp;{{profile.user['store'].id}}</li>-->
        <!--            <li><b>COMPANY NAME:</b>&nbsp;{{profile.user['store'].name}}</li>-->
        <!--            <li>-->
        <!--                <b>COMPANY LOGO:</b>&nbsp;<br>-->
        <!--                <img :src="profile.user['store'].logo_uri" alt="" style="width: 150px;height: 150px;">-->
        <!--            </li>-->
        <!--            <li><b>COMPANY DESCRIPTION:</b>&nbsp;{{profile.user['store'].description}}</li>-->
        <!--            <li><b>COMPANY CREATED AT:</b>&nbsp;{{profile.user['store'].created_at}}</li>-->
        <!--        </ul>-->
        <!--        <ul v-else style="display: flex;flex-direction: column;align-items: center;">-->
        <!--            <li><b>ID:</b>&nbsp;{{profile.user.id}}</li>-->
        <!--            <li><b>USERNAME:</b>&nbsp;{{profile.user.name}}</li>-->
        <!--            <li><b>SURNAME:</b>&nbsp;{{profile.user.surname}}</li>-->
        <!--            <li><b>EMAIL:</b>&nbsp;{{profile.user.email}}</li>-->
        <!--            <li><b>CREATED AT:</b>&nbsp;{{profile.user.created_at}}</li>-->
        <!--        </ul>-->
        <Footer/>
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
    import axios from 'axios';

    export default {
        data() {
            return {
                orders: []
            }
        },
        components: {
            NavBar,
            Footer,
            Profile,
            MyOrders,
            Settings,
            'profile-content': ProfileContent
        },
        methods: {
            ...mapActions(['GET_USER'])
        },
        created() {
            const token = localStorage.getItem(keys.API_TOKEN);
            this.GET_USER(token);
            axios.get(`${keys.baseURI}/api/order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                // console.log(res.data);
                this.orders = res.data
            }).catch(e => console.log(e))
        },
        computed: {
            ...mapState(['profile'])
        }
    }
</script>