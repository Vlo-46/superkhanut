import axios from 'axios'
import keys from '../../keys'
import router from '../../router/index'
import Swal from "sweetalert2";

export default {
    state: {},
    mutations: {},
    actions: {
        REGISTER_USER(ctx, register) {
            let url = keys.baseURI;
            axios.post(`${url}/api/auth/register`, {register})
                .then(res => {
                    let API_TOKEN = keys.API_TOKEN
                    let token = res.data.access_token;
                    localStorage.setItem(API_TOKEN, token);
                    router.push('/profile')
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please enter the correct information',
                        // footer: '<a href="/registration">You may not have registered?</a>'
                    })
                })
        }
    },
    getters: {}
}