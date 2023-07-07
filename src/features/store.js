import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './MailSilece';
import authReducer from './UserSlice'


const store = configureStore({
    reducer: {
        mail: mailReducer,
        auth: authReducer
    }
})

export default store;

