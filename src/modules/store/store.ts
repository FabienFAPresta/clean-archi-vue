import { createPinia } from "pinia";
import { Dependencies } from "./dependencies";

export type AppStore = ReturnType<typeof createStore>;

export const createStore = (config: {
    initialState?: any;
    dependencies: Dependencies;
}) => {
    const store = createPinia();

    return store;
}