import axios from 'axios'
import keys from '../../keys'

export default {
    state: {
        user: {}
    },
    mutations: {
        GET_USER_INFO(state, user) {
            state.user = user
        }
    },
    actions: {
        GET_USER(ctx, token) {
            const url = keys.baseURI;
            axios.post(`${url}/api/auth/me`, {}, {
                headers: {
                    'Authorization': `bearer ${token}`
                }
            })
                .then(res => {
                    const user = res.data.user;
                    ctx.commit('GET_USER_INFO', user)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}