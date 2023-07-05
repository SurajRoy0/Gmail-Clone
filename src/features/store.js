import { configureStore } from '@reduxjs/toolkit';
import maleReducer from './MailSilece';


const store = configureStore({
    reducer: {
        mail: maleReducer
    }
})

export default store;

