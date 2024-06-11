import { AdminRouter, AppRouter, DevRouter } from "../routers";

export const APPS = [
    {
        subdomain: 'www',
        app:AppRouter,
        main:true
    },
    {
        subdomain: 'admin',
        app:AdminRouter,
        main:false
    },
    {
        subdomain: 'dev',
        app:DevRouter,
        main:false
    },
]