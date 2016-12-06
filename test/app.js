import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Action from '../src/main.js'

Vue.use(VueRouter)

Vue.use(Action)

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
]
let router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})