
import { createRouter, createWebHashHistory } from "vue-router";
import notFoundComponent from "@/public/not-found/pages/not-found.component.vue"

const routes = [

    { path: "/:pathMatch(.*)*", component: notFoundComponent },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;