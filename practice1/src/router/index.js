import Vue from 'vue'
import Router from 'vue-router'
import GoodList from "@/components/GoodList"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/goods/:goodId/user/:userId',
            name: 'GoodList',
            component: GoodList
        }
    ]
})