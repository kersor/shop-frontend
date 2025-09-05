import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../auth";
import { rootApi } from "../rootApi";

export const authMiddleware = createListenerMiddleware()

authMiddleware.startListening({
    matcher: authApi.endpoints.register.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        const NAME_KEY_TOKEN = process.env.REACT_APP_KEY_TOKEN || ""
        document.cookie = `${NAME_KEY_TOKEN}=${action.payload.access_token}`
    }
})

authMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        const NAME_KEY_TOKEN = process.env.REACT_APP_KEY_TOKEN || ""
        document.cookie = `${NAME_KEY_TOKEN}=${action.payload.access_token}`
    }
})

