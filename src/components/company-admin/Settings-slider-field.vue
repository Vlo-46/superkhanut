<template>
    <div class="slider-field">
        <h5>Slider նկար/տեքստ</h5>
        <template v-if="disabled">
            <div class="product-box-img">
                <template v-for="img in slider.slider_img">
                    <img :src="img" alt="" class="product-img responsive-img" :key="img">
                </template>
            </div>
        </template>
        <template v-else>
            <div class="file-field input-field">
                <div class="btn">
                    <span>Նկար</span>
                    <input type="file" @change="onSelect" multiple>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Ներբեռնեք մեկ կամ ավելի նկարներ">
                </div>
            </div>
            <!--            <output id="result"/>-->
            <div class="show-img-box">
                <div v-for="image in images" :key="image.name" class="preview-box">
                    <img class="preview" :ref="'image'"/>
                    <!--                    <div class="delete">-->
                    <!--                        <button class="waves-effect waves-light"><i class="material-icons">delete</i></button>-->
                    <!--                    </div>-->
                </div>
            </div>
        </template>
        <div class="col s12">
            <input id="slider-text"
                   :disabled="disabled"
                   v-model="slider.slider_text"
            />
            <label for="slider-text">Տեքստ</label>
        </div>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="SLIDER">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'

    export default {
        props: ['slider'],
        data() {
            return {
                disabled: true,
                images: [],
                text: '',
                files: []
            }
        },
        methods: {
            onSelect(e) {
                let selectedFiles = e.target.files;
                for (let i = 0; i < selectedFiles.length; i++) {
                    this.images.push(selectedFiles[i]);
                }

                for (let i = 0; i < this.images.length; i++) {
                    let reader = new FileReader();
                    reader.onload = () => {
                        this.$refs.image[i].src = reader.result;
                        this.files.push(this.$refs.image[i].src)
                    };

                    reader.readAsDataURL(this.images[i]);
                }
            },
            SLIDER() {
                let url = keys.baseURI;
                let token = localStorage.getItem(keys.API_TOKEN);

                let files = this.files;

                let slider_field = {
                    slider_img: files,
                    slider_text: this.slider.slider_text
                };

                axios.patch(`${url}/api/store`, {slider_field}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(res => {
                        this.disabled = true;
                        console.log(res.data)
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>


<style scoped>
    .slider-field {
        margin-top: 50px;
    }

    .show-img-box {
        display: flex;
        flex-wrap: wrap;
    }

    .preview {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    .preview-box {
        position: relative;
        margin: 5px;
    }

    .product-box-img {
        display: flex;
        flex-wrap: wrap;
    }

    .product-img {
        width: 200px;
        height: 200px;
    }

    .delete {
        position: absolute;
        top: 0;
        right: 0;
        margin: 2px;
    }

    .delete button {
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }

    .delete button i {
        color: #fff;
        padding: 2px;
    }
</style>