import { APPS } from "./constants";

export const getApp = () =>{
    console.log(window.location.hostname);
    const subDomain= getSubDomain(window.location.hostname);
    
    const main = APPS.find((app) => app.main)
    if(!main) throw new Error("Must provide main app");
    console.log(subDomain);

    if(subDomain ==='') return main.app;
    const app=APPS.find((app) => subDomain === app.subdomain);
    console.log(app);
    if(!app)return main.app;
    
    return app.app;    
}

const getSubDomain = (location) =>{
    const locationParts = location.split('.')
    let sliceTill = -3

    const isLocalHost = locationParts.slice(-1)[0] === 'localhost';
    if(isLocalHost)sliceTill = -1
    return locationParts.slice(0,sliceTill).join('')
}