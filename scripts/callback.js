/*
To run this file in console, copy/paste the following code:
var script = document.createElement('script');
script.src = 'scripts/callback.js';
document.head.appendChild(script);
*/
console.log("Welcome to Callbacks Learning");

   // Another callback hell example with solution

   function register(cb, str) {
    setTimeout(() => {
        console.log("Register ends here..." + str);
        cb({to: "waqastariqdar@gmail.com", from:"admin@pugc.com", message:"This is welcome email"});
    }, 2000);    
   }
   
   function sendEmail(cb) {
    setTimeout(() => {
        console.log("Email ends here...");
        cb();
    }, 1000);    
   }

   function login(cb) {
    setTimeout(() => {
        console.log("Login ends here...");
        cb();
    }, 2000);    
    
   }

   function getData(cb) {
    setTimeout(() => {
        console.log("GetData ends here...");
        cb();
    }, 1000);
    
   }

   function displayData () {
    setTimeout(() => {
        console.log("DisplayData ends here...");        
    }, 1000);    
   }

   register(function (emailObject) {
    //console.log(emailObject);     
    sendEmail(() => {                
        login(() => {
            getData(function () {
                displayData();
            });            
        });        
    });    
   }, "TEST");  

   console.log("Remaining app code not dependent on above user regisration/login/display scenario");
   


   // ./Another callback hell example with solution