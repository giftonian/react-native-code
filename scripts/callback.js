/*
To run this file in console, copy/paste the following code:
var script = document.createElement('script');
script.src = 'scripts/callback.js';
document.head.appendChild(script);
*/
console.log("Welcome to Callbacks Learning");

   // Another callback hell example with solution

   function register(cb) {
    setTimeout(() => {
        console.log("Register ends here...");
        const emailObj = {to: "waqastariqdar@gmail.com", from:"admin@pugc.com", message:"This is welcome email"};
        cb(emailObj);
    }, 2000);    
   }
   
   function sendEmail(emailObj, cb) {
    setTimeout(() => {
        console.log(emailObj)
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

   register( (emailObject) => {
    //console.log(emailObject)  
    sendEmail(emailObject, () => {                
        login(() => {
            getData(function () {
                displayData();
            });            
        });        
    });    
   });  

   console.log("Remaining app code not dependent on above user regisration/login/display scenario");
   


   // ./Another callback hell example with solution