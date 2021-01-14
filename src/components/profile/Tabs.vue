<template>
    <div class="tab">
        <ul class="row" style="border-bottom: 1px solid #e1e8ed;">
            <li v-for="tab in tabs_computed"
                :key="tab.id" class="col s4 m3 l2"
                :style="tab.active ? active : disabled">
                <router-link :to="tab.path">{{tab.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs: [
                    {id: 1, name: 'Profile', path: "/profile", active: false},
                    {id: 2, name: 'Settings', path: "/profile/settings", active: false},
                    {id: 3, name: 'My Orders', path: "/profile/orders", active: false}
                ],
                active: {
                    borderTop: '1px solid #e1e8ed',
                    borderRight: "1px solid #e1e8ed",
                    borderLeft: "1px solid #e1e8ed",
                    backgroundColor: '#fff'
                },
                disabled: {
                    color: '#666',
                    backgroundColor: 'none'
                }
            }
        },
        computed: {
            tabs_computed() {
                this.tabs.filter(i => {
                    if (this.$route.path === i.path) {
                        i.active = true
                    }
                })
                return this.tabs
            }
        },
        // mounted() {
        //     this.tabs.filter(i => {
        //         if (this.$route.path === i.path) {
        //             i.active = true
        //         }
        //     })
        // },
    }
</script>

<style scoped>
    .tab {
        margin-top: 100px;
    }

    li {
        text-align: center;
    }

    a {
        font-size: 14px;
        color: #666;
    }

    li:hover {
        background-color: #e0e0e0;
    }
</style>