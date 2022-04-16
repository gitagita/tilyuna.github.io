import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import View from "./views/View";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/", 
            component: Home,
            props: true
        },
        {
            path: "/view/:id", 
            component: View,
            name: "View",
            props: true
        }
    ]
});

export default router;