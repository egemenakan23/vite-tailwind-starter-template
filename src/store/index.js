import { createStore } from 'vuex'
import user from '../store/modules/user'

const store = createStore({
    state: () => ({
        //
        count: 36,
    }),
    modules: {
        user,
    },
})

export default store
