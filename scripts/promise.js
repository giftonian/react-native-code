// Another callback hell example with solution

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject("Error while registering user");
            console.log("Register ends here...");
            resolve('Bye!!');      
        }, 2000);
    });
        
   }
   
   function sendEmail() {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("Email ends here...");
            resolve();        
        }, 1000);
    });
        
   }

   function login() {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("Login ends here...");
            resolve();      
        }, 2000);
    });      
   }

   function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("GetData ends here...");    
            resolve();   
        }, 1000);
    });    
   }

   function displayData () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("DisplayData ends here...");
            resolve();     
        }, 1000);
    });      
   }

//    register()
//    .then( () => {
//     console.log("Beautifull")
//    });
   register()
   .then(sendEmail)
   .then(login)
   .then(getData)
   .then(displayData)
   .catch( (err) => {
    console.log("Here is an error ... " + err)
   });

   console.log("Remaining app code not dependent on above user regisration/login/display scenario");
   


   // ./Another callback hell example with solution