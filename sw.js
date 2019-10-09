self.addEventListener('install', evt => {
    console.log('service worker has been installed')
} ) 

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');   
    // sw once install the activate automatically fire  
})

// fetch events , what ever could be js, css html this event will be fired 