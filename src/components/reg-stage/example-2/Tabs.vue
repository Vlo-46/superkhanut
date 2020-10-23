<template>
    <div class="best-sales container" id="product-component">
        <div class="tab-list">
            <button class="btn" v-for="tab in tab_components"
                    :key="tab" @click="change_tab(tab)"
                    :style="right_panel.button"
                    @click.prevent="OPEN_RIGHT_PANEL('button')"
            >
                {{tab}}
            </button>
        </div>
        <h5 class="center-align">{{currentTab.toUpperCase()}}</h5>
        <div class="border-bottom" :style="`background: ${right_panel.button['color']}`"></div>
        <div class="news" v-if="currentTab === 'news'">
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
        </div>
        <div class="best" v-else-if="currentTab === 'best'">
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Best item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Best item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Best item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Best item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
        </div>
        <div class="best" v-else>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Top item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Top item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Top item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Top item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>News item</span>
                </div>
            </div>
        </div>
        <div class="clear-both" style="clear: both"></div>
        <div style="display: flex; justify-content: center">
            <a href="#!" class="btn waves-effect waves-green view_more_btn">View more</a>
        </div>
    </div>
</template>

<script>
    import product_1 from '../../../components/reg-stage/products-box/Product-1'
    import product_2 from '../../../components/reg-stage/products-box/Product-2'
    import product_3 from '../../../components/reg-stage/products-box/Product-3'
    import product_4 from '../../../components/reg-stage/products-box/Product-4'
    import product_5 from '../../../components/reg-stage/products-box/Product-5'
    import product_6 from '../../../components/reg-stage/products-box/Product-6'
    import product_7 from '../../../components/reg-stage/products-box/Product-7'
    import product_8 from '../../../components/reg-stage/products-box/Product-8'
    import product_9 from '../../../components/reg-stage/products-box/Product-9'

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                tab_components: ['news', 'best', 'top'],
                currentTab: 'news',
            }
        },
        components: {
            'product-1': product_1,
            'product-2': product_2,
            'product-3': product_3,
            'product-4': product_4,
            'product-5': product_5,
            'product-6': product_6,
            'product-7': product_7,
            'product-8': product_8,
            'product-9': product_9,
        },
        computed: {
            ...mapState(['product_boxs', 'right_panel']),
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL']),
            change_tab(tab) {
                this.currentTab = tab
            }

        }
    }
</script>

<style scoped>
    #product-component {
        cursor: grab;
    }

    .best-sales {
        margin-top: 80px;
    }

    .product-item {
        position: relative;
        border: dotted;
        height: 365px;
    }

    .product-item span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .tab-list {
        display: flex;
        justify-content: center;
    }

    .tab-list button {
        margin: 0 10px;
    }

    .border-bottom {
        width: 100px;
        height: 2px;
        background-color: #6ba229;
        margin: 10px auto;
        border-radius: 10px;
    }

    .btn {
        background-color: #6ba229;
    }

    .view_more_btn {
        margin-top: 20px;
    }
</style>