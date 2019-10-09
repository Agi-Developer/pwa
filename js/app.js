if ('serviceWorker' in navigator) {
    // normally navigator browser and info about it and we 're checking to see if this sw property exists 
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registered ', reg))
        .catch((err) => console.log('service worker not registered ',err))
        // so here promise deal with async tasks , it s in top bz sometime to do it returns to us a promise which is special value in js and that promises 
        // sw only work on pages where they'r served over a secure https connection now localhost we have up here is not https but that is an exception to the rule and its an exception so that we can easily develop apps using service but this is important when u come to deploying a apps now logic behind this is that sw are very powerful they can intercept reqs made by the browser so they need to be secure 
}