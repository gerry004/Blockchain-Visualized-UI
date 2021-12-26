import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

store.dispatch('home/createAccount')

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')