import { createRouter, createWebHistory } from 'vue-router';
import vMainWrapper from '../components/v-main-wrapper.vue'
import vCatalog from '../components/v-catalog.vue'
import vHeader from "@/components/v-header.vue";
import vFooter from "@/components/v-footer.vue";
import vCart from "@/components/v-cart.vue";
import vLiked from "@/components/v-liked.vue";
import VLoginPage from "@/components/v-login-page.vue";
const routes = [
    {
        path: '/store',
        components: {
            default: vMainWrapper,
            vHeader,
            vFooter
        }
    },
    {
        path: '/catalog',
        components: {
            default: vCatalog,
            vHeader,
            vFooter
        },
        props: true,
    },
    {
        path: '/cart',
        components: {
            default: vCart,
            vHeader,
            vFooter
        },
        props: true,
    },
    {
        path: '/login',
        components: {
            default:VLoginPage,
            vHeader,
            vFooter
        },
    },
    {
        path: '/liked',
        components: {
            default: vLiked,
            vHeader,
            vFooter
        },
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;  
