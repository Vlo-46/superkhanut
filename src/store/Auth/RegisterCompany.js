import axios from 'axios'
import keys from '../../keys'
import router from '../../router/index'
import Swal from 'sweetalert2'

export default {
    state: {
        user: {}
    },
    mutations: {
        GET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        REGISTER_COMPANY(ctx, register) {
            // console.log(JSON.stringify(register))
            let url = keys.baseURI;
            axios.post(`${url}/api/auth/register`, {register})
                .then(res => {
                    let API_TOKEN = keys.API_TOKEN;
                    let token = res.data.access_token;
                    axios.post(`${url}/api/auth/me`, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                        .then(response => {
                            ctx.commit('GET_USER', response.data.user)
                        })
                        .catch(e => {
                            console.log(e)
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Please enter the correct information',
                                // footer: '<a href="/registration">You may not have registered?</a>'
                            })
                        });
                    localStorage.setItem(API_TOKEN, token);
                    router.push('/confirmations-account')
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please enter the correct information',
                        // footer: '<a href="/registration">You may not have registered?</a>'
                    });
                })
        }
    },
    getters: {}
}