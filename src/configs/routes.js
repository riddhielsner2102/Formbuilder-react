import { lazy } from "react";
export const routes={
    homepage:{
        path:'/',
        element:lazy(()=>import('../pages/home/Home'))   ,
        exact:true
    },
    loginPage:{
        path:'/',
        element:lazy(()=>import('../pages/login/Login'))   ,
        exact:true
    }
}
export const renderRoutes=Object.entries(routes)