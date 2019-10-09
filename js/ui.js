// all of the content waiting for before u do this
document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// 1.
// pwa provides native app 
// manifeast file to create info about our to native browser, info properly to native mobile app
// pwa app can be installed once in a mobile just regular native app comp

// 3. Service worker
// Load content offline -> expect from a modern app that runs on a mobile device such as load contents offline
// so u can view the app without an intenet connection by using cached assets and data 
// they also allow us to Use Background Sync -> so that if a user tries to perform an action while the rough line 
// that normally requires a connection for ex posting a status update then it will performing the action background 
// when a connection is re-established and theat is not really awesome the'r also going to allow us to do things like 
// use push notification so that our app can notify users on a device of something for example new content reminders or 
// new message they might have on the app so these are the kinds of things that services workers allow us to do 
// but what exactly are they are just js files they're not the kind of js files that ur probably used to writing for ur websites
// ex : html css js files and then u upload those files a server when u req them by going to the web addresses we see them in the browser 
// see js runs on a single thread inside the browser which tightly coupled with the html page and it can be access the dom manipulate the page content these
// connection b/w js file and dom content is quite strong 'ts couple together
// now when we create SW js file it does't run on this same thread as our regular js files 
// it runs diff thread in another part of the browser isolated away from the html page 
// so right now these thread does't have access to the dom so it cannot directly read change or remove page content 
// instead our service workers have a different job to do service 
// SW run in the background they are a background process  they event carry running in the background when our app closes whether that bworser tab or whole app mobile device 
// now their job is to handle the app like functionality by listening by reacting to events which occurs in the brow such as
// push notification made from server to browser or fetch http reqs made by the brow for exp to get an image or css or something else 
// SW listening for these diff events and then it can react or do something when an event occurs 
// important point here loading on seperate thread they donot have access to the dom and they sit in the background listening for events and then they can react to these diff events 

// sw called sw.js, now create the in the root directory of the app that gives it a scope of our entire site a global scope 
// if you like meaning later on it can access all diff files in the sites if we crete subdir it only access subdire

// 1 step in sw we register it in brow now we do this from our js file app.js not on sw.js files 
// reg the service worer and put onto that seperate service work thread so when we do this the browser fires the install event which is the brow basically installing sw so this is lifcycle events, and we can listen to this life event inside service worker itself and could react to it in some way when it happens if we wanted to
// ex we could be listening for when the instell event fires that point we could be doing some asset caching so the later on access those assets that we cached when were offline we won't need a connection to get them and we'll learn all about that later on so these install event fires only wants when the sw is reg so we reg it it fires the install event and then and some points after 
// the service work is installed it becomes active now at the point the brow fires an active event which we can also listen to and react to if we want inside the service worker fires now 
// so these point once the sw is active u can access all the diff pages diff files inside its scope now placed root directory it means that it can access all the diff files and pages on the site and that means at that point when 'ts active the sw can all these diff fetch events that happen or http req if u like and it can intercept them if needed 

// now at some point imagine we reloaded the page the browser does that the service worker gothrough exactly same the lifecycle every time we do that, when refresh the page the service workere still be registered bcz that hppns inside a app.js but only reinstall the service worker if the code inside the service worker file has changed since that last time it was installed in the browser 
// so that when we reload the page if there's been no change to the sw code it will not reinstall bcz it's already there it doesn't deleted when we refreash the page it remains in the background and then when we reload no change after we reg the service worker we don't need to reinstall it now if there is a change to our sw file then it will reinstall it, now does that mean it also activates the new sw and replaces the old one completely well 
// now when we new sw is installed when we reload the page but then it stop remains in waiting to be activated meanwhile the old sw is going to continue to be active by default right new sw is only going to become active after all instances of our app is closed now that could be all the tabs that we have open in a browser or just app themselves on mobiles and then when its reopened at the point the brow will take new sw that's in waiting and it's going to activate it 
// now it does this because after we make a change to our sw file the page intially loads with that older versions sw installed right and on that web page load in the older version is controlling the app so after the page loads the brows also starts to insall new sw right which may take small amount of time to complete if after it was installed he activated that new version automatically without page refresh it

// "name": "Food Ninja", // Name of the app
//   "short_name": "FoodNinja", // this underneath the icon
//   "start_url": "/index.html", // this is called running start screen on browser
//   "display": "standalone", // i want the app look like native app 
//   "background_color": "#FFE9D2",
//   "theme_color": "#FFE1C4",
//   "orientation": "portrait-primary", // going to be open potrait 
  