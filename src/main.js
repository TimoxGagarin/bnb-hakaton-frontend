import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    }
})


createApp(App).use(store).use(router).use(vuetify).mount('#app')
