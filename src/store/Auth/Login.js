import axios from 'axios'
import keys from '../../keys'
import router from "../../router";


export default {
    state: {},
    mutations: {},
    actions: {
        LOGIN(ctx, user) {
            let url = keys.baseURI;
            let API_TOKEN = keys.API_TOKEN;
            axios.post(`${url}/api/auth/login`, {user},)
                .then(res => {
                    let user_type = res.data.user_type;
                    let token = res.data.access_token;
                    localStorage.setItem(API_TOKEN, token);


                    axios.post(`${url}/api/auth/me`, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                        .then(response => {
                            let user = response.data.user
                            if (user_type === 'COMPANY') {
                                router.push(`/${user['store'].name}/home`)
                            } else {
                                router.push('/profile')
                            }
                        })
                        .catch(e => console.log(e))
                })
                .catch(e => console.log(e))
        },
        LOGOUT() {
            let url = keys.baseURI;
            let API_TOKEN = keys.API_TOKEN;
            let token = localStorage.getItem(API_TOKEN)
            axios.post(`${url}/api/auth/logout`, {}, {
                headers: {
                    'Authorization': `bearer ${token}`
                }
            })
                .then(() => {
                    localStorage.removeItem(API_TOKEN)
                    router.push('/signin')
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}