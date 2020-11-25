<template>
    <div class="category container">
        <div class="row">
            <div class="col s12 m12 l12 search_box input-field">
                <label for="search">Search</label>
                <input type="text" id="search" v-model="searched_name" :disabledButton="disabledButton">
                <!--                <button class="search_btn">Search</button>-->
                <a class="waves-effect waves-light btn modal-trigger search_btn" href="#searchingType"
                   :disabled="disabled">Search</a>
            </div>
        </div>
        <div id="searchingType" class="modal">
            <div class="modal-content">
                <h4>Search by`</h4>
                <p>
                    <label>
                        <input name="selected_type" type="radio" @click="search_type = 'product'" checked/>
                        <span>Product</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="selected_type" type="radio" @click="search_type = 'company'"/>
                        <span>Company</span>
                    </label>
                </p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn search_by_type"
                   @click="$SEARCH_BY_COMPANY_OR_PRODUCT({data: {search_type, searched_name, filtered_type: 'search'}})">
                    Search
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                searched_name: '',
                search_type: 'product',
                disabled: true
            }
        },
        methods: {
            ...mapActions(['$SEARCH_BY_COMPANY_OR_PRODUCT'])
        },
        computed: {
            ...mapState(['search_by_type']),
            disabledButton() {
                let t = this;
                if(this.searched_name.length === 0) {
                    return t.disabled = true
                }else {
                    return  t.disabled = false
                }
            }
        },
        created() {

            // console.log(this.search_by_type)
        }
    }
</script>


<style scoped>
    .category {
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .search_btn {
        background-color: #6ba229;
        border: none;
        color: #fff;
        cursor: pointer;
        width: 130px;
        height: 100%;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search_btn:hover {
        background-color: #6dad29;
        transition: 0.4s;
    }

    .search_box {
        display: flex;
        height: 50px;
    }

    #search {
        height: 100%;
    }

    .modal {
        width: 30% !important;
    }


    [type="radio"]:checked + span:after, [type="radio"].with-gap:checked + span:after {
        background-color: #6ba229 !important;
    }

    [type="radio"]:checked + span:after, [type="radio"].with-gap:checked + span:before, [type="radio"].with-gap:checked + span:after {
        border: 2px solid #6ba229 !important;
    }

    .search_by_type {
        background-color: #6ba229;
        border: 1px solid #6ba229;
        color: #fff;
    }

    .search_by_type:hover {
        background-color: #fff;
        color: #6ba229;
        transition: 0.5s;
    }
</style>