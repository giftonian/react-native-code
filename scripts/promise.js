// Promises example with solution

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject("Error while registering user");
            console.log("Register ends here...#");
            //resolve('Bye!!');   
            const userData = { id: 1, name: "Usman" };   
            resolve(userData); 
        }, 2000);
    });
        
   }
   
   function sendEmail(userData) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("Sending email to :", userData.name);
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
   .then( (userData) =>
    {
        return sendEmail(userData)
    })
   .then(login)
   .then(getData)
   .then(displayData)
   .catch( (err) => { // catch will be called after a return reject() call
    console.log("Here is an error ... " + err) // err => Data passed to reject() function
   });

   console.log("Remaining app code not dependent on above user regisration/login/display scenario");
   


   // ./Promises example with solution