<template>
    <div class="tab">
        <ul class="row" style="border-bottom: 1px solid #e1e8ed;">
            <li v-for="tab in tabs"
                :key="tab.id" class="col s1"
                :style="tab.active ? active: disabled">
                <a :href="tab.path">{{tab.name}}</a>
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
                    {id: 2, name: 'Settings', path: "/profile/profile-edit", active: false},
                    {id: 3, name: 'My Orders', path: "/profile/orders", active: false}
                ],
                active: {
                    borderTop: '1px solid #e1e8ed',
                    borderRight: "1px solid #e1e8ed",
                    borderLeft: "1px solid #e1e8ed",
                    backgroundColor: '#fff'
                },
                disabled: {}
            }
        },
        mounted() {
            this.tabs.filter(i => {
                if (this.$route.path === i.path) {
                    i.active = true
                }
            })
        },
    }
</script>

<style scoped>
    .tab {
        margin-top: 50px;
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