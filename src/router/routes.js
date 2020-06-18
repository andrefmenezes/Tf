// import of components
import Home from '@/components/Home.vue';
import Port from '@/components/Portifolio.vue';
import Rv from '@/components/Rv.vue';
import Proventos from '@/components/Proventos.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/portifolio',
        component: Port
    },
    {
        path: '/rv',
        component: Rv
    },
    {
        path: '/prov',
        component: Proventos
    },

];

export default { routes };
