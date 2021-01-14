<template>
    <div class="slider-field">
        <h5>Slider նկար</h5>
        <template v-if="disabled">
            <div class="product-box-img">
                <template v-for="img in slider">
                    <div class="img-box" :key="img">
                        <img :src="img" alt="" class="product-img responsive-img">
                        <i class="material-icons delete_icon" @click="DELETE_SLIDER(img)">delete_forever</i>
                    </div>
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
                </div>
            </div>
        </template>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="SLIDER(files), disabled = true">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

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
            ...mapActions(['SLIDER', 'DELETE_SLIDER'])
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

    .img-box {
        position: relative;
        margin: 3px;
    }
    .img-box img {
        border-radius: 30px;
    }
    .delete_icon {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
        color: red;
        font-size: 30px;
    }
</style>