import { createWebHistory, createRouter } from "vue-router";
import PagePrincipale from "./components/pagePrincipale.vue";
import NewPartie from "./components/newPartie.vue";
import PartiesJouees from "./components/partiesJouees.vue";
import Statistiques from "./components/statistiques.vue";
import PageDefaite from "./components/pageDefaite.vue";
import PageVictoire from "./components/pageVictoire.vue";

const routes = [
    {
        path: "/",
        name: "PagePrincipale",
        component: PagePrincipale,
    },
    {
        path: '/newPartie',
        name: 'newpartie',
        component: NewPartie,
    },
    {
        path: '/partiesJouees',
        name: 'PartiesJouees',
        component: PartiesJouees,
    },
    {
        path: '/statistiques',
        name: 'Statistiques',
        component: Statistiques,
    },
    {
        path: '/pageDefaite',
        name: 'PageDefaite',
        component: PageDefaite,
    },
    {
        path: '/pageVictoire',
        name: 'PageVictoire',
        component: PageVictoire,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
