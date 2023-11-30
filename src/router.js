import { createRouter, createWebHistory } from 'vue-router';
import vMainWrapper from './components/v-main-wrapper.vue'
import vCatalog from './components/v-catalog.vue'
import vHeader from "@/components/v-header.vue";
import vFooter from "@/components/v-footer.vue";
const routes = [
    {
        path: '/',
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;  
