import { createApp } from 'vue'
import { app } from "@/modules/app/main";
import App from "@/modules/app/vuejs/App.vue";

createApp(App).use(app.store).mount('#app')