import { AdminRouter, AppRouter, StudentRouter } from "../routers";

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
        subdomain: 'student',
        app:StudentRouter,
        main:false
    },
]