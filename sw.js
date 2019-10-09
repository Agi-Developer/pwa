self.addEventListener('install', evt => {
    console.log('service worker has been installed')
} ) 

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');   
    // sw once install the activate automatically fire  
})

// fetch events , what ever could be js, css html this event will be fired 

// it is useful understanding package and module, 
// module that is single js file that has reasonable functionality, 
// a package or dir one or more module sideeffect, 
// package.json file which are metadata of the package
// package can be very simple single js file, already does this which is why we call node package manager

// most of the common thing npm for still look at other sample or starter project, while do this project like this very typical flow like through this
// the first we thing do clone the projects get once we have the porject cloned we moving to the project dir
// // and then always install npm install 
// // this will install the package.json file dependency always install that 
// // now u are going start the project using npm start 
// getting help with npm actually pretty cool using command line util like npm -h
// u can use npm install -h give more specific command usally just diff kind of usage command 
// But in other option 
// // find the article npm  help-search remove

// there is one specific topic u should be were as and u want play back to multiple type 
// that is misc/config page, there is list all other shortcut method convience to able to do


// if u r going to working in npm, thats really 2 kinds projects will be working on the 
// 1 is typical project work u building something for users
// that is website or web app something of that nature where there is going to users using somewhere kind 
// 2 the other kind of poject u deal with npm is the 3rd party package something u build for othe dev to consume we talk about 3 party dev construction layer on 

// the couple of reason u want create package.json file the 
// 1. Track dependencies the packages u r using, so the other packages download install throw npm u want to keep track of those 
// 2. other reason is quick easy to create scripts this is helping u avoid list of grunt or gulp just saving a little bit typing a u want to setup  